// Minimal JavaScript for portfolio
// Dark mode is handled via CSS @media (prefers-color-scheme: dark)

// Smooth scroll for anchor links (fallback for browsers without CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update URL without triggering scroll
      history.pushState(null, null, targetId);
    }
  });
});
