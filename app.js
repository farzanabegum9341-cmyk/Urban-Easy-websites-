// Small progressive enhancement: lazy-load gallery media and add smooth navigation.
document.querySelectorAll('img').forEach(img => { if (!img.closest('.brand')) img.loading = 'lazy'; });
document.documentElement.style.scrollBehavior = 'smooth';
