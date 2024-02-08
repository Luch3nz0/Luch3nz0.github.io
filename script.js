// scripts.js

// Example: Toggle comments
const commentsButton = document.querySelector('.comments-button');
const commentsSection = document.querySelector('.comments-section');

commentsButton.addEventListener('click', () => {
    commentsSection.classList.toggle('hidden');
});
