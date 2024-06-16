const caja1 = document.querySelector('#'+'caja1');
const caja2 = document.querySelector('#'+'caja2');
const caja3 = document.querySelector('#'+'caja3');
const caja4 = document.querySelector('#'+'caja4');

function pintar(event) {
    event.target.style.backgroundColor = 'black';
}

caja1.addEventListener('click', pintar);
caja2.addEventListener('click', pintar);
caja3.addEventListener('click', pintar);
caja4.addEventListener('click', pintar);