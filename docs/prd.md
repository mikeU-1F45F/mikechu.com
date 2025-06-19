# Mike Chu Portfolio Website Creation Prompt

## AI Assistant Prompt

Act as an expert UI designer. Read the following PRD project design document below. You must follow the PRD brief. 

## Professional Overview
Create a sophisticated, technically impressive portfolio website for Mike Chu, a Staff Software Engineer with 25 years of professional experience in web technologies, system design, and artificial intelligence. The website should position Mike as a thought leader and skilled technologist while conveying his unique blend of technical expertise and interpersonal skills.

## Personal Brand Identity
- **Professional Name**: Mike Chu
- **Tagline**: "Bridging Technology and Human Connection" (updated from "Programmer with People Skills")
- **Value Proposition**: Seasoned technologist who combines deep technical expertise with exceptional communication and collaboration skills
- **Brand Voice**: Authoritative yet approachable, technically precise, thoughtful, and engaging

## Professional Focus Areas
1. **AI-First Development** - Pioneer in designing and implementing AI-powered systems with focus on practical business applications and real-world impact
2. **System Design** - Expert-level knowledge in designing scalable, resilient, and maintainable software architectures with AI integration across cloud platforms
3. **Web Technologies** - Deep expertise in modern frontend frameworks (React, NextJS) and full-stack development, with 25 years of evolving web development experience
4. **Technical Leadership** - Proven track record mentoring engineering teams, establishing best practices, and driving technical strategy at staff-level leadership
5. **Cross-functional Collaboration** - Exceptional ability to translate complex technical concepts for diverse stakeholders, bridging the gap between business and technical domains

## Target Audience
- Technical hiring managers and recruiters seeking senior engineering talent
- Fellow technologists looking for collaboration or mentorship
- Organizations seeking technical consulting services
- Conference and event organizers looking for speakers
- Tech community members interested in knowledge sharing

## Website Requirements

### Tech Stack
- **Core**: HTML5, CSS3, and JavaScript (ES6+)
- **Styling**: Vanilla CSS with modern layout features (Flexbox, Grid)
- **Fonts**: System fonts with Inter as a web font fallback
- **Hosting**: Simple static file hosting (GitHub Pages, Netlify, or similar)
- **Development**: Local development with Live Server or similar

### Design Elements & Theme
- **Chronological Journey Theme: "Past, Present, Future"**
  - A scrolling SPA that transitions between three distinct time periods as the user scrolls
  - Each section visually represents a different era of your career with matching UI paradigms
  - Smooth transitions between eras with visual cues indicating timeline progression
  - Initial boot sequence that establishes the chronological journey concept

#### **PAST: Windows 95 Era**
- **Visual Style**:
  - Primary: #2563eb (blue)
  - Text: #1f2937 (dark gray)
  - Background: #ffffff (white)
  - Secondary Background: #f9fafb (light gray)
  - Borders: #e5e7eb (light gray)
  - Boot-up sequence mimicking vintage Windows 95 loading screen
  - My Computer, Recycle Bin, and Network Neighborhood icons
  
- **Color Palette**:
  - Primary: #00807E (classic teal blue)
  - Secondary: #C0C0C0 (silver gray)
  - Accents: #008080 (windows teal), #FF0000 (error red), #ffa500 (warning orange)
  - Classic Windows 95 UI elements with beveled edges and shadow effects

- **Typography**:
  - Headings: "MS Sans Serif" or "Windows 95" font (or modern equivalents like "W95FA")
  - Body text: "Fixedsys" or "Terminal" for authentic OS feel
  - Code snippets: "Courier New" from the era

#### **Typography**
  - Headings: "Inter", sans-serif (Google Fonts)
  - Body text: System UI, -apple-system, sans-serif
  - Code snippets: "SF Mono", "Roboto Mono", monospace
  - Responsive typography that scales appropriately across devices

#### **Layout**
  - Single-column layout for optimal readability
  - Card-based design for content sections
  - Consistent spacing and padding throughout
  - Mobile-first responsive design approach

