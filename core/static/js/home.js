// let barGate = document.querySelector('#bar-gate');
// let widthGate = window.getComputedStyle(barGate);


// document.getElementById("button-gate").onclick = function(){
	
// 	if (document.getElementById("switch-gate-garage").checked == false) {
		
// 		if (widthGate.getPropertyValue('width') == '1px') {			
			
// 			for (let index = 0; index < 100; index++) {		

// 				barGate.style.width = index + "%";
// 			}	
// 		}				
// 	}

// 	else if (document.getElementById("switch-gate-garage").checked == true) {
		
// 		if (widthGate.getPropertyValue('width') > '0px') {			
			
// 			for (let index = 100; index > 0; index--) {		

// 				barGate.style.width = index + "%";
// 			}	
// 		}				
	
// 	}
// -------------------Sistema de segurança--------------------//
let statusAlarm = document.querySelector('#status-alarm');
let backAlarm = document.querySelector('.alarm');

let statusSmoke = document.querySelector('#status-smoke');
let backSmoke = document.querySelector('.smoke');

let statusGas = document.querySelector('#status-gas');
let backGas = document.querySelector('.gas');

document.getElementById("button-alarm").onclick = function(){
	
	if (document.getElementById("switch-alarm").checked == false) {
		statusAlarm.style.color = 'red';
		backAlarm.style.boxShadow = 'inset 0 0 25px 5px rgba(221,0,74,.8)';	
		backAlarm.style.borderColor = 'rgba(221,0,74,.8)';
		statusAlarm.innerHTML = 'Ligado';
	}
	else if (document.getElementById("switch-alarm").checked == true) {
		statusAlarm.style.color = 'green';
		backAlarm.style.boxShadow = 'inset 0 0 25px 0px rgba(15,156,230,.25)';	
		backAlarm.style.borderColor = 'rgba(15, 156, 230, 0.40)';
		statusAlarm.innerHTML = 'Desligado';
	}
};


document.getElementById("button-smoke").onclick = function(){
	
	if (document.getElementById("switch-smoke").checked == false) {
		statusSmoke.style.color = 'red';
		backSmoke.style.boxShadow = 'inset 0 0 25px 5px rgba(221,0,74,.8)';	
		backSmoke.style.borderColor = 'rgba(221,0,74,.8)';
		statusSmoke.innerHTML = 'Ligado';
	}
	else if (document.getElementById("switch-smoke").checked == true) {
		statusSmoke.style.color = 'green';
		backSmoke.style.boxShadow = 'inset 0 0 25px 0px rgba(15,156,230,.25)';	
		backSmoke.style.borderColor = 'rgba(15, 156, 230, 0.40)';
		statusSmoke.innerHTML = 'Desligado';
	}
};


document.getElementById("button-gas").onclick = function(){
	
	if (document.getElementById("switch-gas").checked == false) {
		statusGas.style.color = 'red';
		backGas.style.boxShadow = 'inset 0 0 25px 5px rgba(221,0,74,.8)';	
		backGas.style.borderColor = 'rgba(221,0,74,.8)';
		statusGas.innerHTML = 'Ligado';
	}
	else if (document.getElementById("switch-gas").checked == true) {
		statusGas.style.color = 'green';
		backGas.style.boxShadow = 'inset 0 0 25px 0px rgba(15,156,230,.25)';	
		backGas.style.borderColor = 'rgba(15, 156, 230, 0.40)';
		statusGas.innerHTML = 'Desligado';
	}
};

// -----------Acendimento das lampadas internas start-----------------------//

let diningRoom = document.querySelector('#dining-room');
document.getElementById("buttom-dining-room").onclick = function(){
	
	if (document.getElementById("switch-dining-room").checked == false) {
		diningRoom.style.fill = 'rgb(174, 224, 250)';
	}
	else if (document.getElementById("switch-dining-room").checked == true) {
		diningRoom.style.fill = 'rgba(15,156,230,.45)';
	}
};

let livingRoom = document.querySelector('#living-room');
document.getElementById("buttom-living-room").onclick = function(){
	
	if (document.getElementById("switch-living-room").checked == false) {
		livingRoom.style.fill = 'rgb(174, 224, 250)';

	}
	else if (document.getElementById("switch-living-room").checked == true) {
		livingRoom.style.fill = 'rgba(15,156,230,.45)';
	}
};

