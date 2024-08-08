/*
  MAP - mapeia os valores de um array, 
        retornando um novo array com os valores mapeados.
    aceita três paramtros.
        item do array
        index do array
        array completo
*/

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(number)

const doubleNumber = number.map((item) => {
  const newValue = item * 2
  return newValue
})

console.log(doubleNumber)

const CatAllAtributArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newATributArray = CatAllAtributArray.map((item, index, array) => {
  console.log(item + " -> item do array")
  console.log(index + " -> index/position do array")
  console.log(array + " ->array completo original")
  return item * 2
})
console.log(newATributArray)
