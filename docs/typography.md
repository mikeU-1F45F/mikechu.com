# Typography System

This document outlines the typography system for Mike Chu's portfolio website, which follows the "Past, Present, Future" theme.

## Overview

The typography system is designed to reflect three distinct eras:

1. **Past Era (Windows 95)**: Authentic Windows 95 desktop environment typography
2. **Present Era (Modern)**: Contemporary typography with both Windows and Linux variants
3. **Future Era (AI Integration)**: Futuristic typography for advanced AI integration

## Font Families

### Past Era (Windows 95)
- **Headings**: MS Sans Serif
- **Body Text**: Fixedsys
- **Code**: Courier New

### Present Era (Modern)
- **Headings (Windows)**: Segoe UI
- **Headings (Linux)**: Ubuntu
- **Body Text**: Inter, SF Pro Text
- **Code**: Cascadia Code, Fira Code

### Future Era (AI Integration)
- **Headings**: Eurostile, Industry
- **Body Text**: Space Grotesk
- **Code**: JetBrains Mono

## Implementation

The typography system is implemented through:

1. **Tailwind Configuration**: Custom font families are defined in `tailwind.config.js`
2. **CSS Variables**: Font families are defined as CSS variables in `globals.css`
3. **Font Imports**: Fonts are imported in `fonts.css`
4. **Typography Component**: A React component for consistent typography usage

## Usage

### Using the Typography Component

```tsx
import { Typography, PastTypography, PresentTypography, FutureTypography } from '@/components/ui/Typography';

// Generic usage with era specified
<Typography era="past" variant="h1">Windows 95 Heading</Typography>

// Era-specific components
<PastTypography variant="h1">Windows 95 Heading</PastTypography>
<PresentTypography variant="p">Modern paragraph text</PresentTypography>
<FutureTypography variant="code">Future code snippet</FutureTypography>

// Present era with Linux variant
<PresentTypography variant="h2" presentVariant="linux">Ubuntu Heading</PresentTypography>
```

### Using CSS Classes Directly

```tsx
<h1 className="past-heading text-2xl">Windows 95 Heading</h1>
<p className="present-body">Modern paragraph text</p>
<pre className="future-code">Future code snippet</pre>
```

### Using CSS Variables

```css
.custom-element {
  font-family: var(--font-past-heading);
}
```

## Font Loading Strategy

- System fonts are used when available
- Web fonts are loaded with `font-display: swap` for optimal performance
- Appropriate fallbacks are provided for all custom fonts

## Validation

The typography system meets the requirements specified in the PRD:

- ✅ Past: Windows 95: MS Sans Serif, Fixedsys, Courier New
- ✅ Present: Segoe UI, Ubuntu, Inter, SF Pro Text
- ✅ Future: Eurostile, Space Grotesk, JetBrains Mono
- ✅ All fonts are properly loaded and fall back gracefully
