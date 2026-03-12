document.addEventListener('DOMContentLoaded', () => {
    // Create the Lightbox container elements dynamically
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    const catalogItems = document.querySelectorAll('.item-card');

    catalogItems.forEach(item => {
        item.addEventListener('click', () => {
            // Show the lightbox
            lightbox.classList.add('active');
            
            // Create the image element for the pop-up
            const img = document.createElement('img');
            
            // Get the image source from the clicked card
            const itemImg = item.querySelector('img');
            if (itemImg) {
                img.src = itemImg.src;
            }

            // Remove any old images and add the new one
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    // Close the lightbox when the background is clicked
    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    });
});
