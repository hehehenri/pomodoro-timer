const themeButton = document.querySelector("footer .container h2");
const themeMenu = document.querySelector(".theme-container");

themeButton.addEventListener("click", () => {
    toggleThemesMenuDisplay(themeMenu);
})