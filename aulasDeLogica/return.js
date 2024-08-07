// function getreturn(value1, value2) {
//   const result = value1 + value2
//   return result
// }
// const result = getreturn(8, 2)
// console.log(result + "result")

// criando calculadora com desconto de 10% para valores acima de 30 reais.

// const valores = [100, 200, 30, 45, 256, 789, 452, 334]

// function desconto() {
//   for (let i = 0; i < valores.length; i++) {
//     if (valores[i] > 30) {
//       console.log(valores[i] * 0.9)
//     }
//   }
// }
// desconto()

// fazendo a soma do array e tirando a porcentagem no final
const cart = [100, 200, 300]

let finalvalueWithDiscount = 0
let totalDiscount = 0
/*
  R$ 250,00 // 7%  -> R$ 17,5
  R$ 250 * 7 / 100 = 175,00
*/

//soma o valores do array
const totalWithoutDiscount = cart.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
)

console.log(totalWithoutDiscount) // 330

//calcula o desconto
function calculateDiscount(price, discount) {
  const result = (price * discount) / 100
  return result
}

cart.forEach((value) => {
  if (value > 30) {
    const result = calculateDiscount(value, 10)
    totalDiscount += result // retorna o valor do desconto
    finalvalueWithDiscount += finalvalueWithDiscount + (value - result)
  } else {
    finalvalueWithDiscount += value
  }
})
console.log(
  `Total com desconto: ${totalWithoutDiscount.toFixed(2)}` +
    "\n" +
    `Total sem desconto: ${finalvalueWithDiscount.toFixed(2)}` +
    "\n" +
    `Você economizou: R$ ${totalDiscount.toFixed(2)}`
) // 330.00 (`finalvalueWithDiscount.toFixed(2))