### Site Structure
1. **Hero Section**
   - Professional headshot or stylized avatar
   - Clear headline highlighting AI-first system design expertise
   - Concise professional summary emphasizing 25 years of experience
   - Social platform quick-links (GitHub, LinkedIn, Bluesky)
   - Primary CTA for most important action (e.g., "View Projects" or "Contact Me")

2. **Professional Journey Timeline**
   - Interactive NextJS-powered visualization of 25-year career progression
   - Key milestones, staff-level roles, and notable achievements
   - Companies/organizations worked with, showcasing industry range and depth
   - Skill evolution throughout career with technology adaptation journey
   - Use of modern animation libraries like Framer Motion to create engaging transitions

3. **Expertise & Skills Section**
   - Interactive visualization of technical skill categories using React components
   - Distinction between expert-level skills (React, NextJS, SvelteKit, TypeScript, System Design) and proficient skills
   - Context about how skills have been applied in real-world enterprise scenarios
   - Balance between deep technical expertise and leadership/communication skills
   - Dynamic skill graph showing relationships between complementary technologies

4. **Project Showcase**
   - Portfolio of significant professional projects leveraging NextJS's dynamic routing
   - Case studies with clear problem statements, technical challenges overcome, and solutions implemented
   - Technical architecture diagrams with appropriate depth for the audience
   - Quantifiable results and business impact of each project with metrics
   - Interactive elements allowing deeper technical exploration with code samples
   - Filter functionality to view projects by technology, industry, or problem domain

5. **Thought Leadership & AI Innovation**
   - Blog or article section featuring technical insights on AI-first development
   - Embedded or linked technical presentations about system design and AI integration
   - Links to publications, patents, or research contributions in the AI field
   - Speaking engagements and conference appearances
   - Case studies of successful AI implementations and system designs

6. **Professional Social Platforms Showcase**
   - Integrated GitHub profile with contribution graph, pinned repositories, and activity feed
   - LinkedIn profile integration highlighting endorsements and recommendations
   - Bluesky social feed showcasing technical thoughts and industry engagement
   - Unified professional social presence with consistent branding across platforms
   - Interactive elements allowing visitors to follow or connect directly

7. **Work History & Professional Experience**
   - Detailed career timeline with company logos, roles, and time periods
   - Key responsibilities and achievements at each position
   - Technologies and methodologies used in each role
   - Notable projects and their business impact
   - Growth trajectory illustrating progression to Staff Engineer level

8. **Contact & Availability Section**
   - Professional contact information
   - Availability for consulting, speaking, or new opportunities
   - Direct links to all professional profiles (GitHub, LinkedIn, Bluesky)
   - Optional contact form for inquiries with purpose selection

9. **Footer**
   - Social and professional network links
   - Download resume option
   - Copyright information
   - Site technology acknowledgment

### Interactive Elements
1. **Navigation**
   - Smooth scrolling to sections
   - Active section highlighting
   - Mobile-responsive menu
   - Keyboard navigation support
   - Back to top button

2. **UI Elements**
   - Hover effects on buttons and links
   - Focus states for keyboard navigation
   - Simple form validation
   - Responsive images
   - Accessible color contrast

3. **Enhancements**
   - Reduced motion support
   - Print styles
   - Basic form validation
   - External link indicators
   - Skip to main content link

### Technical Specifications
1. **Responsive Design**
   - Flawless experience across all devices and screen sizes
   - Thoughtful layout adjustments for mobile, tablet, and desktop
   - Performance optimization for various connection speeds
   - Touch-friendly interface elements on mobile

