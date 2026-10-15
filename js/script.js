/**
 * PROJECT CONTINNUM : ARCADIA-AMETHYST
 * Immersive Motion Engine, GSAP Scroll Navigation & Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Global Progress Bar Controller Across All Storytelling Slots ---
  const progressBar = document.getElementById('scroll-progress-bar');

  const updateProgressBar = () => {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  };

  window.addEventListener('scroll', updateProgressBar, { passive: true });
  updateProgressBar();

  // --- 2. Fullscreen 9-Node Navigation Topology Controller ---
  const navOverlay = document.getElementById('fullscreen-nav-overlay');
  const navActivator = document.getElementById('nav-activator');
  const navClose = document.getElementById('nav-close');
  const navCardNodes = document.querySelectorAll('.nav-card-node');

  const openNav = () => {
    if (!navOverlay) return;
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    if (!navOverlay) return;
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (navActivator) navActivator.addEventListener('click', openNav);
  if (navClose) navClose.addEventListener('click', closeNav);

  // Smooth scroll snapping to anchor groups via GSAP or native smooth scroll
  navCardNodes.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = card.getAttribute('data-target');
      const targetElem = document.getElementById(targetId);

      closeNav();

      if (targetElem) {
        if (window.gsap && window.ScrollToPlugin) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: targetElem, autoKill: false },
            ease: 'power3.inOut',
          });
        } else {
          targetElem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navOverlay && navOverlay.classList.contains('active')) {
      closeNav();
    }
  });

  // --- 3. GSAP & ScrollTrigger Initialization (When Loaded) ---
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    const narrativeBoxes = document.querySelectorAll('.narrative-box, .hundred-million-wrapper, .standalone-visual-card');
    narrativeBoxes.forEach((elem) => {
      gsap.fromTo(
        elem,
        { opacity: 0.85, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }

  // --- 4. Interactive Color Lore Controller (Group 4: Exterior) ---
  const colorPills = document.querySelectorAll('.color-pill');
  const colorVisual = document.getElementById('exterior-color-visual');
  const colorDescription = document.getElementById('color-lore-description');

  const colorData = {
    amethyst: {
      src: 'Images and Vedios/4. Colors.jpg',
      desc: 'Amethyst Deep Velvet: Imbued with microscopic crushed amethyst crystals, absorbing urban tungsten at dusk while radiating velvet violet luminescence in direct sunlight.',
    },
    silver: {
      src: 'Images and Vedios/3. One shot stage image.jpg',
      desc: 'Arcadia Liquid Silver: Triple-buffed pure chrome matrix providing an unbroken reflective mirror surface across the monolithic coachbuilt flanks.',
    },
    morph: {
      src: 'Images and Vedios/5. Color Combinations.jpg',
      desc: 'Continuum Morph Duotone: Precision optical gradient shifting from deep regal amethyst at the prow into liquid mercury silver at the boat-tail aeroblades.',
    },
  };

  colorPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      colorPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const shade = pill.getAttribute('data-shade');
      if (colorData[shade]) {
        if (colorVisual) {
          colorVisual.style.opacity = '0';
          setTimeout(() => {
            colorVisual.src = colorData[shade].src;
            colorVisual.style.opacity = '1';
          }, 250);
        }
        if (colorDescription) {
          colorDescription.textContent = colorData[shade].desc;
        }
      }
    });
  });

  // --- 5. Reverse Gear Lighting Interactive Toggle (Section 24) ---
  const reverseToggleBtn = document.getElementById('toggle-reverse-gear');
  const reverseVisual = document.getElementById('reverse-visual');
  const reverseStateLabel = document.getElementById('reverse-state-label');
  let isReverseActive = false;

  if (reverseToggleBtn && reverseVisual && reverseStateLabel) {
    reverseToggleBtn.addEventListener('click', () => {
      isReverseActive = !isReverseActive;
      if (isReverseActive) {
        reverseVisual.src = 'Images and Vedios/10.2. Rear view - Back gear.jpg';
        reverseStateLabel.textContent = 'REVERSE ENGAGED: White Underglow Cut • Laser Plate Spotlights Active • Yellow Wheel Vectors Deployed';
        reverseToggleBtn.style.borderColor = '#00F5D4';
        reverseToggleBtn.style.boxShadow = '0 0 20px rgba(0, 245, 212, 0.4)';
      } else {
        reverseVisual.src = 'Images and Vedios/10. Rear View.jpg';
        reverseStateLabel.textContent = 'STANDARD DRIVE IGNITION: Continuous OLED Lightblade • Active White Underglow Active';
        reverseToggleBtn.style.borderColor = 'rgba(0, 245, 212, 0.4)';
        reverseToggleBtn.style.boxShadow = 'none';
      }
    });
  }

  // --- 6. Seat Kinetic Transformation Toggle (Section 27) ---
  const seatTransformBtn = document.getElementById('toggle-seat-transform');
  const seatVisual = document.getElementById('seat-visual');
  const seatStateText = document.getElementById('seat-state-text');
  let isCouchLayout = true;

  if (seatTransformBtn && seatVisual && seatStateText) {
    seatTransformBtn.addEventListener('click', () => {
      isCouchLayout = !isCouchLayout;
      if (isCouchLayout) {
        seatVisual.src = 'Images and Vedios/12. Seats - modified with couch.jpg';
        seatStateText.textContent = 'Chaise Lounge Couch Transformation: Front thrones recessed flush into floorplate; unbroken continuous leather daybed deployed.';
      } else {
        seatVisual.src = 'Images and Vedios/11.3. Seats.jpg';
        seatStateText.textContent = 'Sovereign 4-Seat Executive Club: Four independent thrones upright with 24-way motorized articulation and personal center console.';
      }
    });
  }

  // --- 7. Hero Video Autoplay Assurance ---
  const heroVideo = document.getElementById('hero-banner-video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.play().catch(() => {
      // Autoplay fallback silently handled
    });
  }
});
