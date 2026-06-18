const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

const animatedElements = document.querySelectorAll('.section, .profile-card, .project-card, .stat-card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

animatedElements.forEach(element => {
  element.classList.add('reveal');
  observer.observe(element);
});
