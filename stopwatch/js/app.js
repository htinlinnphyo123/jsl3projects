// UI
const display=document.querySelector('.display');

const startbtn=document.querySelector('.start'),
	pausebtn=document.querySelector('.pause'),
	resetbtn=document.querySelector('.reset');

let [milliseconds,seconds,minutes,hours]=[0,0,0,0];
// console.log(hours);

let time;

function starttimer(){
	// console.log("starttimer");

	if(time !== null){
		clearInterval(time);
	}
	
	time=setInterval(displaytimer,10);

}

function pausetimer(){
	// console.log('pausetimer');

	clearInterval(time);

}

function resettimer(){
	// console.log('resettimer');

	clearInterval(time);
	[milliseconds,seconds,minutes,hours]=[0,0,0,0];
	display.textContent="00 : 00 : 00 : 000"

}

// Display Timer
function displaytimer(){
	// console.log("hey i am working");

	milliseconds += 10;

	if(milliseconds===1000){
		milliseconds=0;
		console.log(milliseconds);
	
		// seconds+=1;
		seconds++;
		// console.log(seconds);

		if(seconds===60){
			seconds=0;
			// console.log(seconds);
		
			minutes++;

			if(minutes===60){
				munutes=0;
				console.log(munutes);

				hours++;
			}
		}
	}

	let h = hours<10 ? "0"+hours : hours;
	let m = minutes<10 ? "0"+minutes : minutes;
	let s = seconds<10 ? "0"+seconds : seconds;
	let ms = milliseconds<10 ? "00"+milliseconds : milliseconds<100? "0"+milliseconds:milliseconds;

	display.textContent=`${h} : ${m} : ${s} : ${ms}`; 




}


startbtn.addEventListener('click',starttimer);
pausebtn.addEventListener('click',pausetimer);
resetbtn.addEventListener('click',resettimer);

