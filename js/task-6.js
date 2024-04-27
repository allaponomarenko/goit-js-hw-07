document.addEventListener('DOMContentLoaded', function() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  function createBoxes() {
    const input = document.querySelector('#controls input[type="number"]');
    const amount = Number(input.value);
    if (amount < 1 || amount > 100) {
      console.warn('The number of boxes should be between 1 and 100. Input was:', amount);
      return;
    }

    console.log(`Creating ${amount} boxes...`);
    destroyBoxes();
    const boxesContainer = document.getElementById('boxes');
    let currentSize = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${currentSize}px`;
      box.style.height = `${currentSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      currentSize += 10;
      console.log(`Box ${i + 1}: ${currentSize - 10}px square, color: ${box.style.backgroundColor}`);
    }

    input.value = '';
    console.log('Finished creating boxes. Input cleared.');
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    console.log('Destroying all boxes...');
    boxesContainer.innerHTML = '';
    console.log('All boxes have been destroyed.');
  }

  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');

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
