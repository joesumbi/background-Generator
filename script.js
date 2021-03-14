css = document.querySelector("h3");
color1 = document.querySelector(".color1");
color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");



function ColorChange(){
	body.style.background = "linear-gradient(to right, "
	 + color1.value+ ", " 
	 + color2.value 
	 + ")"; 
	 css.textContent = body.style.background + ";";
}
color1.addEventListener("input",ColorChange)

color2.addEventListener("input",ColorChange)
