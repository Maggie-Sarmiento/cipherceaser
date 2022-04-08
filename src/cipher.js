

const cipher = {
  // metodo que recibe los valores del mensaje y desplazamiento y los cifra
  encode(displacement, msg){
    if(displacement === null || displacement === 0){
      throw new TypeError()
    }
    let cipherLetter =  ''
    const arrayMsg = Array.from(msg)
    const upperAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const lowerAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    displacement = (displacement % 26 + 26) % 26

    if (msg) {
      for(let i = 0; i < msg.length; i++) {
        if (upperAlphabet.indexOf(arrayMsg[i]) != -1) {
          let newPositionLetter = (upperAlphabet.indexOf(arrayMsg[i]) + displacement) % 26 
          cipherLetter += upperAlphabet[newPositionLetter]
        } else if (lowerAlphabet.indexOf(arrayMsg[i]) != -1) {
          let newPositionLetterLowerToDecipher = ((lowerAlphabet.indexOf(arrayMsg[i]) + displacement) + 26) % 26 
          cipherLetter += lowerAlphabet[newPositionLetterLowerToDecipher]
        } else {
          cipherLetter += arrayMsg[i]
        }
      }
    }
    return cipherLetter
  },

  // metodo que recibe los valores del mensaje y desplazamiento y los descifra
  decode(displacement, msgtodecipher) {
    if(displacement === null || displacement === 0){
      throw new TypeError()
    }
    let decipherLetter = ''
    const arrayMsgToDecipher = Array.from(msgtodecipher)
    const upperAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const lowerAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    displacement = (displacement % 26 + 26) % 26

    if(msgtodecipher){
      for(let i = 0; i < msgtodecipher.length; i++) {
        if(upperAlphabet.indexOf(arrayMsgToDecipher[i]) != -1) {
          let newPositionLetterToDecipher = ((upperAlphabet.indexOf(arrayMsgToDecipher[i]) - displacement) + 26) % 26 
          decipherLetter += upperAlphabet[newPositionLetterToDecipher]
        } else if (lowerAlphabet.indexOf(arrayMsgToDecipher[i]) != -1) {
          let newPositionLetterLowerToDecipher = ((lowerAlphabet.indexOf(arrayMsgToDecipher[i]) - displacement) + 26) % 26 
          decipherLetter += lowerAlphabet[newPositionLetterLowerToDecipher]
        } else {
          decipherLetter += arrayMsgToDecipher[i]
        }
      }
    }
    return decipherLetter
  }
}

export default cipher;

