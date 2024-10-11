// Access multiple elements using .querySelectorAll()
const divTags = document.querySelectorAll('div');
const pTags = document.querySelectorAll('p');
const imgEl = document.querySelectorAll('img');

// Access element by ID using .querySelector()
const changeP = document.querySelector('#change2');

// Sets first pTags to have a font-size of 40px
pTags[0].setAttribute('style', 'font-size: 40px;');

// Sets changeP to have multiple style attributes
changeP.setAttribute(
  'style',
  'font-size: 25px; font-weight: bold; text-decoration:underline; '
);

// Sets image source of the first image
imgEl[0].setAttribute('src', './assets/images/image_1.png');

// Adds size and width styling to image
imgEl[0].setAttribute('style', 'width:50%');

// Loops through divTags to set each one to have the color blue and the font size of 30px
for (let i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute('style', 'color:blue; font-size: 30px');
}
