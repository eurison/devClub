/* - FOR 
  1) INICIALIZAÇÃO - criar a variável e colocar um valor inicial para ela
  2) CONDIÇÃO - enquanto for true, o laço vai rodar
  3) EXPRESSÃO FINAL - ira ocorrer a cada vez que o laço for executado por completo.

  for (inicialização; condição; expressão final) {
    seu código aqui...
  }
*/

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

const names = [
  "João",
  "Maria",
  "Antônio",
  "Margarida",
  "Joaquim",
  "Jorge",
  "Ana",
]

for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}
