'use strict'

const userInput = process.argv[2]

let random
let message = ''
let total = 0

for (let i = 0; i < userInput; i++) {
  random = Math.floor(Math.random() * 6) + 1
  message += `Roll ${i + 1}: ${random}, `
  total += random
}
console.log(message)
console.log(`Total is ${total}`)
