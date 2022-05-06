window.addEventListener('scroll', () => {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle('active', window.scrollY > 500);
});

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
