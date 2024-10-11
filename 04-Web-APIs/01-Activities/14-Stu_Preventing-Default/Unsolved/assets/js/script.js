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
  const tipPercentage = tipEl.value * 0.01;
  const total = totalEl.value;
  const tipAmount = calculateTip(total, tipPercentage);
  const newTotal = calculateTotal(tipAmount, total);
  document.querySelector('#tip-amount').textContent = tipAmount;
  document.querySelector('#new-total').textContent = newTotal.toFixed(2);
}

submitEl.addEventListener('click', addTip);
