feat: Release v1.5.4 - Enhanced SMS and CVF file folding support

Major folding improvements for Train Simulator Sound Management System (SMS) and Cabview (CVF) files, resolving user-reported folding issues.

## 🔧 Fixed Issues

### SMS File Folding Support
- **Root Cause**: Folding regex patterns not properly recognizing SMS-specific structures
- **Resolution**: Enhanced language configuration for SMS syntax patterns
- **Structures Now Foldable**:
  - `Tr_SMS ( ... )` - Main sound management container
  - `ScalabiltyGroup ( ... )` - Priority-based sound grouping
  - `Activation ( ... )` / `Deactivation ( ... )` - State management
  - `Stream ( ... )` / `Streams ( ... )` - Audio stream configuration
  - `Trigger ( ... )` / `Triggers ( ... )` - Sound event triggers
  - `SoundLoop ( ... )` - Looping audio definitions
  - `FrequencyCurve( ... )` / `VolumeCurve( ... )` - Audio curves
  - `CurvePoints ( ... )` - Curve point definitions
  - `Variable ( ... )` - Variable-controlled sounds
  - `PlayOneShot ( ... )` - Single-play audio events

### CVF File Folding Support  
- **Root Cause**: Similar regex pattern recognition issues for cabview structures
- **Resolution**: Improved folding configuration for CVF control hierarchies
- **Structures Now Foldable**:
  - `Tr_CabViewFile ( ... )` - Main cabview container
  - `CabViewControls ( ... )` - Control definitions container
  - `Digital ( ... )` - Digital display controls
  - `MultiStateDisplay ( ... )` - Multi-state visual elements
  - `Lever ( ... )` - Lever control definitions
  - `Dial ( ... )` - Gauge and dial controls
  - `TwoState ( ... )` / `TriState ( ... )` - State-based controls
  - `PositiveColour ( ... )` - Color configuration blocks
  - `States ( ... )` - State definition containers
  - `State ( ... )` - Individual state definitions

## 🚀 Technical Improvements

### Language Configuration Enhancements
- **Refined Folding Regex**: Improved pattern matching for Train Simulator syntax
- **Better Structure Recognition**: Enhanced detection of nested control definitions
- **Comprehensive Testing**: Verified folding across all file format examples
- **Performance Optimization**: Streamlined regex patterns for better editor responsiveness

### File Format Coverage
- **SMS Files**: Complete audio system folding support
- **CVF Files**: Full cabview control folding support  
- **ENG/WAG Files**: Maintained existing robust folding
- **INC Files**: Inherit comprehensive folding through shared language mapping

## 📦 Package Information
- **Version**: 1.5.4
- **Package Size**: 2.52 MB (increased from 360.82 KB due to expanded examples)
- **Files**: 43 files (comprehensive documentation and examples)
- **Supported Extensions**: .eng, .inc, .wag, .cvf, .sms
- **Keyword Coverage**: 280+ keywords from 200,000+ analyzed files

## 📚 Documentation Updates
- **Enhanced Installation Guides**: Updated all version references to 1.5.4
- **Comprehensive Changelog**: Detailed folding improvement documentation
- **Technical Specifications**: Updated package information and feature lists
- **Professional Documentation**: Synchronized across all .md and .txt files

## 🧪 Testing & Verification
- **SMS Folding**: Verified all sound management structures fold correctly
- **CVF Folding**: Confirmed all cabview controls fold properly
- **Cross-Format**: Ensured no regression in ENG/WAG/INC folding
- **Examples Updated**: All sample files demonstrate proper folding behavior

## 🎯 User Impact
This release resolves reported folding issues for SMS and CVF files, providing a complete professional development experience for Train Simulator modders and developers. All Train Simulator file formats now have comprehensive folding support for improved code navigation and organization.

Co-authored-by: GitHub Copilot <noreply@github.com>