const themesConfigs = getThemesConfigs();
const themeButtons = getThemeButtons();

changePageColorsWithButtonClick(themeButtons, themesConfigs);

function getThemesConfigs() {
    const blackAndWhite = Array("white", "black", "black", "black", "black");
    const gruvboxTheme = Array("#282828", "#fb4934", "#83a598", "#fabd2f", "#b8bb26");
    const nautilus = Array("#102c4e", "#eac004", "#1ae7ea", "#eac004", "#b8bb26");
    const sakura = Array("rgba(255,186,200,1)", "white", "white", "white")

    return Array(blackAndWhite, gruvboxTheme, nautilus, sakura);
}

function getThemeButtons() {
    const buttonsParentDiv = document.getElementsByClassName("theme-menu")[0].children;
    let themeDivs = Array();
    for(i=0; i<buttonsParentDiv.length; i++) {
        themeDivs.push(buttonsParentDiv[i]);
    }
    return themeDivs;
}

function changePageColorsWithButtonClick(buttons, configs) {
    buttons.forEach((button, index) => {
        button.addEventListener("click", ()=> {
            changePageColor(configs[index]);
        })
    });
}

function changePageColor(config) {
    const background = document.body;
    const titles = document.getElementsByClassName("title");
    const phrase = document.querySelector("#phrase");
    const time = document.querySelector("#time");
    const progressBar = document.querySelector("#bar");
    const controller = document.querySelector(".controller")

    background.style.backgroundColor = config[0];
    for (let title of titles) {
        title.style.color = config[1];
    }
    phrase.style.color = config[2];
    time.style.color = config[3];
    progressBar.style.backgroundColor = config[2];
    controller.style.color = config[2];
}