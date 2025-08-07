document.addEventListener('DOMContentLoaded', function() {

    // Efeito Máquina de Escrever
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const text = typingElement.innerHTML;
        typingElement.innerHTML = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typingElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 40);
            }
        }
        typeWriter();
    }

    // Efeito no Header ao rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = 'none';
        }
    });

});
