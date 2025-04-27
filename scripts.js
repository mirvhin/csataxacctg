document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const navbarHeight = document.querySelector('header').offsetHeight; // Get the navbar height
      const targetPosition = target.offsetTop - navbarHeight;

      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth' // Smooth scrolling effect
      });
  });
});