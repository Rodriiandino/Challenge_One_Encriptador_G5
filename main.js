const inputText = document.getElementById('input-text')
const btnEncrypt = document.getElementById('btn-encrypt')
const btnDecrypt = document.getElementById('btn-decrypt')
const outputText = document.getElementById('output-text')
const textDecored = document.querySelector('.aside__text')

const llaves = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'
}

const encrypt = text => {
  const textArray = text.split('')
  const textArrayEncrypt = textArray.map(letter => {
    return llaves[letter] ? llaves[letter] : letter
  })
  return textArrayEncrypt.join('')
}

const outputEncrypt = () => {
  const text = encrypt(inputText.value)

  outputText.innerHTML = text
  outputText.classList.remove('hidden')
  textDecored.classList.add('hidden')
}

const outputDecrypt = () => {
  const text = inputText.value
  outputText.innerHTML = text
  outputText.classList.remove('hidden')
  textDecored.classList.add('hidden')
}

btnEncrypt.addEventListener('click', () => {
  outputEncrypt()
})

btnDecrypt.addEventListener('click', () => {
  outputDecrypt()
})
