# MSTS/OpenRails ENG/WAG script Language Support

A Visual Studio Code extension that provides comprehensive language support for ENG, INC, WAG, and CVF files used in Microsoft Train Simulator and OpenRails.

## Features

### Syntax Highlighting
- **File Types**: `.eng`, `.inc`, `.wag`, `.cvf`, `.sms`
- **Sections**: Engine, Wagon, CabView, Sound, Lights, Effects, Controls, etc.
- **Keywords**: Engine parameters, physics properties, sound definitions, animations, cabview controls, and more
- **Comments**: Both regular `comment()` and special `comment(**)` syntax with proper nesting
- **Strings**: Quoted file paths and parameter values
- **Numbers**: Integer and floating-point values with scientific notation
- **CVF Controls**: Digital displays, levers, dials, multi-state displays, and cabview elements

### Language Configuration
- **Smart Folding**: Automatic code folding for sections and comment blocks
- **Auto-Closing**: Automatic closing of parentheses and quotes
- **Bracket Matching**: Highlighting of matching brackets and parentheses
- **Comment Support**: Block comment toggling with Ctrl+/

### File Path Navigation (Ctrl+Click)
- **Smart Path Resolution**: Automatically resolves relative file paths
- **Multiple Strategies**: Tries different path combinations to find files
- **Supported Extensions**: `.s`, `.sms`, `.wav`, `.mp3`, `.ogg`, `.inc`, `.eng`, `.wag`, `.cvf`, `.ace`, `.dds`, `.tga`, `.bmp`

## Supported File Types

- **`.eng`** - Engine definition files (locomotives)
- **`.inc`** - Include files (shared definitions)
- **`.wag`** - Wagon definition files (cars, carriages)
- **`.cvf`** - Cabview definition files (cockpit layouts and controls)
- **`.sms`** - Sound definition files (audio management system)

## SMS (Sound Management System) Support

This extension provides specialized support for SMS files used to define train audio systems:

### Sound Structure
- **ScalabiltyGroup** - Priority-based sound groups
- **Streams** - Audio stream configuration
- **Triggers** - Event-based sound activation
- **Activation/Deactivation** - Sound state management

### Sound Types
- **SoundLoop** - Continuous looping sounds (engine, wheels)
- **PlayOneShot** - Single-play sounds (horn, bell, brakes)
- **Variable** - Parameter-controlled sounds
- **Discrete** - Multi-file sound selections

### Control Parameters
- **Volume/Priority** - Audio mixing controls
- **FrequencyCurve/VolumeCurve** - Dynamic audio modulation
- **SpeedControlled** - Speed-based sound variation
- **RandomDelay/InitialDelay** - Timing controls
- **Distance3D/Doppler3D** - Spatial audio effects

### Selection Methods
- **RandomSelection** - Random sound file picking
- **SequentialSelection** - Ordered sound playback

## Syntax Highlighting Features

- **Sections**: Engine, Wagon, CabView, Sound, Lights, Effects, etc.
- **Keywords**: Control flow (if, else, endif), logical operators (and, or, not)
- **Parameters**: MaxPower, MaxForce, Mass, Length, BrakeForce, etc.
- **Comments**: comment(...) block comments
- **String literals**: Quoted strings for names and descriptions
- **Numbers**: Integer and floating-point values with scientific notation
- **Operators**: Mathematical and comparison operators

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "ENG Language Support"
4. Click Install

## Development

To set up the development environment:

1. Clone this repository
2. Open in VS Code
3. Install dependencies: `npm install`
4. Compile: `npm run compile`
5. Press F5 to launch a new Extension Development Host window

## Building

To compile the extension:

```bash
npm run compile
```

To watch for changes:

```bash
npm run watch
```

## Package Structure

- `package.json` - Extension manifest
- `src/extension.ts` - Extension entry point
- `language-configuration.json` - Language configuration
- `syntaxes/eng.tmLanguage.json` - TextMate grammar for syntax highlighting
- `sample.eng` - Example ENG file for testing

## ENG and INC File Formats

**ENG files** are configuration files used by Microsoft Train Simulator and OpenRails to define:
- **Locomotives**: Engine specifications, performance characteristics
- **Rolling Stock**: Wagon properties, cargo definitions
- **Cab Views**: Control layouts and instrument panels
- **Physics**: Mass, dimensions, brake systems, coupling
- **Sounds**: Audio configuration and 3D positioning
- **Animations**: Moving parts and visual effects

**INC files** are include files that contain:
- **Shared configurations**: Common parameters used across multiple locomotives
- **Reusable components**: Engine definitions, brake systems, sound configurations
- **Modular definitions**: Separated sections that can be included in main ENG files

**WAG files** are wagon definition files that specify:
- **Rolling stock properties**: Freight cars, passenger cars, specialized wagons
- **Physical characteristics**: Mass, dimensions, loading capacity
- **Brake systems**: Air brake configurations, handbrake settings
- **Cargo definitions**: Load types, loading animations, weight distribution

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
