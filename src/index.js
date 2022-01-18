window.addEventListener('load', index, true)
import cipher from './cipher.js';


function index(){
    // evento que escucha que se levante la tecla y la convierte en mayuscula
    document.getElementById('inputmsg').addEventListener('keyup', function(){ 
        this.value = this.value.toUpperCase()
    })

    // evento que escucha un click y llama a las funciones que guardan el mensaje y el desplazamiento
    document.getElementById('buttoncipher').addEventListener('click', function(){
       let displacement = document.getElementById('displacement').value
       let msg = document.getElementById('inputmsg').value
       document.getElementById('inputciphermsg').value = cipher.encode(displacement, msg)
    })
}


console.log(cipher);







