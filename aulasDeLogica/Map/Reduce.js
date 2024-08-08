/*
 * REDUCE - reduz os valores de um array para um unico valor
 * aceita 4 paramtros
 * acumulador
 * valor atual
 * index do array
 * array completo
 */

const list = [1, 2, 3, 4]

const sum = list.reduce((acumulador, valoAtual) => {
  console.log("acc ou acumulador", acumulador)
  console.log("valor atual", valoAtual)
  return acumulador + valoAtual
}, 0)

console.log(sum)

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

const marketValues = companies.reduce((acc, value) => {
  return acc + value.marketValue
}, 0)

console.log(marketValues)

const cartSupermarket = [
  { name: "arroz", price: 10, kg: 2 },
  { name: "feijão", price: 5, kg: 3 },
  { name: "carne", price: 20, kg: 1.9 },
  { name: "tomate", price: 5, kg: 2 },
  { name: "batata", price: 10, kg: 1.7 },
]

const totalForPrice = cartSupermarket.reduce((acc, value) => {
  const result = value.price * value.kg
  return acc + result
}, 0)
console.log(`preço total por cliente: R$ ${totalForPrice.toFixed(2)}`)

const cart = [
  { name: "iPhone", price: 10.0, quantity: 2 },
  { name: "ipad", price: 5.0, quantity: 3 },
  { name: "samsung", price: 2.0, quantity: 7 },
]

const total = cart.reduce((acc, value) => {
  const result = value.price * value.quantity
  return acc + result
}, 0)

console.log("total por item do cart:", total)
