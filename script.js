<script>
    // Dark Mode Toggle
    const toggle = document.getElementById('themeToggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    });

    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('menu');
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu-open');
    });
</script>
