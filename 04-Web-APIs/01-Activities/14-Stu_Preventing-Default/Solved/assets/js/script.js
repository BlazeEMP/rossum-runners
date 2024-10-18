const tipEl = document.querySelector('#tip-percentage');
const totalEl = document.querySelector('#total');
const submitEl = document.querySelector('#submit');

function calculateTip(total, tipPercentage) {
  const roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  // Prevent default action
  event.preventDefault();
  // Store tip and total calculations in variables
  const tipPercentage = tipEl.value * 0.01;
  const total = totalEl.value;
  const tipAmount = calculateTip(total, tipPercentage);
  const newTotal = calculateTotal(tipAmount, total);
  // Update HTML with tip and total
  document.querySelector('#tip-amount').textContent = tipAmount;
  // Use toFixed() to limit to two decimal places
  document.querySelector('#new-total').textContent = newTotal.toFixed(2);
}

// Add listener to submit element
submitEl.addEventListener('click', addTip);
