// -----------Controle das cameras start-----------------------//

let videoInt = document.querySelector('#video-int');
document.getElementById("button-int").onclick = function(){
	console.log('teste');
	if (document.getElementById("switch-cam-int").checked == false) {
		videoInt.play();
		
	}
	else if (document.getElementById("switch-cam-int").checked == true) {
		videoInt.pause();
		videoInt.currentTime = 0;
	}
};

let videoFront = document.querySelector('#video-front');
document.getElementById("button-front").onclick = function(){
	console.log('teste');
	if (document.getElementById("switch-cam-front").checked == false) {
		videoFront.play();
		
	}
	else if (document.getElementById("switch-cam-front").checked == true) {
		videoFront.pause();
		videoFront.currentTime = 0;
	}
};

let videoBack = document.querySelector('#video-back');
document.getElementById("button-back").onclick = function(){
	console.log('teste');
	if (document.getElementById("switch-cam-back").checked == false) {
		videoBack.play();
		
	}
	else if (document.getElementById("switch-cam-back").checked == true) {
		videoBack.pause();
		videoBack.currentTime = 0;
	}
};

let videoSide = document.querySelector('#video-side');
document.getElementById("button-side").onclick = function(){
	console.log('teste');
	if (document.getElementById("switch-cam-side").checked == false) {
		videoSide.play();
		
	}
	else if (document.getElementById("switch-cam-side").checked == true) {
		videoSide.pause();
		videoSidet.currentTime = 0;
	}
};

let videoGarage = document.querySelector('#video-garage');
document.getElementById("button-garage").onclick = function(){
	
	if (document.getElementById("switch-cam-garage-on-off").checked == false) {
		videoGarage.play();
		
	}
	else if (document.getElementById("switch-cam-garage-on-off").checked == true) {
		videoGarage.pause();
		videoGarage.currentTime = 0;
	}
};
// -----------Controle das cameras end-----------------------//
