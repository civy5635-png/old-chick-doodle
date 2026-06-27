document.addEventListener("DOMContentLoaded", function () {

    // Restore saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    const menuButton = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (menuButton && sidebar) {
        menuButton.addEventListener("click", function () {
            sidebar.classList.toggle("nav-open");
        });
    }

});

const lightMode = document.querySelector("#lightMode");
const darkMode = document.querySelector("#darkMode");
const smallFont = document.querySelector("#smallFont");
const mediumFont = document.querySelector("#mediumFont");
const largeFont = document.querySelector("#largeFont");

if (lightMode) {
    lightMode.addEventListener("click", function () {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    });
}

if (darkMode) {
    darkMode.addEventListener("click", function () {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    });
}

if (smallFont) {
    smallFont.addEventListener("click", function () {
        document.body.classList.remove("font-medium", "font-large");
        document.body.classList.add("font-small");
    });
}

if (mediumFont) {
    mediumFont.addEventListener("click", function () {
        document.body.classList.remove("font-small", "font-large");
        document.body.classList.add("font-medium");
    });
}

if (largeFont) {
    largeFont.addEventListener("click", function () {
        document.body.classList.remove("font-small", "font-medium");
        document.body.classList.add("font-large");
    });
}
const collapseButtons = document.querySelectorAll(".collapse-button");

collapseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const content = button.nextElementSibling;
        content.classList.toggle("open");
    });
});