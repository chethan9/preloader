const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

// Create a container for the Lottie animation
const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    width: 100px; /* or any size you want */
    height: 100px; /* or any size you want */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Append the elements to the body
document.body.appendChild(overlay);
overlay.appendChild(lottieContainer); // Append Lottie container to the overlay

// Load and play the Lottie animation
var lottieAnimation = lottie.loadAnimation({
  container: lottieContainer, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://cdn.jsdelivr.net/gh/chethan9/preloader@main/lottie.json' // the path to the animation json
});

// Function to hide the overlay
function hideOverlay() {
    overlay.style.display = 'none';
    lottieAnimation.stop(); // Optional: Stop the Lottie animation when hiding the overlay
}

// Event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Replace with your actual loading code.
    setTimeout(hideOverlay, 100); // Simulate external JS file loading.
});

// Fallback: hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);
