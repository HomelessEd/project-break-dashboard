const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()-_=+"

const form=document.getElementById("passwordMaker")

function getRandomChar(characters) {
    const index = Math.floor(Math.random() * characters.length)
    return characters[index]
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

function generatePassword(length) {
    length = Math.max(length, 12)
    let password = []

    password.push(getRandomChar(upperCase))
    password.push(getRandomChar(lowerCase))
    password.push(getRandomChar(numbers))
    password.push(getRandomChar(symbols))

    const allCharacters = upperCase + lowerCase + numbers + symbols
    for (let i = password.length; i < length; i++) {
        password.push(getRandomChar(allCharacters))
    }
     return shuffleArray(password).join("")
}

const syncCharacterAmount = (e) => {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

form.addEventListener("submit", e => {
    e.preventDefault()
    const password = generatePassword(characterAmountNumber.value)
    document.querySelector(".passwordBox").textContent = password
})
    
    characterAmountNumber.addEventListener("input", syncCharacterAmount)
    characterAmountRange.addEventListener("input", syncCharacterAmount)
