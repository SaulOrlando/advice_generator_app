"use strict"

const dice_button = document.querySelector("#dice-button")
const advice_id = document.querySelector("#advice_id")
const advice = document.querySelector("#advice")
const api = "https://api.adviceslip.com/advice"

async function get_advice() {
  try {
    const response = await fetch(api, {
      method: "GET"
    })
    if (!response.ok) {
      throw new Error(`Hubo un error: ${response.status}`);
    }
    const data = await response.json()

    advice_id.textContent = `ADVICE #${data.slip.id}`
    advice.textContent = `'${data.slip.advice}'`
  } catch (error) {
    console.log("Hubo un error en la API: " + error)
  }
}

dice_button.addEventListener("click", () => {
  get_advice()
})

window.addEventListener("load", () => {
  get_advice()
})
