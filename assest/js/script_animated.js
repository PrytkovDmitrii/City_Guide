function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-left, .animate-down, .animate-up, .animate-right');

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();