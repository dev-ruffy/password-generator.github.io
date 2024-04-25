const generatePassword = (hasLow, hasUp, hasNum, hasSym, length) => {
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = '1234567890'
  let symbol = "-=~!@#$%^&*()_+[]{}|;':,./<>?"
  let characterString = ''
  let password = ''

  characterString += hasLow.checked ? lowercase : ''
  characterString += hasUp.checked ? uppercase : ''
  characterString += hasNum.checked ? number : ''
  characterString += hasSym.checked ? symbol : ''

  if (length.value <= 8) {
    return 'password must be the 8 charchater long'
  }
  if (length.value > 257) {
    return "can't generate password that long"
  }
  if (isNaN(length.value)) {
    return 'please enter the valid number'
  }

  if (!hasLow.checked && !hasNum.checked && !hasUp.checked && !hasSym.checked) {
    return 'please select any value'
  }
  for (i = 0; i < length.value; i++) {
    const randomString = Math.floor(Math.random() * characterString.length)
    password += characterString[randomString]
  }

  return password
}
const passwordLength = document.querySelector('.password-length')
const hasLowerCharacter = document.querySelector('.has-lower-character')
const hasUpperCharacter = document.querySelector('.has-upper-character')
const hasNumber = document.querySelector('.has-number')
const hasSymbol = document.querySelector('.has-symbol')
const submitBtn = document.querySelector('.submit')
const showPassword = document.querySelector('.password-show')
const copyButton = document.querySelector('.copy-button')
const refreshButton = document.querySelector('.refresh-button')
const textToNotCopy = showPassword.textContent

submitBtn.addEventListener('click', () => {
  const passwordIs = generatePassword(
    hasLowerCharacter,
    hasUpperCharacter,
    hasNumber,
    hasSymbol,
    passwordLength
  )
  showPassword.textContent = passwordIs
})

const copyToClipboard = () => {
  copyButton.addEventListener('click', () => {
    const textToCopy = showPassword.textContent
    if(textToCopy == textToNotCopy){
      return
    }
    navigator.clipboard.writeText(textToCopy)
  })
}

copyToClipboard()

refreshButton.addEventListener("click",()=>{
    const passwordIs = generatePassword(
      hasLowerCharacter,
      hasUpperCharacter,
      hasNumber,
      hasSymbol,
      passwordLength
    )
    showPassword.textContent = passwordIs
})