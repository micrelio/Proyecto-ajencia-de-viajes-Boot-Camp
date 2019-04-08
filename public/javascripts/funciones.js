// MENU
function ocultar() {
    document.getElementById('sel').style.display = 'none';
    document.getElementById('boton1').style.display = 'block';
    document.getElementById('boton2').style.display = 'none';
}

function mostrar() {
    document.getElementById('boton1').style.display = 'none';
    document.getElementById('sel').style.display = 'block';
    document.getElementById('boton2').style.display = 'block';

}

// function prueba() {
//     console.log('EEEEEEEEEEEEEEEEEEEEEEEE');

// }

document.addEventListener('DOMContentLoaded', function () {
    // const counterNode = document.querySelector('boton3');
    const baseApiUrl = 'http://localhost:3000';


    document.querySelector(' #boton3').addEventListener('click', () => {
        // reset counter
        //console.log('EEEEEEEEEEEEEEEEEEEEEEEE');
        fetch(baseApiUrl + '/login', {
                method: 'GET',
            })
            .then(window.location = "login")
    })

    document.querySelector(' #boton4').addEventListener('click', () => {
        //No hace falta hacer fetch, hace un get con el evento




        // fetch(baseApiUrl + '/registro', {
        //         method: 'GET',
        //     })
        //     .then(window.location = "registro")
        window.location = "registro"
    })


    document.querySelector('#boton5').addEventListener('click', () => {
        fetch(baseApiUrl + '/', {
                method: 'GET',
            })
            .then(window.location = "/")

    })





})