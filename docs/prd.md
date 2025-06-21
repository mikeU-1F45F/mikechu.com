# Mike Chu Portfolio Website Project Requirements Document (PRD)

## AI Assistant Prompt

Act as an expert UI designer. Read the following PRD project design document below. You must follow the PRD brief.

## Professional Overview

Create a sophisticated, technically impressive portfolio website for Mike Chu, a Staff Software Engineer with 20+ years of professional experience in web technologies, system design, and artificial intelligence. The website should position Mike as a thought leader and skilled technologist while conveying his unique blend of technical expertise and interpersonal skills. For detailed work history and skills, refer to the [resume](./resume.md).

## Personal Brand Identity

- **Professional Name**: Mike Chu
- **Tagline**: "Bridging Technology and Human Connection" (updated from "Programmer with People Skills")
- **Value Proposition**: Seasoned technologist who combines deep technical expertise with exceptional communication and collaboration skills
- **Brand Voice**: Authoritative yet approachable, technically precise, thoughtful, and engaging

## Professional Focus Areas

See [resume](./resume.md) for comprehensive list of focus areas and technical skills. Key areas to highlight in the website design:

1. **AI-First Development** - Pioneer in designing and implementing AI-powered systems
2. **System Design** - Expert-level knowledge in designing scalable architectures
3. **Web Technologies** - Deep expertise in modern frontend frameworks
4. **Technical Leadership** - Proven track record mentoring engineering teams
5. **Cross-functional Collaboration** - Translating complex technical concepts for diverse stakeholders
6. **Customer-Facing System Design** - Translating user needs into innovative solutions

## Target Audience

- Technical hiring managers and recruiters seeking senior engineering talent
- Fellow technologists looking for collaboration or mentorship
- Organizations seeking technical consulting services
- Conference and event organizers looking for speakers
- Tech community members interested in knowledge sharing

## Website Requirements

### Tech Stack

- **Core**: HTML5, CSS3, and minimal JavaScript (ES6+) preferring CSS solutions where possible
- **Styling**: Vanilla CSS with modern layout features (Flexbox, Grid)
- **Fonts**: Internet web fonts with common system fonts as fallback
- **Hosting**: Simple static file hosting (GitHub Pages, Netlify, or similar)
- **Development**: Local development with Deno 2 using npm:live-server

### Design Elements & Theme

- **Chronological Journey Theme: "Past, Present, Future"**
  - A scrolling SPA that transitions between three distinct time periods as the user scrolls
  - Each section visually represents a different era of your career with matching UI paradigms
  - Smooth transitions between eras with visual cues indicating timeline progression
  - Initial visual boot sequence that establishes the chronological journey concept
  - Responsive design optimized for all devices
  - See [Technical Design Document](./tdd.md) for detailed layout and implementation

### Site Structure

#### Professional Journey Timeline

- Interactive NextJS-powered visualization of 20-year career progression
- Key milestones, staff-level roles, and notable achievements
- Companies/organizations worked with, showcasing industry range and depth
- Skill evolution throughout career with technology adaptation journey
- Use of modern animation techniques to create engaging transitions

#### Expertise & Skills Section

- Interactive visualization of technical skill categories using React components
- Distinction between expert-level skills (React, NextJS, SvelteKit, TypeScript, System Design) and proficient skills
- Context about how skills have been applied in real-world enterprise scenarios
- Balance between deep technical expertise and leadership/communication skills
- Dynamic skill graph showing relationships between complementary technologies

#### Project Showcase

- Portfolio of significant professional accomplishments during each era.
- Use placeholder project information when it's unclear from the [resume](./resume.md)
- Quantifiable results and business impact of each project with metrics
- Interactive elements allowing deeper technical exploration with code samples
- Filter functionality to view projects by technology, industry, or problem domain

#### Thought Leadership & AI Innovation

- Blog or article section featuring technical insights on AI-first development
- Embedded or linked technical presentations about system design and AI integration
- Links to publications, patents, or research contributions in the AI field
- Speaking engagements and conference appearances
- Case studies of successful AI implementations and system designs

#### Professional Social Platforms Showcase

- Integrated GitHub profile with contribution graph, pinned repositories, and activity feed
- LinkedIn profile integration highlighting endorsements and recommendations
- Bluesky social feed showcasing technical thoughts and industry engagement
- Unified professional social presence with consistent branding across platforms
- Interactive elements allowing visitors to follow or connect directly

#### Work History & Professional Experience

- Career timeline visualization based on [resume](./resume.md) information
- Company logos, roles, and time periods displayed chronologically (use placeholder's and user will fill later)
- Key responsibilities and achievements at each position
- Technologies and methodologies used in each role
- Growth trajectory illustrating progression to Staff Engineer level

#### Contact & Availability Section

- Lower right floating button that provides a modal popover with contact information, availability, and direct links to professional profiles
- Professional contact information
- Direct links to all professional profiles (GitHub, LinkedIn, Bluesky)

#### Footer

- Succinct and professional small themed to match but unbotrusive
- Social and professional network links
- Download [resume](./resume.md) option
- Copyright information
- Site technology acknowledgment

### Interactive Elements

#### Navigation

- Smooth scrolling to sections
- Active section highlighting
- Mobile-responsive menu
- Keyboard navigation support
- Back to top button

#### UI Elements

- Hover effects on buttons and links
- Focus states for keyboard navigation
- Simple form validation
- Responsive images
- Accessible color contrast

### Technical Specifications

- See [Technical Design Document](./tdd.md) for detailed implementation

### Performance Considerations

- Exemplary Core Web Vitals scores leveraging NextJS's built-in optimizations
- AI-optimized asset delivery using Next/Image and intelligent prefetching
- Automatic code splitting and dynamic imports for component-level lazy loading
- Minimal dependencies with careful bundle size monitoring
- Strategic use of server components, SSG, and ISR for optimal performance
- Implementation of edge functions for global performance
- Perfect Lighthouse scores with optimization monitoring via Vercel Analytics

### Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Proper semantic HTML structure
- aria attributes for interactive elements
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
- Secondary: "Read My Thoughts," "Download [Resume](./resume.md)," "Schedule a Call"
- Tertiary: "Connect on LinkedIn," "Follow on GitHub", "Follow on Bluesky"

### Content Requirements

- **Biography & Timeline Content**:

  - Use information from [resume](./resume.md) for career history with dates, roles, and companies
  - Highlight key achievements and milestone projects for timeline feature
  - Incorporate anecdotes and pivotal moments for each career era
  - Visualize evolution of skills and technologies throughout career as shown in resume

- **Project Showcase Requirements**:

  - Request 3-5 significant projects from each era (Past, Present, Future vision)
  - For each project, gather: problem statement, solution approach, technologies used, outcomes
  - Request visual assets, code snippets, or diagrams for each project
  - Gather metrics or testimonials that demonstrate impact

- **Media Assets Needed**:
  - Professional headshot(s) or stylized avatar
  - Company logos from previous employers
