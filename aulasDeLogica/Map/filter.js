/*
  Filter
   cria um novo array, a parti do array percorrido (array original)
   cria um novo array APENAS com os elementos escolhidos
   Aceita 3 parametros
   item do array
   index
   array completo

   return true => item atual passa para o novo array
   return false => item atual NAO passa para o novo array
*/

const list = [13, 20, 354, 4, 995, 776, 79, 800, 9, 100]

const newList = list.filter((item) => {
  if (item >= 100) {
    return true
  } else {
    return false
  }
})
console.log(newList)
