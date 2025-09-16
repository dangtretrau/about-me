document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    const muteToggle = document.getElementById('mute-toggle');
    const infoToggle = document.getElementById('info-toggle');
    const infoPanel = document.getElementById('info-panel');
    

    video.play().catch(error => {
        console.log("Autoplay failed:", error);
    });

    muteToggle.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            muteToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            video.muted = true;
            muteToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });

    infoToggle.addEventListener('click', () => {
        infoPanel.classList.toggle('visible');
    });
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            infoPanel.classList.remove('visible');
        }
    });
});