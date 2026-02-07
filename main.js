// Scroll reveal
const reveals = document.querySelectorAll('.reveal');


const revealOnScroll = () => {
reveals.forEach(el => {
const top = el.getBoundingClientRect().top;
if (top < window.innerHeight - 100) {
el.classList.add('active');
}
});
};


window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// Dark mode toggle
const toggle = document.getElementById('themeToggle');
if (toggle) {
toggle.onclick = () => document.body.classList.toggle('dark');
}
