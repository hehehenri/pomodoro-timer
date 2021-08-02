const themesDiv = document.querySelector(".theme-menu");
const themeConfigs = getThemesConfigs();

createThemeButtons(themeConfigs, themeConfigs);


function getThemesConfigs() {
    const blackAndWhite = Array("white", "black", "black", "black", "black-and-white");
    const gruvboxTheme = Array("#282828", "#fb4934", "#83a598", "#fabd2f", "gruvbox");
    const nautilus = Array("#102c4e", "#eac004", "#1ae7ea", "#eac004", "nautilus");
    const sakura = Array("rgba(255,186,200,1)", "white", "white", "white", "sakura")
    
    return Array(blackAndWhite, gruvboxTheme, nautilus, sakura);
}

function createThemeButtons(themes, configs) {
    themes.forEach((theme, index) => {
        //console.log("div.theme-menu#"+theme[4])
        themeDiv = document.createElement("div");
        themeDiv.className = "theme-button";
        themeDiv.id = theme[4];
        themeDiv.addEventListener("click", ()=> {
            changePageColor(configs[index]);
        });
        themesDiv.appendChild(themeDiv);
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