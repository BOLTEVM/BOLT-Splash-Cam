document.addEventListener('DOMContentLoaded', () => {
    const sceneEl = document.querySelector('a-scene');
    const videoEl = document.querySelector('#boltVideo');
    const scanningOverlay = document.querySelector('#scanning-overlay');
    const infoCard = document.querySelector('#info-card');

    // Register Click/Tap Handler Component
    AFRAME.registerComponent('link-handler', {
        schema: {
            url: { type: 'string' }
        },
        init: function () {
            this.el.addEventListener('click', () => {
                window.open(this.data.url, '_blank');
            });
            // Also handle touch events specifically for mobile reliability
            this.el.addEventListener('touchstart', () => {
                window.open(this.data.url, '_blank');
            });
        }
    });

    // Handle AR Target Events
    sceneEl.addEventListener('targetFound', event => {
        console.log("Target Found");
        videoEl.play();
        scanningOverlay.style.display = 'none';
        infoCard.classList.add('visible');
    });

    sceneEl.addEventListener('targetLost', event => {
        console.log("Target Lost");
        videoEl.pause();
        scanningOverlay.style.display = 'flex';
        infoCard.classList.remove('visible');
    });

    // Ensure video is looped manually if the attribute fails on some browsers
    videoEl.addEventListener('ended', () => {
        videoEl.currentTime = 0;
        videoEl.play();
    }, false);

    // Initial click/touch to unlock audio/video (mobile requirement)
    document.body.addEventListener('click', () => {
        if (videoEl.paused) {
            videoEl.play().then(() => videoEl.pause());
        }
    }, { once: true });
});
