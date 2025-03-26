function showPage(page) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('produk').classList.add('hidden');

    document.getElementById(page).classList.remove('hidden');
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
    