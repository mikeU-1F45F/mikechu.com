# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Mike Chu's personal portfolio website - a sophisticated, era-based portfolio that showcases 25 years of software engineering experience through three distinct time periods: Past (Windows 95 era), Present (Modern multi-environment), and Future (AI Integration). The site has been simplified to vanilla HTML/CSS/JavaScript for optimal performance and maintainability.

## Current Architecture

**Static Site Architecture** - Pure HTML/CSS/JS with no framework dependencies:

- **src/index.htm** - Single-page application structure with semantic sections (header, main with #about/#experience/#skills/#contact, footer)
- **src/styles/main.css** - CSS custom properties system with `:root` variables for theming, mobile-first responsive design
- **src/scripts/main.js** - Minimal JavaScript: DOM manipulation for copyright year, smooth scrolling event handlers
- **src/images/** - Image assets directory
- **docs/** - Comprehensive specifications for future framework migration (React/NextJS planned)

**Key Architectural Decisions:**
- HTML uses semantic structure ready for accessibility and SEO
- CSS organized with custom properties for easy theming system
- JavaScript follows modern ES6+ patterns with event delegation
- All assets are self-contained (except Google Fonts CDN)

## Development Commands

This is a static site with no build process. Development workflow:

```bash
# Serve locally (recommended for development)
cd src && python -m http.server 8000
# Then visit http://localhost:8000

# Alternative static servers (from project root)
npx serve src
npx http-server src

# For VS Code users
# Install Live Server extension and right-click src/index.htm → "Open with Live Server"
```

**No testing framework** - This is a simple static site with minimal JavaScript
**No linting setup** - Code follows standard HTML5/CSS3/ES6+ conventions
**No build process** - Direct file editing and browser refresh workflow

## Design System

### Era-Based Theme Architecture
The site is designed around three distinct eras, each with specific design patterns:

#### Past Era (Windows 95)
- **Colors**: Primary #00807E (teal), Secondary #C0C0C0 (silver), Accents #008080, #FF0000, #ffa500
- **Typography**: MS Sans Serif (headings), VT323 (body), Courier New (code)
- **Technologies**: .NET C#, PHP, Java Spring, ARC GIS, SQL, IIS, HTML+CSS+JS
- **Industries**: Government, Telecomm, Marketing, Document Management, Logistics, Education

#### Present Era (Modern)
- **Colors**: Primary #171C28 (navy), Secondary #0078D7 (windows blue), Accents #67E480, #E83E8C, #FF8A00
- **Typography**: Roboto (headings), Inter (body), Cascadia Code/Fira Code (code)
- **Technologies**: .NET C#, Python, TypeScript, AI Systems, Linux, Docker & Kubernetes
- **Industries**: MarTech

#### Future Era (AI Integration)
- **Colors**: Primary #080C24 (deep space), Secondary #FFFFFF (white), Accents #00F0FF, #FF00A0, #7B00FF
- **Typography**: Orbitron (headings), Space Grotesk (body), JetBrains Mono (code)
- **Technologies**: ML, NLP, Agent2Agent Protocol, Model Context Protocol, Systems Architecture
- **Industries**: Material Design, Climate Tech, Energy, Education, Finance, Transportation

### CSS Architecture
- Uses CSS custom properties (variables) defined in `:root`
- Responsive design with mobile-first approach
- Semantic HTML5 structure
- BEM-style class naming where applicable

## Key Features Implemented

1. **Responsive Design** - Mobile-first with breakpoints at 768px
2. **Smooth Scrolling** - JavaScript-powered smooth scroll for anchor links
3. **Dynamic Copyright** - Automatic year update in footer
4. **Accessibility** - Semantic HTML, proper heading hierarchy, keyboard navigation
5. **Performance** - Minimal dependencies, optimized assets, fast loading

## Migration Path to Full Era Experience

**Current State**: Simple portfolio → **Target**: Interactive era-based journey

The docs/ folder contains detailed specifications for migrating to a NextJS-based interactive experience:

1. **Era-Based Navigation**: Horizontal scroll-locking between Past/Present/Future sections with unique UI paradigms per era
2. **Technology Evolution**: Each era represents different technology stacks and visual paradigms from Mike's career
3. **Framework Migration**: Vanilla → NextJS + TypeScript + Tailwind + Framer Motion
4. **Interactive Features**: Windows 95 desktop simulation, modern terminal interfaces, AI-powered future section

**Critical**: When implementing era features, reference `docs/layout-specification.md` for exact color palettes, typography systems, and interaction patterns per era.

## File Structure

```
/
├── src/                # Source files
│   ├── index.htm      # Main HTML file
│   ├── styles/
│   │   └── main.css   # All CSS styling
│   ├── scripts/
│   │   └── main.js    # JavaScript functionality
│   └── images/        # Image assets
├── docs/              # Project documentation
│   ├── prd.md        # Product requirements document
│   └── layout-specification.md  # Detailed layout specs
├── CLAUDE.md          # This file
└── .gitignore         # Git ignore rules
```

## Content Management

### Professional Information
- Name: Mike Chu
- Title: Software Engineer (Staff level with 25 years experience)
- Tagline: "Bridging Technology and Human Connection"
- Focus: AI-First Development, System Design, Web Technologies, Technical Leadership

### Content Updates Needed
**Placeholder content in src/index.htm that needs real data:**
- Contact links: Email, GitHub, LinkedIn URLs
- Experience section: Real company names, dates, achievements
- Skills section: Update technology list to match current expertise

## Browser Compatibility

The site uses modern CSS features but maintains broad compatibility:
- CSS Custom Properties (IE11+ with polyfill)
- Flexbox (IE10+)
- CSS Grid (IE10+ with -ms- prefix)
- Smooth scrolling behavior (with JavaScript fallback)

## Performance Considerations

- No external dependencies beyond Google Fonts (Inter)
- Minimal JavaScript footprint
- Optimized for Core Web Vitals
- Fast Time to Interactive (TTI)
- Lightweight animations using CSS transitions

## Accessibility Standards

- WCAG 2.1 AA compliance target
- Semantic HTML structure
- Keyboard navigation support
- Proper color contrast ratios
- Screen reader compatibility
- Focus management for interactive elements