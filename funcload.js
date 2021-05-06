 //////////////////Kelley Sheehan//////////////////////
// loads correct timing into function objects via ints

inlets=1;
outlets=7; 

var tsk = new Task(mytask, this); // the main task

var bang = 1;
// rate points
var arrayReh_A_G1 = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100.00 33.07 0.", "xyc 59700 43.43 0.", "xyc 60000 0. 0."];
var arrayReh_B_G1 = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100 43.43 0.", "xyc 59700 36.229 0.", "xyc 60000 0. 0."];
var arrayReh_C_G1 = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100 36.229 0.", "xyc 59700 28.603 0.", "xyc 60000 0. 0."];
var arrayPerm_G1 =  ["setdomain 240000","clear", "xyc 0 0.0 0.", "xyc 319.149 33.07 0.", "xyc 2234.843 50.0 0.", "xyc 218297.872 24.0 0.", "xyc 234893.617 23.60 0.", "xyc 240000 0. 0."];
var arrayVar_G1 = [];

var arrayReh_A_G2 = ["setdomain 210000","clear", "xyc 0 0.1 0.", "xyc 333 0.26 0.", "xyc 666 0.01 0.", "xyc 200000 0.44 0."];
var arrayReh_B_G2 = ["setdomain 60000","clear", "xyc 0 0.1 0.", "xyc 333 0.26 0.", "xyc 666 0.01 0.", "xyc 59000 0.44 0."]; // fill in
var arrayReh_C_G2 = ["setdomain 60000","clear", "xyc 0 0.1 0.", "xyc 333 0.26 0.", "xyc 666 0.01 0.", "xyc 59000 0.44 0."]; // fill in
var arrayPerm_G2 = ["setdomain 60000","clear", "xyc 0 0.1 0.", "xyc 333 0.26 0.", "xyc 666 0.01 0.", "xyc 59000 0.44 0."]; // fill in
var arrayVar_G2 = [];


// wet/dry points
var arrayPerm_G1_WD =  ["setdomain 240000","clear", "xyc 0 0.85 0.", "xyc 240000 0.9 0."];
var arrayReh_A_G1_WD = ["setdomain 60000","clear", "xyc 0 0.85 0.", "xyc 60000 0.88 0."]; 
var arrayReh_B_G1_WD = ["setdomain 60000","clear", "xyc 0 0.88 0.", "xyc 69000 0.9 0."];
var arrayReh_C_G1_WD = ["setdomain 60000","clear", "xyc 0 0.9 0.", "xyc 60000 0.9 0."];
var arrayVar_G1_WD = [];


var arrayPerm_G2_WD =  ["setdomain 240000","clear", "xyc 0 0.9 0.", "xyc 240000 0.9 0."];
var arrayReh_A_G2_WD = ["setdomain 60000","clear"]; // fill in
var arrayReh_B_G2_WD = ["setdomain 60000","clear"]; // fill in
var arrayReh_C_G2_WD = ["setdomain 60000","clear"]; // fill in
var arrayVar_G2_WD = [];


// shape points
var arrayPerm_G1_SH =  ["setdomain 240000","clear", "xyc 0 0.8 0.", "xyc 240000 0.9 0."];
var arrayReh_A_G1_SH = ["setdomain 60000","clear", "xyc 0 0.8 0.", "xyc 60000 0.85 0."];
var arrayReh_B_G1_SH = ["setdomain 60000","clear", "xyc 0 0.85 0.", "xyc 60000 0.9 0."];
var arrayReh_C_G1_SH = ["setdomain 60000","clear", "xyc 0 0.9 0.", "xyc 60000 0.9 0."];
var arrayVar_G1_SH = [];

var arrayPerm_G2_SH =  ["setdomain 240000","clear", "xyc 0 0.7 0.", "xyc 240000 0.9 0."];
var arrayReh_A_G2_SH = ["setdomain 60000","clear"]; // fill in
var arrayReh_B_G2_SH = ["setdomain 60000","clear"]; // fill in
var arrayReh_C_G2_SH = ["setdomain 60000","clear"]; // fill in
var arrayVar_G2_SH = [];


