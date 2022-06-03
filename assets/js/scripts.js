var currrentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1;
    currrentNumberWrapper.innerHTML = currentNumber;
    verifica();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currrentNumberWrapper.innerHTML = currentNumber;
    verifica();
}

function reset() {
    currentNumber = 0
    currrentNumberWrapper.innerHTML = currentNumber;
    verifica()
}

function verifica() {
    if (currentNumber < 0) {
        currrentNumberWrapper.style.color = 'red';
    } else {
        currrentNumberWrapper.style.color = 'black';
    }
}