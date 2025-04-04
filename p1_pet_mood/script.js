document.addEventListener('DOMContentLoaded', function() {
    const petFace = document.getElementById('petFace');
    const moodText = document.getElementById('moodText');
    const feedBtn = document.getElementById('feedBtn');
    const playBtn = document.getElementById('playBtn');
    const napBtn = document.getElementById('napBtn');

    // Generate clothing suggestion based on temperature and rain status when button is clicked
    feedBtn.addEventListener('click', function() {
        petFace.textContent = ':)'
        moodText.textContent = 'Happy'
        setTimeout(() => {
            petFace.textContent = ':|'
            moodText.textContent = 'Normal'
        }, 5000);
    });
    playBtn.addEventListener('click', function() {
        petFace.textContent = ':D'
        moodText.textContent = 'Excited'
        setTimeout(() => {
            petFace.textContent = ':|'
            moodText.textContent = 'Normal'
        }, 5000);
    });
    napBtn.addEventListener('click', function() {
        petFace.textContent = '-_-'
        moodText.textContent = 'Sleepy'
        setTimeout(() => {
            petFace.textContent = ':|'
            moodText.textContent = 'Normal'
        }, 5000);
    });
});
