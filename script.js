document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-btn').addEventListener('click', function() {
    document.querySelector('#contact-us').scrollIntoView({
        behavior: 'smooth'
    });
});

// Отримати кнопку
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Показати або приховати кнопку
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Прокрутка до верху
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавна прокрутка
    });
});
