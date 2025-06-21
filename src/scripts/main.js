document.addEventListener("DOMContentLoaded", function () {
  initScrollProgressIndicator();
  initEraNavigation();
  initBackToTopButton();
  initFloatingActionButton();
  updateCurrentYear();
});

function initScrollProgressIndicator() {
  const scrollIndicator = document.getElementById("scroll-indicator");
  const eras = document.querySelectorAll(".era");
  const eraNav = document.querySelectorAll(".era-nav__link");

  window.addEventListener(
    "scroll",
    function () {
      // Update scroll progress indicator
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (scrollIndicator) {
        scrollIndicator.style.height = scrollPercentage + "%";
      }

      // Update active era based on scroll position
      eras.forEach((era, index) => {
        const rect = era.getBoundingClientRect();
        const eraMidpoint = rect.top + rect.height / 2;

        if (eraMidpoint > 0 && eraMidpoint <= window.innerHeight) {
          // Remove active class from all links
          eraNav.forEach((link) =>
            link.classList.remove("era-nav__link--active"),
          );

          // Add active class to current era link
          const eraId = era.getAttribute("id");
          const activeLink = document.querySelector(
            `.era-nav__link[href="#${eraId}"]`,
          );
          if (activeLink) {
            activeLink.classList.add("era-nav__link--active");
          }

          // Update URL hash without scrolling
          const eraType = era.getAttribute("data-era");
          if (eraType && history.replaceState) {
            history.replaceState(null, null, `#${eraId}`);
          }
        }
      });
    },
    { passive: true },
  );
}

function initEraNavigation() {
  const eraLinks = document.querySelectorAll(".era-nav__link");

  eraLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Smooth scroll to target era
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update URL hash
        if (history.pushState) {
          history.pushState(null, null, `#${targetId}`);
        } else {
          location.hash = targetId;
        }
      }
    });
  });
}

function initBackToTopButton() {
  const backToTopButton = document.getElementById("back-to-top-button");

  if (backToTopButton) {
    // Show/hide back to top button based on scroll position
    window.addEventListener(
      "scroll",
      function () {
        if (window.pageYOffset > window.innerHeight) {
          backToTopButton.classList.add("visible");
        } else {
          backToTopButton.classList.remove("visible");
        }
      },
      { passive: true },
    );

    // Scroll to top when button is clicked
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

function initFloatingActionButton() {
  const fab = document.getElementById("floating-action-button");
  const contactModal = document.getElementById("contact-modal");
  const closeButtons = document.querySelectorAll(".modal__close, .modal-close");

  if (fab && contactModal) {
    fab.addEventListener("click", function () {
      contactModal.classList.add("modal--visible");
      contactModal.setAttribute("aria-hidden", "false");

      // Trap focus inside modal
      const focusableElements = contactModal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    });

    closeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        contactModal.classList.remove("modal--visible");
        contactModal.setAttribute("aria-hidden", "true");
        fab.focus();
      });
    });

    // Close modal on escape key
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        contactModal.classList.contains("modal--visible")
      ) {
        contactModal.classList.remove("modal--visible");
        contactModal.setAttribute("aria-hidden", "true");
        fab.focus();
      }
    });

    // Close modal when clicking outside
    contactModal.addEventListener("click", function (e) {
      if (e.target === contactModal) {
        contactModal.classList.remove("modal--visible");
        contactModal.setAttribute("aria-hidden", "true");
        fab.focus();
      }
    });
  }
}

function updateCurrentYear() {
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
}
