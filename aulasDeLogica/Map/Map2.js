/*
  MAP - mapeia os valores de um array, 
        retornando um novo array com os valores mapeados.
    aceita três paramtros.
        item do array
        index do array
        array completo
*/

const list = [
  { name: "João", vip: true },
  { name: "Maria", vip: false },
  { name: "Antônio", vip: true },
  { name: "Margarida", vip: false },
  { name: "Joaquim", vip: true },
  { name: "Jorge", vip: false },
  { name: "Ana", vip: true },
]

const listVip = list.map((item) => {
  const newValue = {
    name: item.name,
    bracelet: item.vip === true ? "VIP" : "Não VIP",
  }
  return newValue
})

console.log(listVip)

const students = [
  { name: "João", testGrade: 10 },
  { name: "Maria", testGrade: 5 },
  { name: "Antônio", testGrade: 10 },
  { name: "Margarida", testGrade: 7 },
  { name: "Joaquim", testGrade: 10 },
  { name: "Jorge", testGrade: 8 },
  { name: "Ana", testGrade: 4 },
]

const studentsGrade = students.map((item) => {
  console.log("aprovados", item)
  const aprovadosDoAno = {
    name: item.name,
    statusAluno: item.testGrade >= 7 ? "Aprovado" : "Reprovado",
  }
  return aprovadosDoAno
})
console.log(studentsGrade)
