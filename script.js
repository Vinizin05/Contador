
const btn$ = document.getElementById('Incrementar');
const btn2$ = document.getElementById('Decrementar');
const z$ = document.getElementById('Zerar');
const t$ = document.getElementById('texto');
const c$ = document.getElementById('contador');


let contador = 0;

c$.innerHTML = contador;

btn$.addEventListener('click', function () {
    c$.innerHTML = ++contador;
    t$.innerHTML = ""
});

btn2$.addEventListener('click', function () {
    if(c$.innerHTML>0){
        c$.innerHTML = --contador;
    } else {
        t$.innerHTML = "Chegou em 0"
    }
});

z$.addEventListener('click', function () {
    c$.innerHTML = contador = 0;
    t$.innerHTML = ""
});

