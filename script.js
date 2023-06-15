const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const cleanBtn = document.getElementById('clean-btn');
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementById('submit-btn');
const touchDiv = document.getElementById('touch-div');

canvas.width = 600;
canvas.height = 300;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    lastX = e.offsetX;
    lastY = e.offsetY;
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
/*
touchDiv.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.clientX - canvas.offsetLeft;
    const y = touch.clientY - canvas.offsetTop;
    const rect = canvas.getBoundingClientRect();
    const adjustedX = x - rect.left;
    const adjustedY = y - rect.top;
    if (adjustedX >= 0 && adjustedX <= canvas.width && adjustedY >= 0 && adjustedY <= canvas.height) {
        isDrawing = true;
        lastX = adjustedX;
        lastY = adjustedY;
    }
});

touchDiv.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.clientX - canvas.offsetLeft;
    const y = touch.clientY - canvas.offsetTop;
    const rect = canvas.getBoundingClientRect();
    const adjustedX = x - rect.left;
    const adjustedY = y - rect.top;
    if (isDrawing && adjustedX >= 0 && adjustedX <= canvas.width && adjustedY >= 0 && adjustedY <= canvas.height) {
        draw({ offsetX: adjustedX, offsetY: adjustedY });
    }
});

touchDiv.addEventListener('touchend', () => {
    isDrawing = false;
});
*/
cleanBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    nameInput.value = '';
});

submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    if (name === '') {
        alert('Please enter your name.');
    } else if (name.toLowerCase() === 'hillel') {
        alert('Hello, my love!');
    } else {
        alert(`Hello, ${name}!`);
    }
});