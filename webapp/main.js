document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');
    const resetButton = document.getElementById('reset');

    let count = 0;

    increaseButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    decreaseButton.addEventListener('click', () => {
        count--;
        updateCounter();
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        updateCounter();
    });

    function updateCounter() {
        counterElement.textContent = count;
    }
});
