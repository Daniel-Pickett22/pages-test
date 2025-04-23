document.addEventListener('DOMContentLoaded', function() {
    const petFace = document.getElementById('petFace');
    const moodText = document.getElementById('moodText');
    const feedBtn = document.getElementById('feedBtn');
    const playBtn = document.getElementById('playBtn');
    const napBtn = document.getElementById('napBtn');
    let resetTimer;

    feedBtn.addEventListener('click', function() {
        clearTimeout(resetTimer);
        petFace.textContent = ':)'
        moodText.textContent = 'Happy'
        resetTimer = setTimeout(() => {
            petFace.textContent = ':|'
            moodText.textContent = 'Normal'
        }, 5000);
    });
    playBtn.addEventListener('click', function() {
        clearTimeout(resetTimer);
        petFace.textContent = ':D'
        moodText.textContent = 'Excited'
        resetTimer = setTimeout(() => {
            petFace.textContent = ':|'
            moodText.textContent = 'Normal'
        }, 5000);
    });
    napBtn.addEventListener('click', function() {
        clearTimeout(resetTimer);
        petFace.textContent = '-_-'
        moodText.textContent = 'Sleepy'
        resetTimer = setTimeout(() => {
            petFace.textContent = ':|'
            moodText.textContent = 'Normal'
        }, 5000);
    });
});
