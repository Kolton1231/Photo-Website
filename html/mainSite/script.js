const navbarHome = document.getElementById('sidenavB1');
const navbarP1 = document.getElementById('sidenavB2');
const navbarP2 = document.getElementById('sidenavB3');
const navbarP3 = document.getElementById('sidenavB4');
const navbarP4 = document.getElementById('sidenavB5');
const navbarP5 = document.getElementById('sidenavB6');
const navbarP6 = document.getElementById('sidenavB7');
;
const sidebarButton = document.getElementById('closeOpenButton');


//===========================================





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
    document.getElementById("mySidebar").style.width = "6em";

}