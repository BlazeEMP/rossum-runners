const submitEl = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submissionResponseEl = document.querySelector('#response');

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  const response =
    'Thank you for your submission ' +
    nameInput.value +
    '! We will reach out to you at ' +
    emailInput.value +
    '.';
  submissionResponseEl.textContent = response;
}

// Add listener to submit element
submitEl.addEventListener('click', showResponse);
