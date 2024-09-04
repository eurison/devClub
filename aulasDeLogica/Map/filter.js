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
console.log("forma comum do filter", newList)

// forma comum de fazermos o filter usando IF e a condição ('OU' ||) e (&& logico).
const newList3 = list.filter((item) => {
  if (item >= 100 || item % 2 === 0) {
    return true
  } else {
    return false
  }
})
console.log("forma comum do filter com IF e OU", newList3)

// forma reduzida de fazermos o filter
const list2 = [13, 20, 354, 4, 995, 776, 79, 800, 9, 100]
const newList2 = list2.filter((item) => item < 100)
console.log("forma reduzida do filter", newList2)

// exercise do filter
const companies = [
  { name: "Company One", marketValue: 50, CEO: "John doe", foundedOn: 2003 },
  { name: "Company Two", marketValue: 50, CEO: "John doe", foundedOn: 2008 },
  { name: "Company Three", marketValue: 60, CEO: "John doe", foundedOn: 2007 },
  { name: "Company Four", marketValue: 70, CEO: "John doe", foundedOn: 2010 },
  { name: "Company Five", marketValue: 30, CEO: "John doe", foundedOn: 2016 },
  { name: "Company Six", marketValue: 90, CEO: "John doe", foundedOn: 2010 },
  { name: "Company Seven", marketValue: 30, CEO: "John doe", foundedOn: 1996 },
  { name: "Company Eight", marketValue: 10, CEO: "John doe", foundedOn: 2016 },
  { name: "Company Nine", marketValue: 70, CEO: "John doe", foundedOn: 1989 },
]

const newListCompany = companies.filter((item) => {
  if (item.marketValue < 100 && item.marketValue < 50) {
    return true
  } else {
    return false
  }
})

console.log("exercise do filter", newListCompany)
