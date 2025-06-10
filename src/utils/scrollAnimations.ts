
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // Observe all scroll-reveal elements
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  scrollElements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    scrollElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
};
