const counter = document.querySelector('#counter');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');

let count = localStorage.getItem('count');

counter.textContent = count;

addButton.addEventListener('click', function () {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem('count', count);
  }
});

subtractButton.addEventListener('click', function () {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem('count', count);
  }
});
