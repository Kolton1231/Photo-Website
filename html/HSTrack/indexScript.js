const navbarHome = document.getElementById('sidenavB1');
const navbarP1 = document.getElementById('sidenavB2');
const takeDownP = document.getElementById('takeDownB');
//Subpages
const navbarP1A = document.getElementById('sidenavB2A');
const navbarP1B = document.getElementById('sidenavB2B');
const navbarP1C = document.getElementById('sidenavB2C');
const navbarP1D = document.getElementById('sidenavB2D');
const navbarP1E = document.getElementById('sidenavB2E');
const navbarP1F = document.getElementById('sidenavB2F');
const navbarP1G = document.getElementById('sidenavB2G');
const navbarP1H = document.getElementById('sidenavB2H');


const navbarP2 = document.getElementById('sidenavB3');
const navbarP3 = document.getElementById('sidenavB4');
const sidebarButton = document.getElementById('closeOpenButton');

//condensed is for side bar buttons.
var condensedP1 = true;


//===========================================
sidebarHide();


//Side bar Buttons
    navbarHome.addEventListener("click", function(){
        window.location.href= "index.html";
    });
    navbarP1.addEventListener("click", function(){
        window.location.href= "crushCancer2026/page1.html";
    });
/*
    navbarP2.addEventListener("click", function(){
        window.location.href= "";
    });
    navbarP3.addEventListener("click", function(){
       window.location.href= "page3.html";
    });
*/



sidebarButton.addEventListener("click", function(){
    if(sidebar == 1){
        sidebarHide();
        sidebar = 0;
    } else {
        sidebarShow();
        sidebar = 1;
    }

});

function sidebarHide(){
    document.getElementById("mySidebar").style.width = "0em";
}
    
function sidebarShow(){
    document.getElementById("mySidebar").style.width = "10em";

}

takeDownP.addEventListener("click", function(){
    window.location.href= "../accountManagement/takeDown.php";
});