2. **Interactive Elements**

   #### **PAST: Windows 95 Era**
   - Classic Windows 95 "Start Menu" for navigation within the Past section
   - Desktop icons that open draggable windows with early career content
   - "My Computer" icon browsing early projects and skills
   - Dialog boxes with "OK/Cancel" buttons for interactions
   - Progress bars and hourglass cursor for loading content
   - System notification sounds with authentic Windows 95 alerts
   - Right-click context menus with period-appropriate options
   - Clippy-style assistant offering navigation tips
   - Simulated "Blue Screen of Death" with amusing error messages
   - Classic Windows games (Minesweeper, Solitaire) as Easter eggs

   #### **PRESENT: Modern Multi-Environment**
   - Split-view toggle between Kali Linux and Windows 11 interfaces
   - Modern window management with snapping and multi-desktop features
   - Integrated AI assistant panel for contextual information
   - Interactive terminal with syntax highlighting for technical content
   - Dark/light mode toggle based on system preferences
   - Mobile-responsive design elements showing adaptability
   - GitHub integration showing current repositories and activity
   - Interactive diagrams of current technical architectures
   - Notification center showing professional updates and activities
   - Voice command option for hands-free navigation

   #### **FUTURE: Advanced AI Integration**
   - Floating UI panels that respond to scroll/gesture navigation
   - AI agents that proactively offer relevant content based on viewing patterns
   - Interactive 3D visualizations of future technology concepts
   - Particle effect transitions between content areas
   - Predictive interface that anticipates user interests
   - Voice and natural language navigation as primary interface
   - Dynamic content that personalizes based on visitor background
   - AR/VR preview mode showing dimensional interface potential
   - Simulated neural interface with thought-navigation preview
   - Data stream visualizations showing interconnected knowledge systems

3. **Performance Considerations**
   - Exemplary Core Web Vitals scores leveraging NextJS's built-in optimizations
   - AI-optimized asset delivery using Next/Image and intelligent prefetching
   - Automatic code splitting and dynamic imports for component-level lazy loading
   - Minimal dependencies with careful bundle size monitoring
   - Strategic use of server components, SSG, and ISR for optimal performance
   - Implementation of edge functions for global performance
   - Perfect Lighthouse scores with optimization monitoring via Vercel Analytics

4. **Accessibility Requirements**
   - WCAG 2.1 AA compliance
   - Keyboard navigation support
   - Screen reader compatibility
   - Proper semantic HTML structure
   - Appropriate color contrast ratios
   - Focus management for interactive elements

### SEO Considerations
- **Primary Keywords**: staff software engineer, system design architect, AI engineering leader, technical leadership
- **Secondary Keywords**: React architecture, technical mentorship, engineering leadership, full-stack development, TypeScript expert
- **Page Structure**:
  - NextJS-optimized semantic HTML with proper heading hierarchy
  - Dynamic meta tags using Next/Head for each section
  - JSON-LD structured data markup for professional information and portfolio projects
  - Optimized image alt text and file names
  - Canonical URLs and proper metadata managed through NextJS configuration
  - Sitemap.xml and robots.txt generation

## Call-to-Actions
- Primary: "View My Work" and "Contact Me"
- Secondary: "Read My Thoughts," "Download Resume," "Schedule a Call"
- Tertiary: "Connect on LinkedIn," "Follow on GitHub"

## Implementation Guidelines

### Technical Implementation Details
- **Code Structure**:
  - Single HTML file for content structure
  - External CSS file for styling
  - Minimal JavaScript for basic interactivity
  - No build step or complex tooling required
  - Semantic HTML5 elements for better accessibility
  - Mobile-first responsive design approach

- **Performance Optimization**:
  - Minimal external dependencies
  - Optimized assets and images
  - Proper caching headers for static files
  - Fast Time to Interactive (TTI)
  - Lightweight animations using CSS transitions
  - Lazy loading for non-critical resources

- **Accessibility**:
  - WCAG 2.1 AA compliance
  - Semantic HTML structure
  - Keyboard navigation support
  - Proper color contrast ratios
  - ARIA labels where needed
  - Responsive design for all screen sizes

- **State Management**:
  - Track current era (Past/Present/Future) in URL for shareable deep links
  - Persist user preferences and progress in localStorage
  - Create animation timeline coordinator for synchronizing multi-element transitions

