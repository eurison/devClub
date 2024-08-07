function syMyName(name) {
  // arrow function antiga e ainda usada
  return name
}
console.log(syMyName("test"))

const syMyName2 = (name) => {
  // arrow function com return
  return name
}

console.log(syMyName2("test2"))

const syMyName3 = (name) => name // nao precisa usar o return e nem os parenteses
console.log(syMyName3("test3"))
