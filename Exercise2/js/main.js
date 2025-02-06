const colorDisplay = document.getElementById('result-color');
const changeColorButton = document.querySelector('button');

function getRandomHexColor() {
  const hexChars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
}

changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  colorDisplay.textContent = randomColor; 
  document.body.style.backgroundColor = randomColor; 
});