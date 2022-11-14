function moverPosicionRamdom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px'; // window.innerHeight saca el tamaño del Height //offset retorna la distancia del elemento actual incluyendo padding y border (Solo lectura)

    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

//addEventListener es un escucha cuando pase algo
// mouseenter sirve para saber cuando el mouse este dentro del elemento o sea el hover
btnNo.addEventListener('mouseenter', function(e){moverPosicionRamdom(e.target); //target es elemento actual 
})

btnSi.addEventListener('click', function(e){
    alert("Sabía que dirías que sí, casemonos ya y tengamos hijos. TE AMO!!! 💗")
    divModoSexo.style.display = 'block';

    const cancion = new Audio("audio/modo_hot.mp3");
    cancion.play();
});

