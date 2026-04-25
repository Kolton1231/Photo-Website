const navbarHome = document.getElementById('sidenavB1');
const navbarP1 = document.getElementById('sidenavB2');
const navbarP2 = document.getElementById('sidenavB3');
const navbarP3 = document.getElementById('sidenavB4');
const navbarP4 = document.getElementById('sidenavB5');
const navbarP5 = document.getElementById('sidenavB6');
const navbarP6 = document.getElementById('sidenavB7');
const navbarP7 = document.getElementById('sidenavB8');
const navbarP8 = document.getElementById('sidenavB9');
const navbarP9 = document.getElementById('sidenavB10');
const navbarP10 = document.getElementById('sidenavB11');

const sidebarButton = document.getElementById('closeOpenButton');


//===========================================
sidebarShow();




//Side bar Buttons
    navbarHome.addEventListener("click", function(){
        window.location.href= "../index.html";
    });
    navbarP1.addEventListener("click", function(){
        window.location.href= "page1.html";
    });
    navbarP2.addEventListener("click", function(){
        window.location.href= "page2.html";
    });
    navbarP3.addEventListener("click", function(){
        window.location.href= "page3.html";
    });
    navbarP4.addEventListener("click", function(){
        window.location.href= "page4.html";
    });
    navbarP5.addEventListener("click", function(){
        window.location.href= "page5.html";
    });
    navbarP6.addEventListener("click", function(){
        window.location.href= "page6.html";
    });
    navbarP7.addEventListener("click", function(){
        window.location.href= "page7.html";
    });
    navbarP8.addEventListener("click", function(){
        window.location.href= "page8.html";
    });
    navbarP9.addEventListener("click", function(){
        window.location.href= "page9.html";
    });
    navbarP10.addEventListener("click", function(){
        window.location.href= "page10.html";
    });



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
    document.getElementById("mySidebar").style.width = "4em";

}