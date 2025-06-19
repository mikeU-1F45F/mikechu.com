/**
 * Mike Chu Portfolio - Era Navigation JavaScript
 * Minimal JavaScript for era-based navigation and interactivity
 */

// Global state management
const PortfolioApp = {
  currentEra: 'past',
  isTransitioning: false,
  
  // DOM elements cache
  elements: {
    eraNavButtons: null,
    progressBar: null,
    eras: null,
    startButton: null,
    startMenu: null,
    desktopIcons: null,
    windows: null,
    taskbarTasks: null,
    currentYearSpan: null
  },

  // Initialize the application
  init() {
    this.cacheElements();
    this.bindEvents();
    this.updateCopyright();
    this.setupInitialState();
    console.log('Portfolio App initialized');
  },

  // Cache DOM elements for better performance
  cacheElements() {
    this.elements.eraNavButtons = document.querySelectorAll('.era-nav__button');
    this.elements.progressBar = document.querySelector('.era-nav__progress-bar');
    this.elements.eras = document.querySelectorAll('.era');
    this.elements.startButton = document.querySelector('.start-button');
    this.elements.startMenu = document.querySelector('.start-menu');
    this.elements.desktopIcons = document.querySelectorAll('.desktop-icon');
    this.elements.windows = document.querySelectorAll('.window');
    this.elements.taskbarTasks = document.querySelectorAll('.taskbar__task');
    this.elements.currentYearSpan = document.getElementById('current-year');
  },

  // Bind all event listeners
  bindEvents() {
    // Era navigation
    this.elements.eraNavButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetButton = e.currentTarget; // Use currentTarget to get the button, not the clicked element inside
        this.switchEra(targetButton.dataset.era);
      });
    });

    // Keyboard navigation for eras
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.navigateEra('prev');
      if (e.key === 'ArrowRight') this.navigateEra('next');
    });

    // Windows 95 interactions
    if (this.elements.startButton) {
      this.elements.startButton.addEventListener('click', () => this.toggleStartMenu());
    }

    if (this.elements.desktopIcons) {
      this.elements.desktopIcons.forEach(icon => {
        icon.addEventListener('dblclick', (e) => this.openWindow(e.currentTarget.dataset.window));
      });
    }

    // Window controls
    this.elements.windows.forEach(window => {
      const closeBtn = window.querySelector('.window__control--close');
      const minimizeBtn = window.querySelector('.window__control--minimize');
      
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closeWindow(window.dataset.window));
      }
      if (minimizeBtn) {
        minimizeBtn.addEventListener('click', () => this.minimizeWindow(window.dataset.window));
      }
    });

    // Start menu items
    const startMenuItems = document.querySelectorAll('.start-menu__item');
    startMenuItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const action = e.currentTarget.dataset.action;
        const windowName = e.currentTarget.dataset.window;
        
        if (action === 'next-era') {
          this.switchEra('present');
        } else if (windowName) {
          this.openWindow(windowName);
        }
        this.closeStartMenu();
      });
    });

    // Taskbar task buttons
    this.elements.taskbarTasks.forEach(task => {
      task.addEventListener('click', (e) => {
        const windowName = e.currentTarget.dataset.window;
        this.toggleWindow(windowName);
      });
    });

    // Close start menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.start-button') && !e.target.closest('.start-menu')) {
        this.closeStartMenu();
      }
    });

    // Smooth scrolling for anchor links in Present era
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  },

  // Set up initial application state
  setupInitialState() {
    this.updateEraNavigation();
    this.updateProgressBar();
  },

  // Update copyright year
  updateCopyright() {
    if (this.elements.currentYearSpan) {
      this.elements.currentYearSpan.textContent = new Date().getFullYear();
    }
  },

  // Switch between eras
  switchEra(targetEra) {
    if (this.isTransitioning || targetEra === this.currentEra) return;
    
    this.isTransitioning = true;
    this.currentEra = targetEra;
    
    // Update URL hash for shareable links
    history.pushState(null, null, `#${targetEra}`);
    
    // Hide all eras
    this.elements.eras.forEach(era => {
      era.classList.remove('era--active');
    });
    
    // Show target era with a small delay for smooth transition
    setTimeout(() => {
      const targetEraElement = document.querySelector(`[data-era="${targetEra}"]`);
      if (targetEraElement) {
        targetEraElement.classList.add('era--active');
      }
      
      this.updateEraNavigation();
      this.updateProgressBar();
      
      // Reset transition flag
      setTimeout(() => {
        this.isTransitioning = false;
      }, 300);
    }, 100);

    console.log(`Switched to ${targetEra} era`);
  },

  // Navigate to previous/next era
  navigateEra(direction) {
    const eras = ['past', 'present', 'future'];
    const currentIndex = eras.indexOf(this.currentEra);
    
    let targetIndex;
    if (direction === 'prev') {
      targetIndex = currentIndex > 0 ? currentIndex - 1 : eras.length - 1;
    } else {
      targetIndex = currentIndex < eras.length - 1 ? currentIndex + 1 : 0;
    }
    
    this.switchEra(eras[targetIndex]);
  },

  // Update era navigation button states
  updateEraNavigation() {
    this.elements.eraNavButtons.forEach(button => {
      button.classList.remove('era-nav__button--active');
      if (button.dataset.era === this.currentEra) {
        button.classList.add('era-nav__button--active');
      }
    });
  },

  // Update progress bar position
  updateProgressBar() {
    const progressMap = { past: '0%', present: '33.33%', future: '66.66%' };
    if (this.elements.progressBar) {
      this.elements.progressBar.style.transform = `translateX(${progressMap[this.currentEra]})`;
    }
  },

  // Windows 95 Start Menu functionality
  toggleStartMenu() {
    if (!this.elements.startMenu) return;
    
    const isActive = this.elements.startMenu.classList.contains('start-menu--active');
    
    if (isActive) {
      this.closeStartMenu();
    } else {
      this.openStartMenu();
    }
  },

  openStartMenu() {
    if (!this.elements.startMenu || !this.elements.startButton) return;
    
    this.elements.startMenu.classList.add('start-menu--active');
    this.elements.startButton.classList.add('start-button--active');
  },

  closeStartMenu() {
    if (!this.elements.startMenu || !this.elements.startButton) return;
    
    this.elements.startMenu.classList.remove('start-menu--active');
    this.elements.startButton.classList.remove('start-button--active');
  },

  // Window management functions
  openWindow(windowName) {
    const window = document.querySelector(`[data-window="${windowName}"]`);
    const taskbarTask = document.querySelector(`[data-window="${windowName}"].taskbar__task`);
    
    if (window) {
      // Close other windows first (simple window management)
      this.elements.windows.forEach(w => {
        if (w !== window) {
          w.classList.remove('window--active');
        }
      });
      
      // Update taskbar tasks
      this.elements.taskbarTasks.forEach(task => {
        task.classList.remove('taskbar__task--active');
      });
      
      // Open the target window
      window.classList.add('window--active');
      if (taskbarTask) {
        taskbarTask.classList.add('taskbar__task--active');
      }
      
      console.log(`Opened window: ${windowName}`);
    }
  },

  closeWindow(windowName) {
    const window = document.querySelector(`[data-window="${windowName}"]`);
    const taskbarTask = document.querySelector(`[data-window="${windowName}"].taskbar__task`);
    
    if (window) {
      window.classList.remove('window--active');
      if (taskbarTask) {
        taskbarTask.classList.remove('taskbar__task--active');
      }
      
      console.log(`Closed window: ${windowName}`);
    }
  },

  minimizeWindow(windowName) {
    const window = document.querySelector(`[data-window="${windowName}"]`);
    
    if (window) {
      window.classList.remove('window--active');
      // Note: In a full implementation, this would add to a minimized windows list
      
      console.log(`Minimized window: ${windowName}`);
    }
  },

  toggleWindow(windowName) {
    const window = document.querySelector(`[data-window="${windowName}"]`);
    
    if (window) {
      if (window.classList.contains('window--active')) {
        this.minimizeWindow(windowName);
      } else {
        this.openWindow(windowName);
      }
    }
  }
};

// Utility functions for performance and accessibility
const Utils = {
  // Debounce function for performance
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Check if user prefers reduced motion
  prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Announce changes to screen readers
  announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
};

// Handle URL hash for deep linking
function handleUrlHash() {
  const hash = window.location.hash.substring(1);
  const validEras = ['past', 'present', 'future'];
  
  if (validEras.includes(hash)) {
    PortfolioApp.currentEra = hash;
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Handle URL hash first
  handleUrlHash();
  
  // Initialize the main application
  PortfolioApp.init();
  
  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    handleUrlHash();
    PortfolioApp.switchEra(PortfolioApp.currentEra);
  });
  
  // Add reduced motion class if user prefers it
  if (Utils.prefersReducedMotion()) {
    document.documentElement.classList.add('reduced-motion');
  }
  
  // Performance monitoring (development only)
  if (console.time) {
    console.time('Portfolio Load Time');
    window.addEventListener('load', () => {
      console.timeEnd('Portfolio Load Time');
    });
  }
});

// Handle visibility change for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations or reduce activity when tab is not visible
    console.log('Tab is now hidden - reducing activity');
  } else {
    console.log('Tab is now visible - resuming normal activity');
  }
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PortfolioApp, Utils };
}