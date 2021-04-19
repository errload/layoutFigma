// open menu
const open = document.querySelector(".header__mobileOpen__wrapper");
// clos menu
const close = document.querySelector(".header__mobileClose__wrapper");
// scroll menu
let hiddenLinks = document.querySelectorAll(".nav__hidden__link");

open.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);

// open menu
function openMenu() {
    document.querySelector(".mobileNav__hidden__wrapper").style.display = "block";
    document.querySelector(".header__mobileClose__wrapper").style.display = "block";
    document.body.style.overflow = "hidden";
}

// clos menu
function closeMenu() {
    document.querySelector(".mobileNav__hidden__wrapper").style.display = "none";
    document.querySelector(".header__mobileClose__wrapper").style.display = "none";
    document.body.style.overflow = "auto";
}

// scroll menu
hiddenLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const section = document.querySelector(`#${link.dataset.target}`);
        section.scrollIntoView({behavior: "smooth"});

        closeMenu();
    });
});