# Mike Chu Portfolio Website Development Tasks

## Project Setup & Foundation

- [x] Set up project repository
- [x] Configure static site hosting (Cloudflare Page)
- [x] Set up local development environment using Deno file_server
- [x] Create basic HTML structure with proper semantic markup
- [ ] Set up CSS styling infrastructure with vanilla CSS
  - [ ] Implement 12-column grid system (desktop)
  - [ ] Create responsive grid using CSS Grid and Flexbox
  - [ ] Define 4px spacing scale system
  - [ ] Implement era-specific border radius (0px, 4-8px, 12-24px)
- [ ] Create base typography system
  - [ ] Set up typography variables for each era
  - [ ] Implement responsive font scaling
  - [ ] Define font stacks for each section

## Core Structure & Layout Implementation

- [x] Implement vertical scrolling layout with "Past, Present, Future" sections
- [ ] Create smooth scroll-based navigation system
  - [ ] Implement single continuous vertical scroll
  - [ ] Develop scroll progress indicator
- [ ] Design era transition mechanics
  - [ ] Implement 800-100ms transitions
  - [ ] Create custom cubic-bezier easing
  - [ ] Add parallax scrolling effects
  - [ ] Design transition zones between eras
- [ ] Implement responsive design
  - [ ] Develop touch-optimized interactions
  - [ ] Implement viewport-height considerations
  - [ ] Ensure WCAG 2.1 AA compliance

## "Past" Era (Windows 95) Implementation

> **Design Inspiration**: Review the [past era reference images](./reference/past/) for Windows 95 UI design patterns and style guidelines.

- [ ] Create Windows 95 desktop environment
  - [ ] Implement authentic flat Windows 95 wallpaper background
  - [ ] Design classic Windows 95 color palette
  - [ ] Create beveled edges and shadow effects
- [ ] Develop Start Menu and Taskbar
  - [ ] Implement animated Start Menu expansion
  - [ ] Create scrolling-triggered information windows
  - [ ] Add system sound interactions
- [ ] Build nostalgic technology sections
  - [ ] Create "My Computer" icon with early career content
  - [ ] Design period-appropriate icons for:
    - C# .NET Framework
    - PHP
    - Java Spring
    - ARC GIS
    - SQL
    - IIS
    - HTML+CSS+JS
- [ ] Implement Windows 95 micro-interactions
  - [ ] Add minimize/close buttons
  - [ ] Create boot sequence animation
  - [ ] Design "Blue Screen of Death" easter egg when double-clicking the desktop
- [ ] Develop responsive Windows 95 UI adaptation
  - [ ] Simplify UI for mobile
  - [ ] Maintain era's essential character across devices (eg on mobile it should still "feel" like Windows 95)

## "Present" Era Implementation

> **Design Inspiration**: Review the [present era reference images](./reference/present/) for modern UI design patterns and style guidelines.

- [ ] Design multi-environment interface
  - [ ] Create Windows 11 and Linux desktop amalgamation
  - [ ] Implement floating navigation menu
- [ ] Develop interactive components
  - [ ] Create card-based content modules
  - [ ] Implement smooth card transitions
  - [ ] Design hover and expansion effects
- [ ] Build technology showcase sections
  - [ ] Create visualizations for:
    - C# .NET
    - Python
    - TypeScript
    - AI Systems
    - Linux
    - Docker & Kubernetes
- [ ] Implement advanced interactions
  - [ ] Design realistic terminal with syntax highlighting
  - [ ] Create GitHub activity integration
  - [ ] Develop notification center
  - [ ] Add window management features (snap, stack)
- [ ] Create responsive modern UI
  - [ ] Implement touch-friendly interactions
  - [ ] Design mobile-optimized layouts

## "Future" Era Implementation

> **Design Inspiration**: Review the [future era reference images](./reference/future/) for futuristic UI design patterns and style guidelines.

- [ ] Design holographic interface
  - [ ] Create minimalist dark interface
  - [ ] Implement glowing, high-contrast elements
  - [ ] Develop floating, responsive panels
- [ ] Build advanced interaction models
  - [ ] Create gesture-based navigation
  - [ ] Implement context-activated interfaces
  - [ ] Design proximity-based content reveal
- [ ] Develop technology visualization sections
  - [ ] Create neural network visualizations
  - [ ] Design protocol communication flows
  - [ ] Implement AI agent interactions
- [ ] Create futuristic micro-interactions
  - [ ] Develop cursor-following panels
  - [ ] Design particle/data stream transitions
  - [ ] Implement simulated neural interface
- [ ] Build industry-specific content zones
  - [ ] Climate Tech dashboards
  - [ ] Energy flow visualizations
  - [ ] Personalized learning platforms
  - [ ] Algorithmic trading visuals
  - [ ] Transportation network systems

## Performance Optimization

- [ ] Implement Intersection Observer API
  - [ ] Create viewport entry/exit detection
  - [ ] Develop era transition triggers
  - [ ] Manage asset loading/unloading
- [ ] Optimize asset delivery
  - [ ] Split the present and future era html, css, and js files into separate bundles
  - [ ] Implement lazy loading
  - [ ] Preload critical era assets
  - [ ] Limit initial payload to < 1MB
- [ ] Enhance scroll performance
  - [ ] Use GPU-accelerated animations
  - [ ] Implement passive event listeners
  - [ ] Throttle scroll handlers
  - [ ] Use `will-change` property judiciously

## Advanced Interaction & Accessibility

- [ ] Develop comprehensive navigation
  - [ ] Implement global era jump controls via upper-left floating tiny menu
  - [ ] Create deep linking elements including push state upon entering era
  - [ ] Create back-to-top functionality
- [ ] Create interactive elements
  - [ ] Develop content filtering
  - [ ] Implement dynamic personalization
  - [ ] Add easter eggs and special interactions

## Content Population & SEO

- [ ] Gather professional content from [resume](./resume.md)
  - [ ] Compile professional biography
  - [ ] Create career timeline
  - [ ] Collect project showcases
  - [ ] Prepare skills visualization
- [ ] Optimize for search engines
  - [ ] Implement semantic HTML
  - [x] Add meta tags
  - [ ] Create JSON-LD structured data
  - [ ] Generate sitemap and robots.txt
