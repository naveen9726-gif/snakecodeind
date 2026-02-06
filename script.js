const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
const frameCount = 151;
const images = [];
const imagePath = (index) => `assets/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Load images
let imagesLoaded = 0;
for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = imagePath(i);
    img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === 1) {
            render(0); // Render first frame immediately
        }
        if (imagesLoaded === frameCount) {
            startAnimation();
        }
    };
    img.onerror = () => {
        console.error(`Failed to load image: ${img.src}`);
    };
    images.push(img);
}

// Animation state
const animationState = {
    frame: 0,
    maxFrame: frameCount - 1,
    speed: 0.5 // Standard playback speed
};

function render(index) {
    if (index >= 0 && index < images.length && images[index]) {
        const img = images[index];

        // Scale image to cover canvas (like object-fit: cover)
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

        // Add a dark overlay to ensure text readability if needed, 
        // though CSS overlay handles this mostly.
    }
}

function startAnimation() {
    // We can loop the animation or play it through specific sections.
    // For a smooth background, let's loop it at a reasonable framerate.

    let lastTime = 0;
    const fps = 24;
    const interval = 1000 / fps;

    function animate(currentTime) {
        if (currentTime - lastTime > interval) {
            animationState.frame = (animationState.frame + 1) % frameCount;
            render(animationState.frame);
            lastTime = currentTime;
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

// Nav Card Hover Effect (Glow follows mouse)
const cards = document.querySelectorAll('.feature-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});
