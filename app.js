// AOS init (scroll animations)
AOS.init({
  duration: 800,
  once: true,
  easing: "ease-out"
});

// GSAP hero animation
gsap.from(".hero-text h1", {
  y: 40,
  opacity: 0,
  duration: 0.9
});

gsap.from(".hero-text p", {
  y: 30,
  opacity: 0,
  delay: 0.3,
  duration: 0.8
});

gsap.from(".hero-img", {
  x: 60,
  opacity: 0,
  delay: 0.4,
  duration: 0.9
});

// Dark mode toggle with localStorage
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const storedTheme = localStorage.getItem("socially-theme");
if (storedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("socially-theme", isDark ? "dark" : "light");
});

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileClose = document.getElementById("mobile-close");

function setMenuOpen(open) {
  if (!mobileMenu || !navToggle) return;
  mobileMenu.classList.toggle("open", open);
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  body.classList.toggle("no-scroll", open);
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("open");
    setMenuOpen(isOpen);
  });

  if (mobileClose) {
    mobileClose.addEventListener("click", () => setMenuOpen(false));
  }

  // Close menu when any mobile link is clicked
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
}
