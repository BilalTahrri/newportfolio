
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Unobserve the element to prevent further intersection events
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const text = document.querySelectorAll(".sec-text");


const textload = () => {
    setTimeout(() => {
        text.textContent = "web developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "UX";
    }, 4000);
    setTimeout(() => {
        text.textContent = "UI";
    }, 8000);
}
textload();


const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

function toggleMenu() {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

menu.onclick = toggleMenu;

window.onclick = (event) => {
    if (!event.target.matches('#menu-icon')) {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    }
};









