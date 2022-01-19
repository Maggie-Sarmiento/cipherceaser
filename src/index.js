window.addEventListener('load', index, true)
import cipher from './cipher.js';


function index(){
    // evento que escucha un click y llama a las funciones que guardan el mensaje y el desplazamiento
    document.getElementById('buttoncipher').addEventListener('click', function(){
       let displacement = document.getElementById('displacement').value
       let msg = document.getElementById('inputmsg').value
       document.getElementById('inputciphermsg').value = cipher.encode(displacement, msg)
    })

    document.getElementById('buttondecipher').addEventListener('click', function(){
        let displacement = document.getElementById('displacement').value 
        let msgtodecipher = document.getElementById('inputciphermsg').value
        document.getElementById('inputmsg').value = cipher.decode(displacement, msgtodecipher)
    })
}


console.log(cipher);







