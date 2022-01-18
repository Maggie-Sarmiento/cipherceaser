

const cipher = {
 
  // metodo que recibe los valores del mensaje y desplazamiento, los pasa para validar
  encode(displacement, msg){
    if(displacement === null || displacement === 0){
      throw new TypeError()
    }
    let cipherLetter =  ''
    const arrayMsg = Array.from(msg)
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    displacement = (displacement % 26 + 26) % 26

    if (msg) {
      for(let i = 0; i < msg.length; i++) {
        if (alphabet.indexOf(arrayMsg[i]) != -1) {
          let newPositionLetter = (alphabet.indexOf(arrayMsg[i]) + displacement) % 26 
          cipherLetter += alphabet[newPositionLetter]
        } else {
          cipherLetter += arrayMsg[i]
        } 
      }
    }
    return cipherLetter
  },
}

export default cipher;

