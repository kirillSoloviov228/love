// Добавляем плавную анимацию появления элементов при загрузке
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Добавляем случайные сердечки в фон
    createFloatingHearts();
});

function createFloatingHearts() {
    const body = document.querySelector('body');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.color = 'rgba(255, 107, 157, ' + (Math.random() * 0.3 + 0.1) + ')';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.zIndex = '-1';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        
        body.appendChild(heart);
    }
}