// scripts/main.js

// 1. Efeito de digitação no título da Hero
function typeEffect(element, speed = 60) {
  const text = element.textContent.trim();
  element.textContent = "";
  [...text].forEach((char, i) => {
    setTimeout(() => {
      element.textContent += char;
    }, i * speed);
  });
}

// 2. Tabs "Quem Somos"
function openTab(evt, tabId) {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabLinks = document.querySelectorAll('.tab-link');

  tabContents.forEach(content => content.classList.remove('active'));
  tabLinks.forEach(link => link.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

// 3. Ao carregar o DOM
document.addEventListener("DOMContentLoaded", () => {
  // 3.1 Fade-in com delay progressivo
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 100);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => observer.observe(el));

  // 3.2 Efeito de digitação
  const title = document.querySelector(".hero-title");
  if (title) typeEffect(title, 60);

  // 3.3 Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // 3.4 Botão "voltar ao topo"
  const backToTop = document.createElement("button");
  backToTop.id = "backToTop";
  backToTop.textContent = "↑";

  Object.assign(backToTop.style, {
    display: "none",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 16px",
    border: "none",
    borderRadius: "50%",
    background: "#365b6d",
    color: "#fff",
    cursor: "pointer",
    zIndex: 999
  });

  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 500 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// 4. Parallax com performance otimizada
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const hero = document.querySelector(".hero-section");
      if (hero) {
        hero.style.backgroundPosition = `center ${window.scrollY * 0.4}px`;
      }
      ticking = false;
    });
    ticking = true;
  }
});
