/***** Kelley  Sheehan  *********
Matches input to variable and target nums */

outlets = 5;

var myval="nothingSelected";
var playnum=0;
var playnum2=0;
var funcNUM=0;
var target=1;


function bang()
{
	outlet(0, playnum, 1, outlet(3, target));
	outlet(1, playnum2, 1, outlet(4, target+1));
	outlet(2, funcNUM);
}


// hides extra live.gain
function cleanUp() {
	this.patcher.getnamed("thispatcher").message("script", "hide", "sines");
}
 

function anything()
{
	
	var a = arrayfromargs(messagename, arguments);
	myval = a;
		if (myval == "performance") {
			playnum = 2;
			playnum2 = 1;
			funcNUM = 1;
			this.patcher.getnamed("thispatcher").message("script", "show", "sines"); //shows live.gain
			bang();
		}
		else if (myval == "rehearsal_A") {
			playnum = 3;
			playnum2 = 0;
			funcNUM = 2;
			cleanUp();
			bang();
		}
		else if (myval == "rehearsal_B") {
			playnum = 4;
			playnum2 = 0;
			funcNUM = 3;
			cleanUp();
			bang();
		}
		else if (myval == "rehearsal_C") {
			playnum = 5;
			playnum2 = 0;
			funcNUM = 4;
			cleanUp();
			bang();
		};
}