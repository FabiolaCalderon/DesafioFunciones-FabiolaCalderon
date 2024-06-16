
/*const ele= document.getElementById('ele1');

function pintar(){
    ele.style.backgroundColor = "yellow"
}
ele.addEventListener('click', pintar); */


const ele = document.getElementById('ele1');

function pintar(e, color = 'green'){
    e.target.style.backgroundColor = color;
}

ele.addEventListener('click', (e) => {
    pintar(e, 'yellow')
})