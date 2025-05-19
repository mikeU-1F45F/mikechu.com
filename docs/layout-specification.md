# Portfolio Website Layout Specification

## Overall Structure: Era-Based Spatial Navigation with Virtual Desktop Elements

The website will feature three distinct eras (Past, Present, Future) implemented as horizontal "virtual desktops" with scroll-locking between them. Each era will have its own vertical scrolling content and era-specific UI elements. This layout supports Mike Chu's professional brand identity of "Bridging Technology and Human Connection" by creating a chronological journey through his 25-year career in technology.

### Navigation System

1. **Horizontal Era Navigation**
   - Horizontal scroll-locking between three main eras
   - Smooth transitions with Framer Motion animations when switching eras
   - Visual indicators showing current era and navigation options
   - Keyboard shortcuts: Arrow Left/Right to switch eras
   - Touch gestures: Swipe left/right to navigate between eras
   - Era transition includes appropriate boot sequence animations
   - URL tracking of current era for shareable deep links

2. **Vertical Content Scrolling**
   - Each era allows independent vertical scrolling
   - Sections within each era are arranged vertically
   - Smooth scroll animations between sections
   - Scroll progress indicator visible on the side
   - Scroll-triggered animations using CSS v4 features
   - Parallax scrolling effects for depth

### Era-Specific Layouts

1. **Past Era (Windows 95)**
   - Base: Authentic Windows 95 desktop environment with wallpaper background
   - Navigation: Start Menu in bottom-left corner with taskbar
   - Content Display: Draggable windows containing different content sections
   - Technologies for UI Inspiration:
     - .NET C# (Visual Studio icons and interfaces)
     - PHP (Logo and syntax highlighting)
     - Java Spring (Java cup logo and Spring green accents)
     - ARC GIS (Map visualization elements and geospatial icons)
     - SQL (Database icons and query interfaces)
     - IIS (Server management console aesthetics)
     - HTML+CSS+JS (Early web page styling and Notepad++ interface)
   - Industries for Content Themes:
     - Government (Official seals and document styles)
     - Telecomm (Network diagrams and connection visuals)
     - Marketing (Early digital ad formats and campaign visuals)
     - Document Management (File folder systems and document icons)
     - Logistics (Shipping tracking interfaces and flow charts)
     - Education (Academic styling and learning management systems)
   - Color Palette:
     - Primary: #00807E (classic teal blue)
     - Secondary: #C0C0C0 (silver gray)
     - Accents: #008080 (windows teal), #FF0000 (error red), #ffa500 (warning orange)
     - Classic Windows 95 UI elements with beveled edges and shadow effects
   - Typography:
     - Headings: MS Sans Serif (from 98.css)
     - Body: VT323 (replaced Fixedsys)
     - Code: Courier New
   - Micro-interactions:
     - Windows minimize/maximize/close buttons
     - Start menu expansion
     - Window dragging and stacking
     - System sounds on interaction
     - Boot sequence mimicking vintage Windows 95 loading screen
     - "My Computer" icon browsing early projects and skills
     - Classic Windows 95 Easter eggs (BSOD that transforms into interactive element)

2. **Present Era (Modern)**
   - Base: Split-screen effect showing Kali Linux and Windows 11 environments
   - Navigation: Floating navigation menu with modern OS-inspired elements
   - Content Display: Card-based content modules with smooth transitions
   - Technologies for UI Inspiration:
     - .NET C# (Modern Visual Studio interface elements and .NET 8 branding)
     - Python (Python logo, Jupyter notebook interfaces, and Anaconda environments)
     - TypeScript (TS logo, VSCode editor themes, and type definition visuals)
     - AI Systems (Neural network visualizations and model architecture diagrams)
     - Linux (Terminal interfaces, Bash scripting, and Kali Linux aesthetics)
     - Docker & Kubernetes (Container visualizations, orchestration diagrams, and logos)
   - Industries for Content Themes:
     - Marketing Technology (MarTech stack visualizations and campaign analytics dashboards)
   - Color Palette:
     - Primary: #171C28 (deep navy)
     - Secondary: #0078D7 (windows blue)
     - Accents: #67E480 (terminal green), #E83E8C (magenta), #FF8A00 (orange)
   - Typography:
     - Headings: Roboto (replaced Segoe UI)
     - Body: Inter
     - Code: Cascadia Code, Fira Code
   - Micro-interactions:
     - Hover effects on cards
     - Smooth expansion of content sections
     - Dynamic content filtering
     - Realistic terminal with syntax highlighting
     - GitHub integration showing repository activity
     - Notification center showing professional updates
     - Modern window management (snap, stack)