- **Performance Optimization**:
  - Implement code splitting by era to reduce initial load time
  - Lazy load era-specific assets only when approaching that section
  - Utilize Tailwind v4's optimized build process for minimal CSS
  - Use Skeleton UI v3's lightweight component architecture
  - Optimize animation performance using CSS containment and hardware acceleration
  - Implement content-visibility: auto for off-screen content
  - Use image optimization and WebP/AVIF formats for all graphical elements

### Content Requirements
- **Biography & Timeline Content**:
  - Request detailed career history with dates, roles, and companies
  - Gather key achievements and milestone projects for timeline feature
  - Collect anecdotes and pivotal moments for each career era
  - Ask for evolution of skills and technologies used throughout career

- **Project Showcase Requirements**:
  - Request 3-5 significant projects from each era (Past, Present, Future vision)
  - For each project, gather: problem statement, solution approach, technologies used, outcomes
  - Request visual assets, code snippets, or diagrams for each project
  - Gather metrics or testimonials that demonstrate impact

- **Media Assets Needed**:
  - Professional headshot(s) or stylized avatar
  - Company logos from previous employers
  - Project screenshots or mockups
  - Code samples for technical demonstrations
  - Any presentations, articles, or publications

### User Experience Considerations
- **Accessibility**:
  - Maintain WCAG 2.1 AA compliance across all era designs
  - Ensure keyboard navigation works consistently across eras
  - Provide alternative experiences for users who disable animations
  - Include clear aria-labels for all interactive elements
  - Ensure sufficient color contrast in all eras, especially the high-contrast Future section

- **Mobile Experience**:
  - Create era-appropriate mobile adaptations (Past: feature phone, Present: responsive, Future: gestural)
  - Leverage Tailwind v4's advanced responsive utilities
  - Use Skeleton UI v3's mobile-friendly component patterns
  - Optimize touch targets for different device sizes
  - Implement device motion sensors for parallax effects (with reduced motion alternatives)
  - Consider reduced motion adaptations for small screen scrolling
  - Use CSS container queries for component-level responsiveness

- **Performance Benchmarks**:
  - Target Core Web Vitals scores: LCP < 2.5s, FID < 100ms, CLS < 0.1
  - Ensure smooth scrolling at 60fps minimum during transitions
  - Limit main thread blocking during animation sequences

## Era-Specific Implementation Details

### PAST: Windows 95 Era
- Create authentic Windows 95 boot sequence animation when entering this section
- Include period-appropriate system sounds for all interactions
- Implement a simulated desktop environment with draggable windows
- Feature "My Computer" icon that opens your early career skills and projects
- Include classic Windows 95 Easter eggs and games (Minesweeper, Solitaire)
- Add "installation wizard" style introduction to this section
- Implement "save file" dialog when downloading early career artifacts
- Create pixelated versions of early employer logos
- Feature a desktop clock showing the years represented in this section
- Create a "Blue Screen of Death" that transforms into a fun interactive element

### PRESENT: Modern Multi-Environment
- Design a modern boot/login screen transitioning from Past to Present
- Create a seamless switch between Kali Linux and Windows 11 environments
- Feature a realistic terminal with syntax highlighting and command history
- Implement GitHub integration showing real repository activity
- Add modern notification system for professional updates
- Include interactive diagrams of current technical architectures
- Feature AI assistant that provides contextual information about your work
- Create adaptive UI that responds to device capabilities
- Implement realistic modern OS animations and transitions

### FUTURE: Advanced AI Integration
- Design futuristic boot sequence with holographic elements
- Create floating, modular UI elements with high-contrast colors
- Implement particle/data stream effects for transitions
- Feature AI-driven predictive content that responds to user behavior
- Create 3D wireframe visualizations of future concepts
- Implement simulated neural interface navigation as a concept demo
- Add ambient, atmospheric sound design
- Design interconnected node visualizations showing knowledge networks
- Create futuristic data dashboards with real-time information
- Implement voice/natural language navigation as primary interface

## Timeline & Iteration Planning
- Request feedback after each major implementation phase
- Suggest implementing eras incrementally, starting with the Present era
- Schedule regular check-ins to review progress and adjust direction
- Allow for evolution of the Future section as new technologies emerge
