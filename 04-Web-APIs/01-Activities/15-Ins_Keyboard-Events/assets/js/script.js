const typefaceEl = document.querySelector('#typeface');
const clearEl = document.querySelector('#clear');
const h1El = document.querySelector('#h1');
const h2El = document.querySelector('#h2');
const h3El = document.querySelector('#h3');
const pEl = document.querySelector('#p');
const textAreaEl = document.querySelector('#textarea');

const elements = [h1El, h2El, h3El, pEl];

let typeface;

// Change event
typefaceEl.addEventListener('change', function (event) {
  event.preventDefault();
  typeface = typefaceEl.value;
  document.querySelector('.container').style.fontFamily = typeface;
});

// Keydown event
textAreaEl.addEventListener('keydown', function (event) {
  // Access value of pressed key with key property
  const key = event.key.toLowerCase();
  const alphabetNumericCharacters =
    'abcdefghijklmnopqrstuvwxyz0123456789 '.split('');
  if (alphabetNumericCharacters.includes(key)) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

clearEl.addEventListener('click', function (event) {
  event.preventDefault();
  textAreaEl.value = '';

  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
});
