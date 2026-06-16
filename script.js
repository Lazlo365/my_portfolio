// Typing animation
const typingText = document.querySelector(".typing");
const words = ["Web Developer", "Problem Solver", "Freelancer", "Python Dev"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const speed = isDeleting ? 80 : 120;
  setTimeout(type, speed);
}

type();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// Contact form validation
const submitBtn = document.getElementById('submit-btn');
const formResponse = document.getElementById('form-response');

submitBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Check if fields are empty
  if (!name || !email || !message) {
    formResponse.textContent = '❌ Please fill in all fields.';
    formResponse.className = 'form-response error';
    return;
  }

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formResponse.textContent = '❌ Please enter a valid email address.';
    formResponse.className = 'form-response error';
    return;
  }

  // Success
  formResponse.textContent = `✅ Thanks ${name}! I'll get back to you soon.`;
  formResponse.className = 'form-response success';

  // Clear the form
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});