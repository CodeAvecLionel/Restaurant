document.addEventListener('DOMContentLoaded', (event) => {
    const bookBtns = document.querySelectorAll('.book-btn');
    bookBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Merci pour votre intérêt ! Notre système de réservation sera bientôt disponible.');
        });
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    setInterval(() => {
        const background = document.querySelector('.background');
        background.style.opacity = '0';
        setTimeout(() => {
            background.style.backgroundImage = `url(/images/bg1.jpg=${new Date().getTime()}')`;
            background.style.opacity = '1';
        }, 500);
    }, 10000);

    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Merci pour votre message ! Nous vous répondrons bientôt.');
        contactForm.reset();
    });

    const loginBtn = document.querySelector('.login-btn');
    const registerBtn = document.querySelector('.register-btn');

    loginBtn.addEventListener('click', () => {
        alert('La fonctionnalité de connexion sera bientôt disponible !');
    });

    registerBtn.addEventListener('click', () => {
        alert('La fonctionnalité d\'inscription sera bientôt disponible !');
    });

    const orderBtns = document.querySelectorAll('.order-btn');
    orderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Article ajouté au panier !');
        });
    });

    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.addEventListener('click', () => {
        alert('La fonctionnalité du panier d\'achat sera bientôt disponible !');
    });
});

