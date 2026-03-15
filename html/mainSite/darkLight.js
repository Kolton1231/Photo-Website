const darkButton = document.getElementById("darkLightButton");
const themeLink = document.getElementById('theme-link');


var colorMode = 1;
var sidebar = 1;
//starting script to get background and such.
document.addEventListener("DOMContentLoaded", function(){
    colorMode = localStorage.getItem("darkOrLight");
    console.log(colorMode);
    
//This is if the page is loaded for the first time.
if(colorMode == null){
    colorMode = 1;
    console.log("colorMode was null, set to 1.");

    
    if(colorMode == 0){
        themeLink.setAttribute('href', 'lightMode.css');
        darkButton.innerHTML = "Dark Mode";
        console.log("dark");
        colorMode = 0;
    } else if(colorMode == 1) {
        themeLink.setAttribute('href', 'darkMode.css');
        darkButton.innerHTML = "Light Mode";
        console.log("light");
        colorMode = 1;
    }
}
});

//1 = dark, 0 = light.

darkButton.addEventListener("click", function(){
    if(pageArea == 0){
        darkLightMode();
    } else if(pageArea == 1) {
        darkLightMode1();
    }
});

function darkLightMode(){
    if(colorMode == 1){
        themeLink.setAttribute('href', 'lightMode.css');
        darkButton.innerHTML = "Dark Mode";
        console.log("dark");
        colorMode = 0;
    } else if(colorMode == 0) {
        themeLink.setAttribute('href', 'darkMode.css');
        darkButton.innerHTML = "Light Mode";
        console.log("light");
        colorMode = 1;
    }
    localStorage.setItem("darkOrLight",colorMode);
}

function darkLightMode1(){
    if(colorMode == 1){
        themeLink.setAttribute('href', '../lightMode.css');
        darkButton.innerHTML = "Dark Mode";
        console.log("dark");
        colorMode = 0;
    } else if(colorMode == 0) {
        themeLink.setAttribute('href', '../darkMode.css');
        darkButton.innerHTML = "Light Mode";
        console.log("light");
        colorMode = 1;
    }
    localStorage.setItem("darkOrLight",colorMode);
}
