////////////Kelley Sheehan/////////
// handles scripting msg via toggle
var arrayComments = ["com1", "com2", "com3", "com4", "com5", "com6", "com7", "com8", "com9", "com11"];


// individual scripting functions to be called	
function comments(z)
{
	for (var i = 0; i < arrayComments.length; i++) {
		outlet(0,"script", z, arrayComments[i]);
	}
}	


// logic to match input and call correct functions
function msg_int(v)
{

var s = "show";
var h = "hide";
	
	if (v == 0) {
		comments(h);
	}
		
	else if (v == 1) {
		comments(s);
	}
}


function anything(v) {
	var msg = arrayfromargs(messagename, arguments);
	var myval = msg;
	
	if (myval == "performance") {
		outlet(0,"script", "show", "sines");
	}
	else if (myval == "rehearsal_A") {
		outlet(0,"script", "hide", "sines");
		}
}




// sets settings upon opening patch
function setup() {
	this.patcher.getnamed("inputgain").message('int', -70);
}

function bang() {
	setup();
}


setup.local = 1; // prevent triggering bang directly from Max

