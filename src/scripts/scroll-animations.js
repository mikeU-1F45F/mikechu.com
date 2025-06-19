/**
 * Mike Chu Portfolio - Scroll Animations
 * Handles scroll-triggered animations and era transitions
 */

// Main scroll controller
const ScrollController = {
  // Configuration
  config: {
    scrollThreshold: 0.2, // Percentage of viewport height to trigger transitions
    transitionDuration: 800, // Match CSS transition duration
    bootSequenceDuration: 3000, // Duration for boot sequence animation
    particlesDensity: window.innerWidth > 768 ? 100 : 50, // Responsive particle density
  },
  
  // State management
  state: {
    currentEra: 'past',
    isScrolling: false,
    lastScrollPosition: 0,
    particles: [],
    isTransitioning: false,
    currentSection: null,
    sections: [],
    eraTransitions: {
      'past-present': false,
      'present-future': false
    }
  },
  
  // DOM elements
  elements: {
    eraContainer: null,
    scrollIndicator: null,
    bootProgressBar: null,
    particlesCanvas: null,
    particlesContext: null,
    eras: null,
    transitions: null
  },
  
  // Initialize the scroll controller
  init() {
    this.cacheElements();
    this.measureSections();
    this.setupEventListeners();
    this.setupIntersectionObservers();
    this.initializeCanvas();
    console.log('Scroll Controller initialized');
  },
  
  // Cache DOM elements
  cacheElements() {
    this.elements.eraContainer = document.querySelector('.era-container');
    this.elements.scrollIndicator = document.getElementById('scroll-indicator');
    this.elements.bootProgressBar = document.getElementById('boot-progress-bar');
    this.elements.particlesCanvas = document.getElementById('particles-canvas');
    this.elements.eras = document.querySelectorAll('.era');
    this.elements.transitions = document.querySelectorAll('.era-transition');
  },
  
  // Measure section positions for scroll tracking
  measureSections() {
    // Collect all sections (eras and transitions)
    const allSections = Array.from(this.elements.eras).concat(Array.from(this.elements.transitions));
    
    this.state.sections = allSections.map(section => {
      const rect = section.getBoundingClientRect();
      const type = section.classList.contains('era') ? 'era' : 'transition';
      const id = section.id;
      
      return {
        element: section,
        id: id,
        type: type,
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY,
        height: rect.height
      };
    });
    
    // Sort sections by their position
    this.state.sections.sort((a, b) => a.top - b.top);
    
    console.log('Sections measured:', this.state.sections.length);
  },
  
  // Set up scroll and resize event listeners
  setupEventListeners() {
    // Throttled scroll handler
    window.addEventListener('scroll', this.throttle(() => {
      this.handleScroll();
    }, 100));
    
    // Resize handler with debounce
    window.addEventListener('resize', this.debounce(() => {
      this.handleResize();
    }, 250));
    
    // Page visibility change handler
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        // Remeasure sections when page becomes visible again
        this.measureSections();
      }
    });
  },
  
  // Set up IntersectionObserver for efficient scroll tracking
  setupIntersectionObservers() {
    // Observer for era sections
    this.eraObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('era')) {
          const era = entry.target.dataset.era;
          if (era && era !== this.state.currentEra) {
            this.handleEraChange(era);
          }
        }
      });
    }, { threshold: 0.6 }); // Trigger when era is 60% visible
    
    // Observer for transition sections
    this.transitionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('era-transition')) {
          const transitionId = entry.target.id;
          this.handleTransitionInView(transitionId, entry.intersectionRatio);
        } else if (!entry.isIntersecting && entry.target.classList.contains('era-transition')) {
          // Reset transition state when out of view
          const transitionId = entry.target.id;
          if (transitionId === 'transition-past-present') {
            this.state.eraTransitions['past-present'] = false;
          } else if (transitionId === 'transition-present-future') {
            this.state.eraTransitions['present-future'] = false;
          }
        }
      });
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] }); // Multiple thresholds for smooth animations
    
    // Observe all era sections
    this.elements.eras.forEach(era => {
      this.eraObserver.observe(era);
    });
    
    // Observe all transition sections
    this.elements.transitions.forEach(transition => {
      this.transitionObserver.observe(transition);
    });
  },
  
  // Handle scroll events
  handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calculate scroll progress (0 to 1)
    const scrollProgress = Math.min(scrollPosition / (documentHeight - windowHeight), 1);
    
    // Update scroll indicator position
    if (this.elements.scrollIndicator) {
      const indicatorPosition = scrollProgress * (100 - 33.33); // Adjust for indicator height
      this.elements.scrollIndicator.style.top = `${indicatorPosition}%`;
    }
    
    // Determine current section based on scroll position
    this.determineCurrentSection(scrollPosition + (windowHeight / 2));
    
    // Store last scroll position for direction detection
    this.state.lastScrollPosition = scrollPosition;
  },
  
  // Determine which section is currently in view
  determineCurrentSection(scrollPos) {
    for (const section of this.state.sections) {
      if (scrollPos >= section.top && scrollPos < section.bottom) {
        if (this.state.currentSection !== section.id) {
          this.state.currentSection = section.id;
          console.log('Current section:', section.id);
          
          // Update URL hash for deep linking
          if (section.type === 'era') {
            const era = section.element.dataset.era;
            if (era) {
              history.replaceState(null, null, `#${era}`);
              this.handleEraChange(era);
            }
          }
        }
        break;
      }
    }
  },
  
  // Handle era changes
  handleEraChange(era) {
    if (this.state.currentEra === era) return;
    
    this.state.currentEra = era;
    console.log(`Era changed to: ${era}`);
    
    // Update era navigation UI
    document.querySelectorAll('.era-nav__button').forEach(button => {
      button.classList.remove('era-nav__button--active');
      if (button.dataset.era === era) {
        button.classList.add('era-nav__button--active');
      }
    });
    
    // Update progress bar
    const progressMap = { past: '0%', present: '33.33%', future: '66.66%' };
    const progressBar = document.querySelector('.era-nav__progress-bar');
    if (progressBar) {
      progressBar.style.transform = `translateX(${progressMap[era]})`;
    }
    
    // Announce to screen readers
    this.announceToScreenReader(`Now viewing ${era} era`);
  },
  
  // Handle transition sections coming into view
  handleTransitionInView(transitionId, visibilityRatio) {
    if (transitionId === 'transition-past-present') {
      // Past to Present transition
      if (!this.state.eraTransitions['past-present'] && visibilityRatio > 0.5) {
        this.state.eraTransitions['past-present'] = true;
        this.triggerBootSequence();
      }
    } else if (transitionId === 'transition-present-future') {
      // Present to Future transition
      if (!this.state.eraTransitions['present-future'] && visibilityRatio > 0.5) {
        this.state.eraTransitions['present-future'] = true;
        this.triggerParticleTransition();
      }
    }
  },
  
  // Handle window resize
  handleResize() {
    // Remeasure sections on resize
    this.measureSections();
    
    // Resize and reinitialize particles canvas
    if (this.elements.particlesCanvas) {
      this.elements.particlesCanvas.width = window.innerWidth;
      this.elements.particlesCanvas.height = window.innerHeight;
      this.initializeParticles();
    }
    
    // Update particle density based on screen size
    this.config.particlesDensity = window.innerWidth > 768 ? 100 : 50;
  },
  
  // Trigger boot sequence animation
  triggerBootSequence() {
    if (!this.elements.bootProgressBar) return;
    
    console.log('Triggering boot sequence');
    
    // Animate the progress bar
    this.elements.bootProgressBar.style.width = '100%';
    
    // Reset after animation completes
    setTimeout(() => {
      this.elements.bootProgressBar.style.width = '0%';
    }, this.config.bootSequenceDuration + 500);
  },
  
  // Canvas setup for particle effects
  initializeCanvas() {
    if (!this.elements.particlesCanvas) return;
    
    // Set canvas dimensions
    this.elements.particlesCanvas.width = window.innerWidth;
    this.elements.particlesCanvas.height = window.innerHeight;
    this.elements.particlesContext = this.elements.particlesCanvas.getContext('2d');
    
    // Initialize particles
    this.initializeParticles();
  },
  
  // Initialize particle system
  initializeParticles() {
    this.state.particles = [];
    const canvas = this.elements.particlesCanvas;
    
    if (!canvas) return;
    
    // Create particles based on screen density
    for (let i = 0; i < this.config.particlesDensity; i++) {
      this.state.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: this.getRandomParticleColor(),
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        active: false
      });
    }
  },
  
  // Get random particle color for Future era
  getRandomParticleColor() {
    const colors = [
      'rgba(0, 240, 255, 0.8)', // Cyan
      'rgba(255, 0, 160, 0.8)',  // Magenta
      'rgba(123, 0, 255, 0.8)'   // Purple
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  },
  
  // Trigger particle animation
  triggerParticleTransition() {
    if (!this.elements.particlesCanvas || !this.elements.particlesContext) return;
    
    console.log('Triggering particle transition');
    
    // Activate particles
    this.state.particles.forEach(particle => {
      particle.active = true;
    });
    
    // Start animation loop if not already running
    if (!this.state.animationRunning) {
      this.state.animationRunning = true;
      this.animateParticles();
    }
    
    // Reset after animation duration
    setTimeout(() => {
      this.state.particles.forEach(particle => {
        particle.active = false;
      });
      
      // Stop animation loop after a delay
      setTimeout(() => {
        this.state.animationRunning = false;
      }, 1000);
    }, 5000);
  },
  
  // Animate particles for transition effect
  animateParticles() {
    if (!this.state.animationRunning) return;
    
    const ctx = this.elements.particlesContext;
    const canvas = this.elements.particlesCanvas;
    
    if (!ctx || !canvas) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    this.state.particles.forEach(particle => {
      if (!particle.active) return;
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });
    
    // Continue animation loop
    requestAnimationFrame(() => this.animateParticles());
  },
  
  // Utility: Throttle function for performance
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  
  // Utility: Debounce function for performance
  debounce(func, wait) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  },
  
  // Announce changes to screen readers
  announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.classList.add('sr-only');
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 3000);
  }
};

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll controller after a small delay to ensure DOM is ready
  setTimeout(() => {
    ScrollController.init();
  }, 100);
});

// Handle visibility change events
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && ScrollController.state.sections.length === 0) {
    // Reinitialize if page was hidden during load
    ScrollController.init();
  }
});