// Simple Smooth Scroll & Dynamic Interactivity
document.addEventListener('DOMContentLoaded', () => {
    
    // Log message for testing
    console.log("Portfolio Loaded Successfully!");

    // Smooth Scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Mobile Menu Toggle Placeholder
    const menuToggle = document.getElementById('mobile-menu');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert("Mobile menu clicked - you can toggle nav visibility here!");
        });
    }
});