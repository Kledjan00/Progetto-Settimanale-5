const testata = document.getElementById('testata');
const interruttore = document.getElementById('interruttore');
const velo = document.getElementById('velo');
const apriFinestra = document.getElementById('apriFinestra');
const crocetta = document.getElementById('crocetta');
const modulo = document.getElementById('modulo');
const conferma = document.getElementById('conferma');

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

// Apro la modale
apriFinestra.addEventListener('click', function () {
    velo.style.display = 'block';
});

// Chiudo la modale con la X
crocetta.addEventListener('click', function () {
    velo.style.display = 'none';
});

// Invio: niente cambio pagina, mostro il grazie e dopo 2 secondi chiudo
modulo.addEventListener('submit', function (e) {
    e.preventDefault();

    conferma.style.display = 'block';

    setTimeout(function () {
        velo.style.display = 'none';
        conferma.style.display = 'none';
        modulo.reset();
    }, 2000);
});