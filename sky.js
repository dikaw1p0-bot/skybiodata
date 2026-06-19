document.addEventListener('DOMContentLoaded', () => {
    // Animasi muncul untuk elemen info secara bertahap
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease-out';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 300 + (index * 150));
    });

    // Animasi untuk tag hobi
    const tags = document.querySelectorAll('.tag');
    tags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        tag.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'scale(1)';
        }, 1000 + (index * 100));
    });

    // Efek hover interaktif pada card (mengikuti kursor sedikit)
    const card = document.querySelector('.biodata-card');
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        if (window.innerWidth > 768) { // Hanya aktif di desktop
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });

    // Reset transform saat mouse keluar
    document.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});