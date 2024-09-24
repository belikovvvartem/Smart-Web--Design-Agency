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
