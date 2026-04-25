import './style.css';

// Scroll Progress Bar
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + '%';
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      
      // Stat counters
      const statVal = entry.target.querySelector('.stat-val');
      if (statVal && !statVal.classList.contains('counted')) {
        animateCounter(statVal);
        statVal.classList.add('counted');
      }
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.querySelectorAll('section').forEach(el => observer.observe(el));

// Counter Animation
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const stepTime = 20;
  const steps = duration / stepTime;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target.toLocaleString() + (target >= 500 ? '+' : '');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString();
    }
  }, stepTime);
}

// Eldorado Filtering Logic
const filterButtons = document.querySelectorAll('.filter-pill');
const eldoradoGrid = document.getElementById('eldorado-grid');
const eldoradoCards = document.querySelectorAll('#eldorado-grid .card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from other buttons in the same group
    btn.parentElement.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const skillFilter = btn.getAttribute('data-skill');
    
    if (skillFilter) {
      eldoradoCards.forEach(card => {
        const cardSkill = card.getAttribute('data-skill');
        if (skillFilter === 'all' || cardSkill === skillFilter) {
          card.style.display = 'flex';
          setTimeout(() => card.style.opacity = '1', 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    }
  });
});

// Navbar background change
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.padding = '1rem 5%';
    nav.style.background = 'rgba(5, 5, 5, 0.95)';
  } else {
    nav.style.padding = '1.5rem 5%';
    nav.style.background = 'rgba(5, 5, 5, 0.8)';
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

console.log('UXHacks Deep Detail Edition Initialized');
