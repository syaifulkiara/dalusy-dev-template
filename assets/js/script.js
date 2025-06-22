// You can add your custom JavaScript here
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for all anchor links with hash
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-box, .card-tutorial');
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            // Jika elemen masuk viewport
            if (rect.top <= windowHeight * 0.8) {
                // Tambahkan class untuk animasi jika belum ada
                if (!element.classList.contains('animate')) {
                    element.classList.add('animate');
                }
            }
        });
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', animateOnScroll);

    // Panggil sekali saat DOM content loaded untuk animasi langsung
    animateOnScroll();
});

// Back to Top Functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');

    // Tampilkan tombol saat scroll lebih dari 300px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Klik tombol untuk kembali ke atas dengan smooth scroll
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth' });
        // Jika tidak ada id 'top', bisa scroll ke (0,0)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});