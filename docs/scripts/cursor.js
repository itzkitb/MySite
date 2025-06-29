const cursor = document.querySelector('.cursor');
let mouseX = -100;
let mouseY = -100;
let cursorX = -100;
let cursorY = -100;
const factor = 0.15;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const target = document.elementFromPoint(e.clientX, e.clientY);
    const isInteractive = target?.matches('a, button, [role="button"]');
    cursor.classList.toggle('active', isInteractive);
});

const animate = () => {
    cursorX += (mouseX - cursorX) * factor;
    cursorY += (mouseY - cursorY) * factor;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(animate);
};

animate();