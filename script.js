//your JS code here. If required.
// ✅ Initial rotation angle
let angle = 0;

// ✅ Function to rotate the line
function rotateLine() {
    const line = document.getElementById('line');
    
    // Increase the rotation angle by 2 degrees
    angle += 2;
    
    // Apply rotation using CSS transform
    line.style.transform = `rotate(${angle}deg)`;
}

// ✅ Rotate the line every 20 milliseconds
setInterval(rotateLine, 20);
