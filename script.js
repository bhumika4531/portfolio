// Typing animation for header
const text = ["AI/ML Enthusiast", "Web Developer", "IoT Explorer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const display = document.querySelector("header p");

    if (index < text.length) {
        if (!isDeleting && charIndex <= text[index].length) {
            currentText = text[index].substring(0, charIndex);
            charIndex++;
        } else if (isDeleting && charIndex >= 0) {
            currentText = text[index].substring(0, charIndex);
            charIndex--;
        }

        display.innerText = currentText;

        if (charIndex === text[index].length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

        if (charIndex === 0 && isDeleting) {
            isDeleting = false;
            index = (index + 1) % text.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// Contact button message
function showMessage() {
    const msg = document.getElementById("msg");
    msg.innerText = "Thanks for visiting! Let's connect 🚀";

    // Fade effect
    msg.style.opacity = 0;
    setTimeout(() => {
        msg.style.opacity = 1;
    }, 100);
}


// Scroll animation (reveal sections)
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});


// Dark/Light mode toggle
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}