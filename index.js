//let input
let input;

function addingEventListener() {
  input = document.getElementById('input');
  
  input.addEventListener('change', inputChange);
}

function inputChange(event) {
  console.log('Input value changed:', event.target.value);
}