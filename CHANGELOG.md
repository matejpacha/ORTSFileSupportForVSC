# Changelog

All notable changes to the ENG Language Support extension will be documented in this file.

## [1.5.1] - 2025-09-24

### Changed
- **Skip keyword treatment** - Moved `skip` from control keywords to comments for better semantic highlighting
- Skip statements now display as comments (gray) instead of control keywords (purple/blue)
- Improved code readability for commented-out sections using `skip`

## [1.5.0] - 2025-09-24

### Added
- **SMS file support** - Complete support for Sound definition files (*.sms)
- SMS-specific syntax highlighting for sound management system
- New sound-related keywords: ScalabiltyGroup, Activation, Deactivation, Streams, Triggers
- Sound control types: SoundLoop, PlayOneShot, Variable, SpeedControlled, FrequencyCurve, VolumeCurve
- File path navigation support for audio files (.wav, .mp3, .ogg) in SMS files
- Sound selection methods: RandomSelection, SequentialSelection
- Audio properties: Volume, Priority, InitialDelay, RandomDelay, Distance3D, Doppler3D
- Updated documentation with SMS examples and sound system descriptions

## [1.4.0] - 2025-09-24

### Added
- **CVF file support** - Complete support for Cabview definition files (*.cvf)
- CVF-specific syntax highlighting for cabview controls and properties
- New control types: Digital, MultiStateDisplay, CabSignalDisplay, Lever, Dial, TwoState, TriState, DigitalClock
- CVF keywords: SPEEDOMETER, AMMETER, BRAKE_PIPE, LINE_VOLTAGE, KM_PER_HOUR, BAR, AMPS, KILOVOLTS
- Control styles: NEEDLE, POINTER, DIGITAL, ONOFF, WHILE_PRESSED, SPRUNG, NOT_SPRUNG
- File path navigation support for ACE texture files in CVF files
- Updated documentation with CVF examples and control descriptions

## [1.3.0] - 2025-09-24

### Added
- **File path navigation** - Ctrl+Click support for file paths in strings
- DocumentLinkProvider for opening referenced files (sounds, models, textures, includes)
- Support for various file extensions: `.s`, `.sms`, `.wav`, `.inc`, `.eng`, `.wag`, `.ace`, `.dds`, `.tga`, `.bmp`, `.cvf`
- Intelligent path resolution (relative, workspace, parent directories)
- Test file with comprehensive file path examples

### Supported File Path Patterns
- Sound files: `Sound ( "path/file.sms" )`
- Shape files: `WagonShape ( "path/file.s" )`
- Include files: `include ( "path/file.inc" )`
- Mixed path separators (Windows `\` and Unix `/`)

## [1.2.0] - 2025-09-24

### Added
- Support for `.wag` (wagon definition) files
- Sample WAG file with comprehensive wagon configuration examples
- Enhanced documentation for wagon-specific features

### Changed
- Updated language aliases to include "inc", "wag", and "OpenRails"
- Expanded keywords to include "wagon" for better discoverability

## [1.1.0] - 2025-09-24

### Added
- Support for `.inc` (include) files
- Sample INC file with shared configuration examples
- Enhanced documentation for include file usage

### Changed
- Updated file associations to recognize both ENG and INC files
- Improved README with detailed file format descriptions

## [1.0.0] - 2025-09-24

### Added
- Initial release with ENG file support
- Syntax highlighting for Train Simulator / OpenRails ENG files
- Code folding for all major sections
- Support for both `comment(...)` and `comment(**...**)` comment styles
- Comprehensive language configuration
- Programmatic folding provider
- Support for 40+ ENG sections and keywords
- Case-insensitive comment support
- Professional packaging and documentation

### Features
- Complete syntax highlighting for ENG files
- Collapsible sections for better code organization
- Multiple comment styles support
- Bracket matching and auto-closing pairs
- Word pattern recognition optimized for Train Simulator syntax