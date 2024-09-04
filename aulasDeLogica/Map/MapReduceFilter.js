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

const newCompanies = (item) => {
  item.marketValue += item.marketValue * 0.1
  return item
}

// fazendo o filter em conjunto com o map
const filterCompany = (item) => item.foundedOn < 1990

// fazendo o reduce em conjunto com o filter
const reduceCompanyForValue = (acc, item) => acc + item.marketValue

// adicione 10% a cada empresa no array
const oldCompanies = companies
  .map(newCompanies)
  .filter(filterCompany)
  .reduce(reduceCompanyForValue, 0)

console.log(oldCompanies)
