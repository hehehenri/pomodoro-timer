const themeButton = document.querySelector("footer .container");
const themeMenu = document.querySelector(".theme-container");

themeButton.addEventListener("click", () => {
    toggleThemesMenuDisplay(themeMenu);
})