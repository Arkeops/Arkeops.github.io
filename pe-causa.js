document.querySelectorAll('.info-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.display = 'block';
    });

    box.addEventListener('mouseleave', () => {
        box.style.display = 'none';
    });
});
