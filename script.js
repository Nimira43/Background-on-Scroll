let bg = document.querySelector('.bg')
window.addEventListener('scroll', () => bg.style.backgroundPosition = window.scrollY + 'px')