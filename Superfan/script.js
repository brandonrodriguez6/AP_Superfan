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
// The setInterval function set variables x, y, z to create a random function and also rounding the outcome using MATH, The bg variable sets a place holder for the number value that will replace the x, y, z. The numbers their end up becoming the rgb color value.
setInterval(function(){
	var x = Math.round(Math.random() * 255);
	var y = Math.round(Math.random() * 255);
	var z = Math.round(Math.random() * 255);
	var bg = "background:rgb("+x+" , "+y+" , "+z+");";
	var element = document.getElementById("color");
	element.style = bg;
}, 1000);

function calculator() {
	x = Math.floor((Math.random() * 10) + 1);
	return x;
}
function randomColor() {
	calculator();
	if (x == 1) {
		h.classList.remove("red");
		h.classList.remove("tan");
		h.classList.remove("green");
		h.classList.remove("light_blue");
		h.classList.remove("yellow");
		h.classList.remove("pink");
		h.classList.remove("purple");
		h.classList.remove("black");
		h.classList.remove("white");
		h.classList.add("sky");
	}
	else if (x == 2) {
		h.classList.remove("sky");
		h.classList.remove("tan");
		h.classList.remove("green");
		h.classList.remove("light_blue");
		h.classList.remove("yellow");
		h.classList.remove("pink");
		h.classList.remove("purple");
		h.classList.remove("black");
		h.classList.remove("white");
		h.classList.add("red");
	}
	else if (x == 3) {
		h.classList.remove("red");
		h.classList.remove("sky");
		h.classList.remove("green");
		h.classList.remove("light_blue");
		h.classList.remove("yellow");
		h.classList.remove("pink");
		h.classList.remove("purple");
		h.classList.remove("black");
		h.classList.remove("white");
		h.classList.add("tan");
	}
	else if (x == 4) {
		h.classList.remove("red");
		h.classList.remove("tan");
		h.classList.remove("sky");
		h.classList.remove("light_blue");
		h.classList.remove("yellow");
		h.classList.remove("pink");
		h.classList.remove("purple");
		h.classList.remove("black");
		h.classList.remove("white");
		h.classList.add("green");
	}
	else if (x == 5) {
		h.classList.remove("red");
		h.classList.remove("tan");
		h.classList.remove("green");
		h.classList.remove("sky");
		h.classList.remove("yellow");
		h.classList.remove("pink");
		h.classList.remove("purple");
		h.classList.remove("black");
		h.classList.remove("white");
		h.classList.add("light_blue");
	}
	else if (x == 6) {
		h.classList.remove("red");
		h.classList.remove("tan");
		h.classList.remove("green");
		h.classList.remove("light_blue");
		h.classList.remove("sky");
		h.classList.remove("pink");
		h.classList.remove("purple");
		h.classList.remove("black");
		h.classList.remove("white");
		h.classList.add("yellow");
	}
	else if (x == 7) {
		h.classList.remove("red");
		h.classList.remove("tan");
		h.classList.remove("green");
		h.classList.remove("light_blue");
		h.classList.remove("yellow");
		h.classList.remove("sky");
		h.classList.remove("purple");
		h.classList.remove("black");
		h.classList.remove("white");
		h.classList.add("pink");
	}
	else if (x == 8) {
		h.classList.remove("red");
		h.classList.remove("tan");
		h.classList.remove("green");
		h.classList.remove("light_blue");
		h.classList.remove("yellow");
		h.classList.remove("pink");
		h.classList.remove("sky");
		h.classList.remove("black");
		h.classList.remove("white");
		h.classList.add("purple");
	}
	else if (x == 9) {
		h.classList.remove("red");
		h.classList.remove("tan");
		h.classList.remove("green");
		h.classList.remove("light_blue");
		h.classList.remove("yellow");
		h.classList.remove("pink");
		h.classList.remove("purple");
		h.classList.remove("sky");
		h.classList.remove("white");
		h.classList.add("black");
	}
	else if (x == 10) {
		h.classList.remove("red");
		h.classList.remove("tan");
		h.classList.remove("green");
		h.classList.remove("light_blue");
		h.classList.remove("yellow");
		h.classList.remove("pink");
		h.classList.remove("purple");
		h.classList.remove("black");
		h.classList.remove("sky");
		h.classList.add("white");
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