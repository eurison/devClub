/*

? if (se)
: else (se não)

*/

const salario = 5000
//forma de ternário
salario < 3000 ? console.log("Dev. is Junior") : console.log("Dev. is Senior")

//forma normal de if else
if (salario < 3000) {
  console.log("Dev. is junior")
} else {
  console.log("Dev. is Senior")
}

//forma normal de if else if
if (salario < 3000) {
  console.log("Dev. is Junior")
} else if (salario > 3000 && salario < 10000) {
  console.log("Dev. is Pleno")
} else {
  console.log("Dev. is Diretor")
}