let kitchen = document.querySelector('#kitchen');
document.getElementById("buttonm-switch-kitchen").onclick = function(){
	
	if (document.getElementById("switch-kitchen").checked == false) {
		kitchen.style.fill = 'rgb(174, 224, 250)';

	}
	else if (document.getElementById("switch-kitchen").checked == true) {
		kitchen.style.fill = 'rgba(15,156,230,.45)';
	}
};

let doubleSuite = document.querySelector('#double-suite');
document.getElementById("button-double-suite").onclick = function(){
	
	if (document.getElementById("switch-double-suite").checked == false) {
		doubleSuite.style.fill = 'rgb(174, 224, 250)';

	}
	else if (document.getElementById("switch-double-suite").checked == true) {
		doubleSuite.style.fill = 'rgba(15,156,230,.45)';
	}
};

let suiteBathroom = document.querySelector('#suite-bathroom');
document.getElementById("button-suite-bathroom").onclick = function(){
	
	if (document.getElementById("switch-suite-bathroom").checked == false) {
		suiteBathroom.style.fill = 'rgb(174, 224, 250)';

	}
	else if (document.getElementById("switch-suite-bathroom").checked == true) {
		suiteBathroom.style.fill = 'rgba(15,156,230,.45)';
	}
};

let bedRoom = document.querySelector('#bedroom');
document.getElementById("button-bedroom").onclick = function(){
	
	if (document.getElementById("switch-bedroom").checked == false) {
		bedRoom.style.fill = 'rgb(174, 224, 250)';

	}
	else if (document.getElementById("switch-bedroom").checked == true) {
		bedRoom.style.fill = 'rgba(15,156,230,.45)';
	}
};

let bathRoom = document.querySelector('#bathroom');
document.getElementById("butonn-bathroom").onclick = function(){
	
	if (document.getElementById("switch-bathroom").checked == false) {
		bathRoom.style.fill = 'rgb(174, 224, 250)';

	}
	else if (document.getElementById("switch-bathroom").checked == true) {
		bathRoom.style.fill = 'rgba(15,156,230,.45)';
	}
};

// -----------Acendimento das lampadas internas end-----------------------//

// -----------Acendimento das lampadas externas start-----------------------//

let extFront = document.querySelector('#ext-front');
document.getElementById("button-ext-front").onclick = function(){
	
	if (document.getElementById("switch-ext-front").checked == false) {
		extFront.style.fill = 'rgb(174, 224, 250)';
	}
	else if (document.getElementById("switch-ext-front").checked == true) {
		extFront.style.fill = 'rgba(15,156,230,.45)';
	}
};

let extBack = document.querySelector('#ext-back');
document.getElementById("button-ext-back").onclick = function(){
	
	if (document.getElementById("switch-ext-back").checked == false) {
		extBack.style.fill = 'rgb(174, 224, 250)';
	}
	else if (document.getElementById("switch-ext-back").checked == true) {
		extBack.style.fill = 'rgba(15,156,230,.45)';
	}
};

let extHall = document.querySelector('#ext-hall');
document.getElementById("button-ext-hall").onclick = function(){
	
	if (document.getElementById("switch-ext-hall").checked == false) {
		extHall.style.fill = 'rgb(174, 224, 250)';
	}
	else if (document.getElementById("switch-ext-hall").checked == true) {
		extHall.style.fill = 'rgba(15,156,230,.45)';
	}
};

let extGarage = document.querySelector('#ext-garage');
document.getElementById("button-ext-garage").onclick = function(){
	
	if (document.getElementById("switch-ext-garage").checked == false) {
		extGarage.style.fill = 'rgb(174, 224, 250)';
	}
	else if (document.getElementById("switch-ext-garage").checked == true) {
		extGarage.style.fill = 'rgba(15,156,230,.45)';
	}
};

// document.getElementById("switch-ext-garage").onclick = function(){

// 	if (document.getElementById("switch-ext-garage").checked == true) {
// 		extGarage.style.fill = 'rgb(174, 224, 250)';
// 	}
// 	else if (document.getElementById("switch-ext-garage").checked == false) {
// 		extGarage.style.fill = 'rgba(15,156,230,.45)';
// 	}
// }
// -----------Acendimento das lampadas externas end-----------------------//
