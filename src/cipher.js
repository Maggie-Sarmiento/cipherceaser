const cipher = {
  // ...
};

let chara = "B"
let rot = 1

let positionchara = chara.charCodeAt()
let neposition = (positionchara + rot) 
//console.log(String.fromCharCode(newposition))


let msg = 'HOLA'
console.log(msg)

function getpositionmsg(msg) {
  let positionmsg = []
  let rot2 = 1
  
  for (let i = 0; i < msg.length; i++) {
    let positionchar = msg.charCodeAt(i)
    positionmsg.push(positionchar)
  }
  console.log(positionmsg)
  newposition(positionmsg, rot2)
}



function newposition(positionmsg, rot) {
  let newpositionmsg = []
  for (let i = 0; i < positionmsg.length; i++) {
    let newpositionchar = (positionmsg[i] + rot)
    newpositionmsg.push(newpositionchar)
  }
  console.log(newpositionmsg);
  ciphermsg(newpositionmsg)
}

function ciphermsg(newpositionmsg) {
  let cipherchars = []
  for (let i = 0; i < newpositionmsg.length; i++) {
    let cipherchar = String.fromCharCode(newpositionmsg[i] )
    cipherchars.push(cipherchar)
  }
  showciphermsg(cipherchars)
}

function showciphermsg(cipherchars) {
  console.log(cipherchars.join(''))
}

getpositionmsg(msg)





export default cipher;