3. **Future Era (AI Integration)**
   - Base: Minimalist, dark interface with holographic and glowing elements
   - Navigation: Gesture-based or voice-activated
   - Content Display: Floating panels that respond to user interaction
   - Technologies for UI Inspiration:
     - Machine Learning (ML) (Neural network visualizations, model architecture diagrams, and training graphs)
     - Natural Language Processing (NLP) (Text processing visualizations, semantic networks, and language models)
     - Agent2Agent Protocol (A2A) (Agent communication flows and protocol visualizations)
     - Model Context Protocol (MCP) (Tool call and context exchange visualizations)
     - Systems Architecture (High-level system design, microservice visualizations, and cloud architecture)
   - Industries for Content Themes:
     - Material Design (Next-generation Material You principles and adaptive UI elements)
     - Climate Tech (Environmental monitoring dashboards, carbon capture technologies, and sustainability metrics)
     - Energy (Smart grid visualizations, renewable energy flow diagrams, and predictive consumption models)
     - Education (Personalized learning platforms, knowledge graph visualizations, and adaptive curriculum systems)
     - Finance (Algorithmic trading visualizations, blockchain networks, and decentralized finance systems)
     - Transportation (Autonomous vehicle coordination, traffic optimization systems, and logistics networks)
   - Color Palette:
     - Primary: #080C24 (deep space)
     - Secondary: #FFFFFF (pure white)
     - Accents: #00F0FF (electric cyan), #FF00A0 (neon magenta), #7B00FF (electric purple)
     - High contrast with glowing edge effects
   - Typography:
     - Headings: Orbitron (replaced Eurostile)
     - Body: Space Grotesk
     - Code: JetBrains Mono
   - Micro-interactions:
     - Panels that follow cursor movement
     - Content that reacts to user proximity
     - Particle/data stream effects for transitions
     - AI agents that proactively offer relevant content
     - Interactive 3D visualizations
     - Simulated neural interface with thought-navigation preview
     - Data stream visualizations showing interconnected knowledge systems

### Responsive Behavior

- **Desktop**: Full horizontal era navigation with rich interactions
- **Tablet**: Maintained horizontal era navigation with simplified interactions
- **Mobile**: Option to switch to vertical stacking of eras with clear era transitions
- Flawless experience across all devices and screen sizes
- Thoughtful layout adjustments for mobile, tablet, and desktop
- Touch-friendly interface elements on mobile
- Performance optimization for various connection speeds

### Accessibility Considerations

- Keyboard navigation between all interactive elements
- Screen reader compatibility with ARIA labels
- Alternative navigation options for users who prefer reduced motion
- High contrast mode available for all eras

### Component Hierarchy and Structure

- **Root Layout**
  - Era Container (horizontal scroll-lock container)
    - Past Era Section
      - Windows 95 Desktop Container
        - Taskbar Component
        - Desktop Icons Component
        - Window Component (reusable for different content)
        - Start Menu Component
    - Present Era Section
      - Split View Container
        - Linux Terminal Side
        - Windows 11 Side
        - Floating Navigation Component
        - Card Grid Component
        - Notification Center Component
    - Future Era Section
      - Holographic Interface Container
        - Floating Panel Component (reusable)
        - Voice Command Interface Component
        - 3D Visualization Component
        - AI Assistant Component
  - Global Navigation Controls
  - Accessibility Controls

### Animation and Transition Specifications

- **Era Transitions**
  - Duration: 800-1200ms
  - Easing: Custom cubic-bezier(0.65, 0, 0.35, 1) for natural movement
  - Visual Effects:
    - Past → Present: OS boot sequence with progress bar
    - Present → Future: Digital transformation effect with particle transition
    - Future → Past: Time-rewind effect with glitch elements
  - Audio Cues: Subtle sound effects matching each era

