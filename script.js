// Dark Mode Toggle
const toggle = document.getElementById('themeToggle');
if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    });
}

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburgerBtn');
const menu = document.getElementById('menu');
if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu-open');
    });
}
