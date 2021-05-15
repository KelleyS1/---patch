/***** Kelley  Sheehan  *********
Matches input to variable and target nums */

outlets = 7;

var myval="nothingSelected";
var playnum=0;
var playnum2=0;
var click=0;
var funcNUM=0;
var target=1;
var timings = [0, 4920, 33600, 62520];

function bang()
{
	outlet(0, playnum, 1, outlet(3, target));
	outlet(1, playnum2, 1, outlet(4, target+1));
	outlet(2, click, 1, outlet(5, target+2));

	outlet(6, funcNUM);
}


// hides extra live.gain
function cleanUp() {
	this.patcher.getnamed("thispatcher").message("script", "hide", "sines");
}
 

function clockToggle() {

//turns clock toggle OFF to STOP transport
	this.patcher.getnamed("clockTog").message(0); //turns clock toggle ON to start transport
	this.patcher.getnamed("clockTog").message(1); //turns clock toggle ON to start transport

	this.patcher.getnamed("clocker").subpatcher(0).getnamed("transTicks").message("int", timings[myval]); 
}
 

function anything()
{
	
	var a = arrayfromargs(messagename, arguments);
	myval = a;
		if (myval == "performance") {
			myval = 0;
			playnum = 2;
			playnum2 = 1;
			click = 6;
			
			funcNUM = 1;
			this.patcher.getnamed("thispatcher").message("script", "show", "sines"); //shows live.gain
			bang(), clockToggle();
		}
		else if (myval == "rehearsal_A") {
			myval = 1;
			playnum = 3;
			playnum2 = 0;
			click = 7;

			funcNUM = 2;
			cleanUp();
			bang(), clockToggle();
		}
		else if (myval == "rehearsal_B") {
			myval = 2;
			playnum = 4;
			playnum2 = 0;
			click = 8;

			
			funcNUM = 3;
			cleanUp();
			bang(), clockToggle();
		}
		else if (myval == "rehearsal_C") {
			myval = 3;
			playnum = 5;
			playnum2 = 0;
			click = 9;
			
			funcNUM = 4;
			cleanUp();
			bang(), clockToggle();
		};
}