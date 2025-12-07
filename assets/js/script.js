// assets/js/script.js

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 1. Check if user has a saved preference
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleButton.innerHTML = "☀️"; // Show sun icon if dark
    }
}

// 2. Listen for click
toggleButton.addEventListener('click', () => {
    // Toggle the theme attribute
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleButton.innerHTML = "🌙"; // Switch to moon
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleButton.innerHTML = "☀️"; // Switch to sun
    }
});