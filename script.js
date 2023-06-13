const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const cleanBtn = document.getElementById('clean-btn');
const signature = document.getElementById('signature');
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementById('submit-btn');

canvas.width = 600;
canvas.height = 200;

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

canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    lastX = e.touches[0].clientX - canvas.offsetLeft;
    lastY = e.touches[0].clientY - canvas.offsetTop;
});

canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', () => isDrawing = false);

cleanBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    signature.innerHTML = '';
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