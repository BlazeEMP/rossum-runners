// Get the `Red`, `Green`, and `Blue` sliders.
const redSlider = document.getElementById('red-slider');
const greenSlider = document.getElementById('green-slider');
const blueSlider = document.getElementById('blue-slider');

// Get the color box.
const colorBox = document.getElementById('color-box');

// Get the output elements.
const rgbOutput = document.getElementById('rgb-output');
const hexOutput = document.getElementById('hex-output');

const updateColor = function() {
  // Get the values for the `Red`, `Green`, and `Blue` sliders.
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  // Set the background color of the box based on the slider values.
  const color = `rgb(${red}, ${green}, ${blue})`;
  colorBox.style.backgroundColor = color;

  const hex = rgbToHex(red, green, blue);

  // Display the RGB value for the background color.
  rgbOutput.textContent = `RGB: ${red}, ${green}, ${blue}`;

  // Display the hex value for the background color.
  hexOutput.textContent = `Hex: ${hex}`;
};

const rgbToHex = function (r, g, b) {
  const componentToHex = (c) => {
      const hex = parseInt(c).toString(16);
      return hex.length == 1 ? '0' + hex : hex;
  };
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

// Call the updateColor function when any of the sliders are moved.
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Initial color update
updateColor();