//js for different points to start at?
// bang -- start the task
function bang(){
   tsk.cancel(); // cancel, if it's going already
   tsk.execute();
}

// stop -- allow the user to stop the count
function stop(){
   tsk.cancel(); // cancel our task
}

function startFunc() {
	   outlet(6, bang);
	}

function msg_int(v){

	//performance
	if (v == 1) {
		arrayVar_G1 = arrayPerm_G1;
		arrayVar_G2 = arrayPerm_G2;
		
		arrayVar_G1_WD = arrayPerm_G1_WD;
		arrayVar_G2_WD = arrayPerm_G2_WD;
				
		arrayVar_G1_SH = arrayPerm_G1_SH;
		arrayVar_G2_SH = arrayPerm_G2_SH;
		
		mytask(arrayVar_G1, arrayVar_G2, arrayVar_G1_WD, arrayVar_G2_WD, arrayVar_G1_SH, arrayVar_G2_SH);
	}
	
	//rehearsal A
	else if (v == 2) {
		arrayVar_G1 = arrayReh_A_G1;
		arrayVar_G2 = arrayReh_A_G2;
		
		arrayVar_G1_WD = arrayReh_A_G1_WD;
		arrayVar_G2_WD = arrayReh_A_G2_WD;		
		
		arrayVar_G1_SH = arrayReh_A_G1_SH;		
		arrayVar_G2_SH = arrayReh_A_G2_SH;							
										
		mytask(arrayVar_G1, arrayVar_G2, arrayVar_G1_SH, arrayVar_G2_SH, arrayVar_G1_WD, arrayVar_G2_WD);
	}	
	
	//rehearsal B
	else if (v == 3) {
		arrayVar_G1 = arrayReh_B_G1;
		arrayVar_G2 = arrayReh_B_G2;
		
		arrayVar_G1_WD = arrayReh_B_G1_WD;
		arrayVar_G2_WD = arrayReh_B_G2_WD;		
		
		arrayVar_G1_SH = arrayReh_B_G1_SH;					
		arrayVar_G2_SH = arrayReh_B_G2_SH;	
										
		mytask(arrayVar_G1, arrayVar_G2, arrayVar_G1_SH, arrayVar_G2_SH, arrayVar_G1_WD, arrayVar_G2_WD);
	}	
	
	//rehearsal C
	else if (v == 4) {
		arrayVar_G1 = arrayReh_C_G1;
		arrayVar_G2 = arrayReh_C_G2;	
		
		arrayVar_G1_WD = arrayReh_C_G1_WD;
		arrayVar_G2_WD = arrayReh_C_G2_WD;

		
		arrayVar_G1_SH = arrayReh_C_G1_SH;					
		arrayVar_G2_SH = arrayReh_C_G2_SH;	
				
		mytask(arrayVar_G1, arrayVar_G2, arrayVar_G1_WD, arrayVar_G2_SH, arrayVar_G1_SH, arrayVar_G2_SH);
	}	
}				


function mytask(){	

	for (var i=0; i<arrayVar_G1.length; i++) {
		for (var t=0; t<arrayVar_G1_WD.length; t++) {
			for (var s=0; s<arrayVar_G1_SH.length; s++) {
				outlet(2, arrayVar_G1_SH[s]);
				tsk.schedule(250);
			}
			outlet(1, arrayVar_G1_WD[t]);
			tsk.schedule(250);		
		}
		outlet(0, arrayVar_G1[i]);
		tsk.schedule(250);
	} 
	
	
	for (var j=0; j<arrayVar_G2.length; j++) {
		for (var x=0; x<arrayVar_G2_WD.length; x++) {
			for (var y=0; y<arrayVar_G2_SH.length; y++) {
				outlet(5, arrayVar_G2_SH[y]);
				tsk.schedule(250);
			}
			outlet(4, arrayVar_G2_WD[x]);
			tsk.schedule(250);		
		}						
		outlet(3, arrayVar_G2[j]);
	} 
	
	tsk.cancel();
	startFunc();
}


bang.local = 1; // prevent triggering bang directly from Max


