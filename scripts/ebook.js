function typeEffect(element, speed = 60) {
    const text = element.dataset.text || "";
    element.textContent = "";
  
    [...text].forEach((char, i) => {
      setTimeout(() => {
        element.textContent += char;
      }, i * speed);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".hero-ebook h1");
    if (title) {
      // Garante que data-text esteja definido corretamente
      if (!title.dataset.text) {
        title.dataset.text = title.textContent.trim();
      }
      typeEffect(title, 60);
    }
  
    // Animação no botão
    const ctaButton = document.querySelector(".hero-ebook .btn");
    if (ctaButton) {
      setTimeout(() => {
        ctaButton.classList.add("pulse");
      }, 1500);
    }
  });
  
// animaçao botao de venda
  const urgenciaEl = document.getElementById("ofertaUrgencia");
if (urgenciaEl) {
  const frases = [
    "📢 Promoção por tempo limitado!",
    "⏰ Últimos dias com esse valor especial!",
    "🚀 Entrega imediata após a compra!",
    "🎉 Mais de 2.000 famílias já baixaram!"
  ];
  let index = 0;
  setInterval(() => {
    urgenciaEl.textContent = frases[index];
    index = (index + 1) % frases.length;
  }, 5000);
}
