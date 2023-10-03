const slider = document.querySelector('.slider');
const circle = document.querySelector('.circle');
const sizeIndicator = document.querySelector('.size-indicator');

const sizeInCm = 5.5; // Initial ring size in cm
let ringSize = 6; // Initial ring size

slider.addEventListener('input', () => {
    const position = parseInt(slider.value);
    ringSize = Math.round(sizeInCm + (position / 10));
    sizeIndicator.textContent = `Ring Size: ${ringSize}`;
    
    // Add or remove CSS classes to style elements
    if (position > 0) {
        circle.classList.add('active-circle');
        slider.classList.add('active-slider');
    } else {
        circle.classList.remove('active-circle');
        slider.classList.remove('active-slider');
    }
});
