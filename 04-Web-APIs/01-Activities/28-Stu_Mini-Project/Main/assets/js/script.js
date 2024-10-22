// ? Grab all the references to the DOM elements
const moodBoardEl = document.querySelector('#mood-board');
const addImageBtn = document.querySelector('#add-image');
const imageUrlInput = document.querySelector('#image-url');
const addTextBtn = document.querySelector('#add-text');
const textInput = document.querySelector('#text-input');
const clearBtn = document.querySelector('#clear-all');

// ? We need to keep track of the elements that are added to the mood board and their positions
let tempStorageObject = {
  images: [],
  text: [],
};

// ? We need to keep track of the current element that is being dragged
let currentElement = null;

// ? We create an event listener for the clear button. This will clear the mood board and the local storage.
clearBtn.addEventListener('click', function () {
  localStorage.clear();
  window.location.reload();
});

// ? Function to update local storage. This function will be called after a new element is added to the mood board and the tempStorageObject is updated.
function updateLocalStorage() {
  localStorage.setItem('moodBoardData', JSON.stringify(tempStorageObject));
}

// ? Function to load from local storage. This function will be called on page load.
function loadFromLocalStorage() {
  const storedData = JSON.parse(localStorage.getItem('moodBoardData'));
  if (storedData) {
    tempStorageObject = storedData;

    // Paint the stored images on mood board
    for (let i = 0; i < tempStorageObject.images.length; i++) {
      const image = tempStorageObject.images[i];
      const img = document.createElement("img");
      img.src = image.url;
      img.style.left = image.left;
      img.style.top = image.top;
      img.classList.add("draggable");
      moodBoardEl.appendChild(img);
    }

    // Paint the stored text on mood board
    for (let i = 0; i < tempStorageObject.text.length; i++) {
      const textItem = tempStorageObject.text[i];
      const textDiv = document.createElement("div");
      textDiv.textContent = textItem.text;
      textDiv.style.left = textItem.left;
      textDiv.style.top = textItem.top;
      textDiv.classList.add("text-item", "draggable");
      moodBoardEl.appendChild(textDiv);
    }
  }
}

//  ? We create an event listener for the image URL input field. This will create an image element and attach it to the mood board with the URL provided by the user.
addImageBtn.addEventListener('click', function () {
  const imageUrl = imageUrlInput.value;
  if (imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('draggable');
    document.body.appendChild(img);

    // ? We set the current element to the img element so that we can update the position of the element when the mouse is moved.
    currentElement = img;

    // ? We attach the mouse move event listener to the document and the mood board div so that the element can be dragged anywhere on the screen and dropped only on the mood board div.
    attachMouseListeners();
  }
});

// ? We create an event listener for the text input field. This will create a div element and attach it to the mood board with the text provided by the user.
addTextBtn.addEventListener('click', function () {
  const text = textInput.value;
  if (text) {
    const textDiv = document.createElement('div');
    textDiv.classList.add('text-item', 'draggable');
    textDiv.textContent = text;
    document.body.appendChild(textDiv);

    // ? We set the current element to the text div so that we can update the position of the element when the mouse is moved.
    currentElement = textDiv;

    // ? We attach the mouse move event listener to the document and the click listener to the mood board div so that the element can be dragged anywhere on the screen, but dropped only on the mood board div.
    attachMouseListeners();
  }
});

function attachMouseListeners() {
  document.addEventListener('mousemove', mouseMoveHandler);
  moodBoardEl.addEventListener('click', placeElementClickHandler);
}

// ? This is the event handler for the mouse move event. This will be called whenever the mouse is moved on the screen.
// ? We check if the current element is set. If it is set, we update the position of the element to the mouse position.
function mouseMoveHandler(event) {
  if (currentElement) {
    currentElement.style.left = event.clientX + 'px';
    currentElement.style.top = event.clientY + 'px';
  }
}

// ? This is the event handler for the click event on the mood board. This will be called whenever the user clicks on the mood board.
// ? We check if the current element is set. If it is set, we attach the element to the mood board and reset the current element.
// ? When we click, we find the position of the mouse relative to the mood board and update the position of the element to 'place' it on the mood board.
function placeElementClickHandler(event) {
  if (currentElement) {
    // ? getBoundingClientRect() returns the size of an element and its position relative to the viewport (browser window) in pixels.
    const moodBoardRect = moodBoardEl.getBoundingClientRect();

    // ? Calculate the position so that the top left corner of the element aligns with the mouse click position
    const left = `${event.clientX - moodBoardRect.left}px`;
    const top = `${event.clientY - moodBoardRect.top}px`;

    // ? Set the position of the element based on the calculated position above.
    currentElement.style.left = left;
    currentElement.style.top = top;

    // ? Remove the draggable class so that the element is no longer draggable.
    currentElement.classList.remove('draggable');

    // ? Append the element to the mood board with the already calculated position.
    moodBoardEl.appendChild(currentElement);

    // ? Save to the temp storage variable based on the type of element
    if (currentElement.tagName === 'IMG') {
      // ? Push the image object to the tempStorageObject images property/array
      tempStorageObject.images.push({
        url: currentElement.src,
        left: left,
        top: top,
      });
    } else {
      // ? Push the text object to the tempStorageObject text property/array
      tempStorageObject.text.push({
        text: currentElement.textContent,
        left: left,
        top: top,
      });
    }

    // Update local storage with the new tempStorageObject information
    updateLocalStorage();

    // Reset current element
    currentElement = null;

    // Clear inputs
    imageUrlInput.value = '';
    textInput.value = '';

    // ? Remove event listeners for mouse move, so that the element is no longer draggable
    document.removeEventListener('mousemove', mouseMoveHandler);
  }
}

// ? Load existing data from local storage on page load
window.onload = loadFromLocalStorage;
