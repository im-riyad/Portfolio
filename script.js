// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Custom Cursor Follower
const cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Hover effect for links
const links = document.querySelectorAll('a, .project-card');
links.forEach(link => {
    link.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2)');
    link.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});
// Disable custom cursor on touch devices
if (window.matchMedia("(pointer: coarse)").matches) {
    document.querySelector('#cursor').style.display = 'none';
}
