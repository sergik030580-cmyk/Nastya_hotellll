document.addEventListener('DOMContentLoaded', () => {
    // 1. Плавна прокрутка для всіх посилань навігації
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Логіка для всіх кнопок "ЗАБРОНЮВАТИ ЗАРАЗ"
    document.querySelectorAll('.booking-btn').forEach(button => {
        button.addEventListener('click', function() {
            // В ідеалі тут має бути перехід на вашу зовнішню систему бронювання.
            // Наприклад: window.location.href = 'https://link-to-your-booking-system.com';
            
            alert('Дякуємо! Ви натиснули "Забронювати зараз". Тут буде інтегрована система бронювання.');
        });
    });

    // 3. Зміна стилю шапки при прокручуванні (для кращого UX)
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });
})