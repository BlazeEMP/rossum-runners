let count = 0;
//  Select increment and decrement button elements
const incrementEl = document.querySelector('#increment');
const decrementEl = document.querySelector('#decrement');
const countEl = document.querySelector('#count');

// Updates count on page
function setCounterText() {
  countEl.textContent = count;
}
// Attach event listener to increment button element
incrementEl.addEventListener('click', function () {
  count++;
  setCounterText();
});

// Attach event listener to decrement button element
decrementEl.addEventListener('click', function () {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});
