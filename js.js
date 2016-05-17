
var i = 0;
var path = new Array();
 
// LIST OF IMAGES
path[0] = "images/a.jpg";
path[1] = "images/b.jpg";
path[2] = "images/c.jpg";

function swapImage()
{
   document.getElementById("demo").src = path[i];
   if(i < path.length - 1) i++; else i = 0;
   setTimeout("swapImage()",3000);
}

