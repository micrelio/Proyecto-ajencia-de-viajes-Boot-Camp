

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
         fetch(baseApiUrl + '/login' , {
                method: 'GET', })
                



        //  return fetch(baseApiUrl + '/tasks', {
        //     method: 'PUT',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         color
        //     })
    })
    })
  
  