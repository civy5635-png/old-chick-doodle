document.addEventListener("DOMContentLoaded", function () {

    alert("JavaScript loaded");

    const menuButton = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (menuButton && sidebar) {
        menuButton.addEventListener("click", function () {

            alert("Hamburger clicked");

            sidebar.classList.toggle("nav-open");
        });
    }

});