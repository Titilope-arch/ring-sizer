const adjustableCircle = document.querySelector('.adjustable-circle');
const sizeRange = document.getElementById('sizeRange');

sizeRange.addEventListener('input', (e) => {
    const diameter = parseFloat(e.target.value);
    updateRingSize(diameter);
});

function updateRingSize(diameter) {
    adjustableCircle.style.width = diameter + 'px';
    adjustableCircle.style.height = diameter + 'px';
}

updateRingSize(parseFloat(sizeRange.value));
