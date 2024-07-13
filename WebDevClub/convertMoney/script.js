document.addEventListener('DOMContentLoaded', (event) => {
  const convertButton = document.querySelector('.convert-button');
  const currencySelect = document.querySelector('.currency-select');

  function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector('.input-currency').value.replace(/\./g, '').replace(',', '.'));
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
    const currencyValueConverted = document.querySelector('.currency-value');

    if (isNaN(inputCurrencyValue)) {
      alert("Please enter a valid number");
      return;
    }

    const dollarToDay = 5.15;
    const euroToDay = 6.25;
    const bitcoinToDay = 10.80;
    const libraToDay = 7.12;
    let convertedValue;

    if (currencySelect.value === 'dollar') {
      convertedValue = inputCurrencyValue / dollarToDay;
      currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(convertedValue);
    } else if (currencySelect.value === 'euro') {
      convertedValue = inputCurrencyValue / euroToDay;
      currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
      }).format(convertedValue);
    } else if (currencySelect.value === 'bitcoin') {
      convertedValue = inputCurrencyValue / bitcoinToDay;
      currencyValueConverted.innerHTML = `${convertedValue.toFixed(8)} ₿`;
    } else if (currencySelect.value === 'real') {
      convertedValue = inputCurrencyValue;
      currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(convertedValue);
    } else if (currencySelect.value === 'libra') {
      convertedValue = inputCurrencyValue / libraToDay;
      currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
      }).format(convertedValue);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(inputCurrencyValue);
  }

  function currencyChange() {
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.querySelector('.currency-img');
    if (currencySelect.value === 'dollar') {
      currencyName.innerHTML = 'Dollar';
      currencyImg.src = './assets/eua.png';
    } else if (currencySelect.value === 'euro') {
      currencyName.innerHTML = 'Euro';
      currencyImg.src = './assets/euro.png';
    } else if (currencySelect.value === 'bitcoin') {
      currencyName.innerHTML = 'Bitcoin';
      currencyImg.src = './assets/bitcoin.png';
    } else if (currencySelect.value === 'libra') {
      currencyName.innerHTML = 'Libra';
      currencyImg.src = './assets/libra.png';
    } else if (currencySelect.value === 'real') {
      currencyName.innerHTML = 'Real';
      currencyImg.src = './assets/real.png';
    }

    convertValues();
  }

  currencySelect.addEventListener('change', currencyChange);
  convertButton.addEventListener('click', convertValues);
});
