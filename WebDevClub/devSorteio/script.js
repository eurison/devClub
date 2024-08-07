function generateNumber(min, max) {
  min = Math.ceil(document.querySelector(".input-min").value)
  max = Math.floor(document.querySelector(".input-max").value)

  if (min >= max) {
    alert("O minimo deve ser menor que o maximo")
    return
  } else {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    document.querySelector(
      ".result"
    ).innerHTML = `O numero sorteado foi ${randomNumber}.`
  }
  console.log(min, max)
}
