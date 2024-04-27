document.addEventListener('DOMContentLoaded', function() {
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const input = document.querySelector('#controls input[type="number"]');
  const boxesContainer = document.getElementById('boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  function createBoxes() {
    const amount = Number(input.value);
    if (amount < 1 || amount > 100) {
      console.warn('The number of boxes should be between 1 and 100. Input was:', amount);
      return;
    }

    destroyBoxes();
    let currentSize = 30;
    let markup = '';

    for (let i = 0; i < amount; i++) {
      markup += `<div style="width: ${currentSize}px; height: ${currentSize}px; background-color: ${getRandomHexColor()};"></div>`;
      currentSize += 10;
    }

    boxesContainer.innerHTML = markup;
    input.value = '';
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  createButton.addEventListener('click', createBoxes);
  destroyButton.addEventListener('click', destroyBoxes);
});









document.addEventListener('DOMContentLoaded', function() {
  var inputElement = document.querySelector('#controls input[type="number"]');
  inputElement.classList.add('controls-input-number');
});


document.addEventListener('DOMContentLoaded', function() {
  const createButton = document.querySelector('button[data-create]');
  createButton.classList.add('create-button-class');


  const destroyButton = document.querySelector('button[data-destroy]');
  destroyButton.classList.add('destroy-button-class');
});
