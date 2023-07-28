import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculeteIMC, notANumber } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputWeight.onclick = function () {
  AlertError.close()
}

inputHeight.onclick = function () {
  AlertError.close()
}

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const weightOrHightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHightIsNotANumber) {
    AlertError.open()
    return
  }
  AlertError.close()
  const result = calculeteIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  Modal.message.innerText = `Seu IMC é de ${result}`
  Modal.open()
}
