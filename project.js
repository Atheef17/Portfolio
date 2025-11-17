const vdoBox = document.getElementById('vdoBox');
const mainVideo = document.getElementById('mainVideo');
const viewButtons = document.querySelectorAll('.card button');
const closeButton = document.getElementById('closeVdo'); 
const redbg = document.getElementById('red-overlay');

function showVideo(event) {
    event.preventDefault();
    const card = event.target.closest('.card');
    const imageElement = card.querySelector('.image');
    const videoSource = imageElement.getAttribute('data-video');

    
    mainVideo.querySelector('source').src = videoSource;

    
    mainVideo.load();
    mainVideo.play();

    
    vdoBox.style.display = 'block';
    redbg.style.display = 'block';
}


function hideVideo() {
    
    mainVideo.pause();
    
    vdoBox.style.display = 'none';
    redbg.style.display = 'none';
}

// Attach the click event listener to each "View" button
viewButtons.forEach(button => {
    button.addEventListener('click', showVideo);
});

// Attach the click event listener to the close button
closeButton.addEventListener('click', hideVideo);



