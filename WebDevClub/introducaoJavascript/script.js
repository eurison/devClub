// const input = document.getElementById('main-input');
// console.log(input.placeholder);

const element = document.querySelector('.text');
console.log(element.textContent); // so html
console.log(element.innerText); // leva em conta o css
console.log(element.innerHTML); // trás tudo


const input = document.querySelector('#main-input');

function handleClickButton() {
  alert(input.value);
}

const handleKeyPress = () => {
  console.log('digitei no input');
}