function selectColor(event) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
  
    const clickedColor = event.target;
    clickedColor.classList.add('selected');
  }
  
  function fillPixel(event) {
    const selectedColor = document.querySelector('.selected');
    const pixel = event.target;
  
    if (pixel.classList.contains('pixel')) {
      pixel.style.backgroundColor = selectedColor.style.backgroundColor;
    }
  }
  
  function clearBoard() {
    const pixels = document.querySelectorAll('.pixel');
    let i;
  
    for (i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  }
  
  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function fillRandomColors() {
    const colors = document.querySelectorAll('.color');
    let i;
    let colorValue;
  
    for (i = 0; i < colors.length; i += 1) {
      if (i !== 0) {
        const randomColor = generateRandomColor();
        colorValue = randomColor;
        colors[i].style.backgroundColor = colorValue;
      }
    }
  }
  
  function generatePixelBoard(boardSize) {
    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.innerHTML = '';
  
    for (let i = 0; i < boardSize; i += 1) {
      for (let j = 0; j < boardSize; j += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixelBoard.appendChild(pixel);
      }
    }
    pixelBoard.style.gridTemplateColumns = `repeat(${boardSize}, 40px)`;
    pixelBoard.style.gridTemplateRows = `repeat(${boardSize}, 40px)`;
    clearBoard();
  }
  
  document.getElementById('color-palette').addEventListener('click', selectColor);
  document.getElementById('pixel-board').addEventListener('click', fillPixel);
  document.getElementById('clear-board').addEventListener('click', clearBoard);
  document.getElementById('generate-board').addEventListener('click', () => {
    const boardSizeInput = document.getElementById('board-size');
    let boardSize = parseInt(boardSizeInput.value, 10);
    if (!boardSize) {
      alert('Invalid board size! Minimum size is 5.');
      return;
    }
    if (boardSize < 5) {
      alert('Invalid board size! Minimum size is 5.');
      return;
    }
    if (boardSize > 50) {
      alert('Maximum board size is 50. Reducing to 50.');
      boardSize = 50;
    }
  
    generatePixelBoard(boardSize);
  });
  
  fillRandomColors();
  generatePixelBoard(5);
  