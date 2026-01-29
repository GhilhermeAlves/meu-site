// 1. Smooth Scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 2. Efeito Dinâmico na Logo (Navbar)
const logo = document.querySelector('.logo');
const textoOriginal = "Dra. Raquel Aguiar";
const textoHover = "Sorria com Confiança"; // O que aparece ao passar o mouse

logo.addEventListener('mouseover', () => {
    logo.style.opacity = '0';
    setTimeout(() => {
        logo.textContent = textoHover;
        logo.style.opacity = '1';
    }, 200);
});

logo.addEventListener('mouseout', () => {
    logo.style.opacity = '0';
    setTimeout(() => {
        logo.textContent = textoOriginal;
        logo.style.opacity = '1';
    }, 200);
});

// 3. Validação e Efeito no Formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Simulação de envio
    setTimeout(() => {
        alert('Obrigado, Dra. Raquel recebeu sua mensagem!');
        this.reset();
        btn.textContent = 'Enviar Mensagem';
        btn.disabled = false;
    }, 1500);
});

// 4. Animações de Entrada (Intersection Observer)
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.5 // Só anima quando 50% do card aparece
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.service-card, .about-content');
    cards.forEach(card => {
        // Preparamos o estilo inicial via JS se não estiver no CSS
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.8s ease-out";
        observer.observe(card);
    });
});

// Função auxiliar para ativar a animação
document.styleSheets[0].insertRule(`
    .visible { 
        opacity: 1 !important; 
        transform: translateY(0) !important; 
    }
`, 0);