function toggleThemesMenuDisplay(themeMenu) {
    if(themeMenu.style.display != "flex") {
        themeMenu.style.display = "flex";
        return;
    }
    themeMenu.style.display = "none";
    return;
}