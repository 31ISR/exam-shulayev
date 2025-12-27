let lastScrollTop = 0;
const header = document.getElementById('mainHeader');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    
    lastScrollTop = scrollTop;
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Вход выполнен успешно!');
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Регистрация завершена успешно!');
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            const navbarCollapse = document.getElementById('navbarNav');
            if(navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide();
            }
        }
    });
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate-fadein');
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .section-title').forEach(el => {
    observer.observe(el);
});
