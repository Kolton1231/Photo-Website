/*=========================
    IMAGE PATH SCRIPT
    WRITTEN BY KOLTON ROY
    4/3/2026
=========================*/

var integer = 0;
var largeImageLoc = "";
var compImageLoc = "";


const fs = require('fs');

const directoryPath = 'C:/replace/these/with/directory'; // Change this to your directory path
const files = fs.readdirSync(directoryPath);


for (var i = 0; i < files.length; i++){
    compImageLoc = files[i];
    largeImageLoc = files[i];
    console.log("<a href=\"Images/" + largeImageLoc + "\"> <img src=\"imagesSmall/" + compImageLoc + "\" class=\"imagepadding\"> </a>");

}












//<a href="Images/img57.jpg"> <img src="imagesSmall/img57.jpg" class="imagepadding"> </a>
