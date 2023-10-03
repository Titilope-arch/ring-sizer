// script.js
const circle = document.getElementById("adjustable-ring");
const sizeSlider = document.getElementById("size-slider");
const ringSizeDisplay = document.getElementById("ring-size");

function updateCircleSize() {
    const newSize = sizeSlider.value;
    const diameter = newSize / 2;
    
    circle.style.width = newSize + "px";
    circle.style.height = newSize + "px";
    
    // Calculate ring size based on the circle's diameter (you can adjust the formula)
    const ringSize = diameter * 0.1; // Adjust this formula as needed
    
    ringSizeDisplay.textContent = ringSize.toFixed(2);
}

sizeSlider.addEventListener("input", updateCircleSize);
updateCircleSize(); // Initialize circle size and ring size display
