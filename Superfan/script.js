// https://www.w3schools.com/js/js_variables.asp

//The var a/b/c applies the id "bab/bar/bac" to the div or button/image that is being clicked.
var a = document.getElementById("tee");
var b = document.getElementById("cee");
var c = document.getElementById("bee");
var d = document.getElementById("mee");
var e = document.getElementById("wee");
var f = document.getElementById("ree");
var g = document.getElementById("jee");
var h = document.getElementById("color");
var timer = setInterval( randomColor, 2000);

var aa = document.getElementById("sponge");
var ab = document.getElementById("star");
var ac = document.getElementById("snail");
var ad = document.getElementById("tent");
var ae = document.getElementById("cheeks");
var af = document.getElementById("mr");
// The function showPic is the function that cycles images. The first if statement is cheecking to see if image baby is in div a which has the id "bab" Once the image baby is in place then it will switch to AJ. From there it will repeat the process and switch to the next image and then to the next to create a cycle of images.
function showPic(){
	if (g.src.match("images/bb.PNG")){
		g.src = "images/rope.jpg";
	} else if (g.src.match("images/rope.jpg")){
		g.src = "images/jope.jpg";
	} else if (g.src.match("images/jope.jpg")){
		g.src = "images/pope.jpg";
	} else if (g.src.match("images/pope.jpg")) {
		g.src = "images/bb.PNG";
	}
}
setInterval(function(){
// generates red color band number as a random number
var x = Math.round(Math.random() * 255);
// generates blue color band number as a random number
var y = Math.round(Math.random() * 255);
// generates green color band number as a random number
var z = Math.round(Math.random() * 255);
// concatines a string which will be used to replace the style of the element
// with the newly generated RGB values
var bg = "background:rgb("+x+" , "+y+" , "+z+");";
// gets the elements that will have its style changed
var element = document.getElementById("color");
// changes the style to the newly generated style
element.style = bg;
// this will occur with an interval of 1000
}, 1000);

const colors = ["red", "tan", "green", "light_blue", "yellow", "pink", "purple", "black", "white", "sky"];

function calculate() {
  return Math.floor(Math.random() * colors.length));
}

function randomColor() {
  let x = calculate();
  for (let i = 0; i < colors.length; i++) {
    if (i == x) {
      h.classList.add(colors[i]);
    } else {
      h.classList.remove(colors[i]);
    }
  }
}

function playSound() {
	aa.play();
	a.classList.remove("fit")
}
function playSound1() {
	ab.play();
	b.classList.remove("fit")
}
function playSound2() {
	ac.play();
	c.classList.remove("fit")
}
function playSound3() {
	ad.play();
	e.classList.remove("fit")
}
function playSound4() {
	ae.play();
	d.classList.remove("fit")
}
function playSound5() {
	af.play();
	f.classList.remove("fit")
}
