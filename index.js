const inputText = document.getElementById('input-text')
const btnEncrypt = document.getElementById('btn-encrypt')
const btnDecrypt = document.getElementById('btn-decrypt')
const outputText = document.getElementById('output-text')
const textDecored = document.querySelector('.aside__text')
const copyText = document.getElementById('copy-btn')

const llaves = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'
}

const llavesInvertidas = Object.keys(llaves).reduce((obj, key) => {
  obj[llaves[key]] = key
  return obj
}, {})

const encrypt = text => {
  // Separar el texto en un array de letras
  const textArray = text.split('')

  // Recorro el array y encripto cada letra
  const textArrayEncrypt = textArray.map(letter => {
    return llaves[letter] ? llaves[letter] : letter
  })
  // Unir el array de letras encriptadas en un string
  return textArrayEncrypt.join('')
}

const decrypt = text => {
  // Separar el texto en un array de letras encriptadas
  const encryptedArray = text.split(/(ai|enter|imes|ober|ufat|)/)

  // Recorro el array de letras encriptadas y desencripto cada letra
  const textArrayDecrypt = encryptedArray.map(letter => {
    return llavesInvertidas[letter] ? llavesInvertidas[letter] : letter
  })
  // Unir el array de letras desencriptadas en un string
  return textArrayDecrypt.join('')
}

const outputEncrypt = () => {
  const text = encrypt(inputText.value)

  outputText.innerHTML = text
  outputText.classList.remove('hidden')
  copyText.classList.remove('hidden')
  textDecored.classList.add('hidden')
}

const outputDecrypt = () => {
  const text = decrypt(inputText.value)
  outputText.innerHTML = text
  outputText.classList.remove('hidden')
  copyText.classList.remove('hidden')
  textDecored.classList.add('hidden')
}

const copy = () => {
  // Seleccion del contenido del input
  inputText.select()
  inputText.setSelectionRange(0, 99999) /* Para dispositivos móviles */

  // Copia el contenido al portapapeles utilizando el API Clipboard
  navigator.clipboard.writeText(outputText.innerHTML)

  // Deselecciona el input
  inputText.setSelectionRange(0, 0)
}
// Eventos
btnEncrypt.addEventListener('click', () => {
  outputEncrypt()
})

btnDecrypt.addEventListener('click', () => {
  outputDecrypt()
})

copyText.addEventListener('click', () => {
  copy()
})
