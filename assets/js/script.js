const testata = document.getElementById('testata');
const interruttore = document.getElementById('interruttore');

// Dopo 100px di scroll la testata si stringe e diventa verde
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        testata.classList.add('compatta');
    } else {
        testata.classList.remove('compatta');
    }
});

// Tema chiaro / scuro
interruttore.addEventListener('click', function () {
    document.body.classList.toggle('notte');
});