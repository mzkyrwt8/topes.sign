const submitBtn = document.getElementById('submit-btn');
const nameInput = document.getElementById('name-input');
const message = document.getElementById('message');

submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    message.innerHTML = `Hello, ${name}!`;
});