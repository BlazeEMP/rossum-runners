const body = document.body;
const h1El = document.createElement('h1');
const infoEl = document.createElement('div');
const imgEl = document.createElement('img');
const kittenEl = document.createElement('div');
const nameEl = document.createElement('div');
const favoriteEl = document.createElement('div');
// Create ordered list element
const listEl = document.createElement('ol');
// Create ordered list items
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

h1El.textContent = 'Welcome to my page';
kittenEl.textContent = 'This is my kitten 🐱.';
nameEl.textContent = 'His name is Jax.';
favoriteEl.textContent = 'My favorite foods are:';

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list
favoriteEl.appendChild(listEl);

h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', '../images/kitten.jpg');
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');
favoriteEl.setAttribute('style', 'font-size:20px;');

// TODO: Add ordered list items containing four favorite foods
