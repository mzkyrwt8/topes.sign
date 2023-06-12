const submitBtn = document.getElementById('submit-btn');
const nameInput = document.getElementById('name-input');
const message = document.getElementById('message');

submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    if (name === 'Hillel') {
        message.innerHTML = 'Hillel, you are fat!';
    } else {
        message.innerHTML = `Hello, ${name}!`;
    }
});