- **Micro-animations**
  - Button Hover: 150ms ease-in-out
  - Card Expansion: 300ms ease-out
  - Window Dragging: Real-time with slight inertia
  - Content Fade-in: Staggered 200-400ms delays based on scroll position
  - Notification Appearance: 250ms with slight bounce effect

### Interaction Models

- **Past Era**
  - Primary: Mouse-driven with clickable elements
  - Windows: Draggable by title bar, resizable from corners
  - Start Menu: Expands on click, closes on outside click
  - Double-click to open applications/folders

- **Present Era**
  - Primary: Modern point-and-click with hover states
  - Cards: Click to expand, swipe on mobile
  - Terminal: Functional command input with autocomplete
  - Split View: Toggle button to switch focus between sides

- **Future Era**
  - Primary: Gesture and voice with minimal clicking
  - Panels: Follow cursor with subtle magnetic effect
  - Content: Proximity-based reveal (content appears as user approaches)
  - Voice Commands: Natural language processing for navigation

### Visual Design Details

- **Design System**
  - Grid System: 12-column for desktop, 8-column for tablet, 4-column for mobile
  - Spacing Scale: 4px base unit (4, 8, 16, 24, 32, 48, 64, 96)
  - Border Radius: Era-specific (0px for Past, 4-8px for Present, 12-24px for Future)
  - Shadow Styles:
    - Past: Hard pixel shadows with 1px offset
    - Present: Subtle elevation shadows (0 2px 4px rgba(0,0,0,0.1))
    - Future: Glowing edges with variable opacity

- **State Variations**
  - Interactive Elements:
    - Default state
    - Hover state
    - Active/Pressed state
    - Focus state
    - Disabled state
  - Content Containers:
    - Collapsed/Expanded states
    - Loading states with era-appropriate indicators
    - Error states with era-specific messaging

- **Image and Asset Guidelines**
  - Logo Treatments: Era-specific styling for company logos
  - Icon Sets: Custom icon system for each era
  - Image Filters: Era-appropriate processing (pixelated for Past, etc.)
  - Background Textures: Subtle patterns matching each era's aesthetic

### Technical Implementation

- NextJS framework with React 19 and TypeScript
- Tailwind CSS v4 for styling with custom theme configuration
- Skeleton UI v3 for component library foundation
- Framer Motion for animations and transitions
- Intersection Observer API for scroll-based triggers
- CSS Grid and Flexbox for responsive layouts
- Era-specific styling via CSS modules or styled components
- Code splitting by era to reduce initial load time
- Lazy loading of era-specific assets
- State management for tracking current era
- GitHub API integration for repository data
- Social media integration (LinkedIn, Bluesky)

### Performance Targets

- Core Web Vitals scores: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Smooth scrolling at 60fps minimum during transitions
- Limit main thread blocking during animation sequences
- Asset optimization: Images < 200KB, total initial payload < 1MB
- Time to interactive: < 3.5s on 4G connections

### AI Implementation Considerations

- **Component Generation**
  - Use semantic HTML structure for accessibility
  - Generate TypeScript interfaces for all component props
  - Include JSDoc comments for all components and functions
  - Implement proper React hooks pattern (useEffect, useState, useContext)

- **Styling Approach**
  - Use Tailwind utility classes for layout and basic styling
  - Create custom Tailwind plugins for era-specific design systems
  - Use CSS variables for theme switching between eras
  - Implement responsive design with mobile-first approach

- **Animation Implementation**
  - Use Framer Motion's AnimatePresence for component mounting/unmounting
  - Implement scroll-linked animations with useScroll hook
  - Create reusable animation variants for consistent motion patterns
  - Use will-change CSS property strategically for performance

- **Accessibility Implementation**
  - Ensure ARIA roles and labels on all interactive elements
  - Implement keyboard navigation patterns for each era
  - Create reduced motion alternatives for all animations
  - Maintain minimum contrast ratios for text legibility
