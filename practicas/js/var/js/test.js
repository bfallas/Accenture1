var x = 88;
var y = 15;
var z = x + y;
document.getElementById('suma').innerHTML = z;

var tex = document.querySelector('h6');
tex.innerHTML = 'Hello word';
function myFunction() {
    var x = document.getElementsByName("cuenta").length;
    document.getElementById("igual").innerHTML = x;
}
function stilo() {
    var x = document.createElement("STYLE");
    var t = document.createTextNode("h3 {font: 20px verdana;}");
    x.appendChild(t);
    document.head.appendChild(x);
}
var consolas  = ["Play", "xbox", "wii"];
document.getElementById("marca").innerHTML = consolas[2];

var j = x + 4 + "nike"; //puede ser objeto, array, string, numero
document.getElementById("data").innerHTML = j;

function classFunction() {
    var h = document.getElementsByClassName("escoge");
   	h[0].innerHTML = "Hello World!";
}


//var elementCount = $( "*" ).css( "border", "3px solid red" ).length;
//$( "body" ).prepend( "<h3>" + elementCount + " elements found</h3>" )