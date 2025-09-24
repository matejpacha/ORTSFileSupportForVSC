import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

class EngDocumentLinkProvider implements vscode.DocumentLinkProvider {
	provideDocumentLinks(document: vscode.TextDocument): vscode.DocumentLink[] {
		const documentLinks: vscode.DocumentLink[] = [];
		
		for (let i = 0; i < document.lineCount; i++) {
			const line = document.lineAt(i);
			const text = line.text;
			
			// Match file paths in quotes - common patterns in ENG, CVF, and SMS files
			const filePathPatterns = [
				// Sound files: Sound ( "path/to/file.sms" )
				/Sound\s*\(\s*"([^"]+\.(?:sms|wav))"\s*\)/gi,
				// Shape files: WagonShape ( "path/to/file.s" ), FreightShape ( "path/to/file.s" )
				/(?:WagonShape|FreightShape|CabViewFile|HeadlightShape|Name3D)\s*\(\s*"([^"]+\.s)"\s*\)/gi,
				// CVF-specific files: CabViewFile, CabViewWindowFile, Graphic
				/(?:CabViewFile|CabViewWindowFile|Graphic)\s*\(\s*"([^"]+\.(?:ace|dds|tga|bmp))"\s*\)/gi,
				// Include files: include ( "path/to/file.inc" )
				/include\s*\(\s*"([^"]+\.(?:inc|eng|wag|cvf|sms))"\s*\)/gi,
				// SMS-specific files: File, SoundLoop references
				/(?:File|SoundLoop)\s*\(\s*"([^"]+\.(?:wav|mp3|ogg))"\s*[^)]*\)/gi,
				// Generic file paths in quotes
				/"([^"]*\\[^"]*\.(?:s|sms|wav|mp3|ogg|inc|eng|wag|cvf|ace|dds|tga|bmp))"/gi,
				// Alternative path format with forward slashes
				/"([^"]*\/[^"]*\.(?:s|sms|wav|mp3|ogg|inc|eng|wag|cvf|ace|dds|tga|bmp))"/gi
			];
			
			for (const pattern of filePathPatterns) {
				let match;
				while ((match = pattern.exec(text)) !== null) {
					const filePath = match[1];
					const startPos = new vscode.Position(i, match.index + match[0].indexOf(filePath));
					const endPos = new vscode.Position(i, startPos.character + filePath.length);
					const range = new vscode.Range(startPos, endPos);
					
					// Try to resolve the file path
					const resolvedPath = this.resolveFilePath(document.uri, filePath);
					if (resolvedPath) {
						const link = new vscode.DocumentLink(range, resolvedPath);
						link.tooltip = `Open ${path.basename(filePath)}`;
						documentLinks.push(link);
					}
				}
			}
		}
		
		return documentLinks;
	}
	
	private resolveFilePath(documentUri: vscode.Uri, filePath: string): vscode.Uri | undefined {
		const documentDir = path.dirname(documentUri.fsPath);
		
		// Convert backslashes to forward slashes for consistent handling
		const normalizedPath = filePath.replace(/\\/g, '/');
		
		// Try different resolution strategies
		const possiblePaths = [
			// Relative to current document
			path.resolve(documentDir, normalizedPath),
			// Relative to workspace root
			vscode.workspace.workspaceFolders?.[0] ? 
				path.resolve(vscode.workspace.workspaceFolders[0].uri.fsPath, normalizedPath) : null,
			// Try going up one directory (common in Train Simulator structure)
			path.resolve(documentDir, '..', normalizedPath),
			// Try going up two directories
			path.resolve(documentDir, '../..', normalizedPath)
		].filter(p => p !== null) as string[];
		
		for (const possiblePath of possiblePaths) {
			try {
				if (fs.existsSync(possiblePath)) {
					return vscode.Uri.file(possiblePath);
				}
			} catch (error) {
				// Continue to next path
			}
		}
		
		// If file doesn't exist, still create a link (user might want to create the file)
		const fallbackPath = path.resolve(documentDir, normalizedPath);
		return vscode.Uri.file(fallbackPath);
	}
}

class EngFoldingProvider implements vscode.FoldingRangeProvider {
	provideFoldingRanges(document: vscode.TextDocument): vscode.FoldingRange[] {
		const foldingRanges: vscode.FoldingRange[] = [];
		const stack: { start: number, name: string, type: 'regular' | 'special' }[] = [];
		
		for (let i = 0; i < document.lineCount; i++) {
			const line = document.lineAt(i);
			const text = line.text.trim();
			
			// Match special comment style comment(**...**)
			const specialCommentMatch = text.match(/^(comment|Comment)\s*\(\*\*/i);
			if (specialCommentMatch) {
				stack.push({ start: i, name: 'comment', type: 'special' });
				continue;
			}
			
			// Match opening parentheses for sections and regular comments
			const openMatch = text.match(/^(comment|Comment|Engine|Wagon|CabView|Sound|Lights|Effects|Controls|Physics|Performance|Brakes|TractionCutOffRelay|Pantographs|PowerSupply|CircuitBreaker|EmergencyBrakes|TrainBrakeController|EngineBrakeController|DynamicBrake|GearBox|Diesel|Electric|Steam|Tender|HeadOut|CabView3D|FreightAnim|Headlight|Pantograph|Coupling|Spring|Animation|FreightShape|ORTSDieselEngines|DieselPowerTab|DieselConsumptionTab|ThrottleRPMTab|DieselTorqueTab|ORTSBrakeShoeFriction|EngineControllers|Throttle|NumNotches|Brake_Engine|Brake_Train|Description|EngineOperatingProcedures)\s*\(/i);
			
			if (openMatch) {
				stack.push({ start: i, name: openMatch[1], type: 'regular' });
			}
			
			// Match closing for special comments (**)
			if (text.includes('**)') && stack.length > 0 && stack[stack.length - 1].type === 'special') {
				const block = stack.pop();
				if (block && i >= block.start) {
					foldingRanges.push(new vscode.FoldingRange(block.start, i, vscode.FoldingRangeKind.Comment));
				}
			}
			// Match closing parentheses for regular sections
			else if (text === ')' && stack.length > 0 && stack[stack.length - 1].type === 'regular') {
				const block = stack.pop();
				if (block && i > block.start) {
					const kind = block.name.toLowerCase() === 'comment' ? 
						vscode.FoldingRangeKind.Comment : 
						vscode.FoldingRangeKind.Region;
					foldingRanges.push(new vscode.FoldingRange(block.start, i, kind));
				}
			}
		}
		
		return foldingRanges;
	}
}

export function activate(context: vscode.ExtensionContext) {
	console.log('ENG Language Support extension is now active!');
	
	// Register folding provider
	const foldingProvider = vscode.languages.registerFoldingRangeProvider(
		{ scheme: 'file', language: 'eng' },
		new EngFoldingProvider()
	);
	
	// Register document link provider for file path navigation
	const linkProvider = vscode.languages.registerDocumentLinkProvider(
		{ scheme: 'file', language: 'eng' },
		new EngDocumentLinkProvider()
	);
	
	context.subscriptions.push(foldingProvider, linkProvider);
}

export function deactivate() {}