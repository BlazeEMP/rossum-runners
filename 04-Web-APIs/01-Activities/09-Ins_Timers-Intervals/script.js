// Selects element by class
const timeEl = document.querySelector('.time');

// Selects element by id
const mainEl = document.getElementById('main');

const secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  const timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + ' seconds left till colorsplosion.';

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = ' ';
  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', 'images/image_1.jpg');
  mainEl.appendChild(imgEl);
}

setTime();
