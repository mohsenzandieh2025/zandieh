document.querySelector('.mobile-menu')?.addEventListener('click', () => {
    document.querySelector('.main-nav').classList.toggle('active');
});
window.addEventListener('load', () => {
    document.getElementById('preloader')?.classList.add('fade-out');
});
