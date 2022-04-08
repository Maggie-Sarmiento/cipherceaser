window.addEventListener('load', index, true)
import cipher from './cipher.js';


function index(){
    // evento que escucha un click y llama a las funciones que guardan el mensaje y el desplazamiento
    document.getElementById('buttoncipher').addEventListener('click', function(){
       let displacement = document.getElementById('inputdisplacement').value
       let msg = document.getElementById('inputmsg').value
       document.getElementById('inputciphermsg').value = cipher.encode(displacement, msg)
    })


    // evento que escucha un click y llama a las funciones que guardan el mensaje a descifrar y el desplazamiento
    document.getElementById('buttondecipher').addEventListener('click', function(){
        let displacement = document.getElementById('inputdisplacement').value 
        let msgtodecipher = document.getElementById('inputciphermsg').value
        document.getElementById('inputmsg').value = cipher.decode(displacement, msgtodecipher)
    })

    // Seccion del codigo que muestra y oculta el pop de WhatSection
    const buttonwhat = document.getElementById('popwhat')
    const popupwhat = document.querySelector('.whatsectionpop')
    buttonwhat.addEventListener('click', function(){
        popupwhat.style.display = 'block'
    })
    document.getElementById('buttonBackWhat').addEventListener('click', function () {
        popupwhat.style.display = 'none'
    })

    // Seccion del codigo que muestra y oculta el pop de WhatSection
    const buttonhow = document.getElementById('pophow')
    const popuphow = document.querySelector('.howsectionpop')
    buttonhow.addEventListener('click', function(){
        popuphow.style.display = 'block'
    })
    document.getElementById('buttonBackHow').addEventListener('click', function () {
        popuphow.style.display = 'none'
    })

    // Boton que recarga la pagina
    document.getElementById('buttonreset').onclick = function() {
        location.reload(document.getElementById('main-section'))
    }

}


// console.log(cipher);







