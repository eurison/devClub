setTimeout(() => {
  console.log("setTimeOut foi executado em 3 segundos")
}, 3000)

let time = 0

setInterval(() => {
  time++
  console.log("setInterval em execução", time)
}, 1000)
