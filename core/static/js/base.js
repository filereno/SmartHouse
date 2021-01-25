let svgMenu = document.querySelector('#svg-menu');
let menu = document.querySelector('.menu-bar');
document.getElementById("button-menu").onclick = function(){
	
	if (document.getElementById("switch-menu").checked == false) {
		svgMenu.setAttribute('xlink:href', '/static/svg/sprites.svg#close');
		menu.style.backgroundColor = 'rgb(15, 156, 230)';
	}
	else if (document.getElementById("switch-menu").checked == true) {
		svgMenu.setAttribute('xlink:href', '/static/svg/sprites.svg#menu');
		menu.style.backgroundColor = 'rgb(22, 30, 37)';
	}
};