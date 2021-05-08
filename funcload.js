 //////////////////Kelley Sheehan//////////////////////
// loads correct timing into function objects via ints

inlets=1;
outlets=7; 

var tsk = new Task(mytask, this); // the main task

var bang = 1;
// rate points
var arrayReh_A_G1 = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100.00 33.07 0.", "xyc 59700 43.43 0.", "xyc 60000 0. 0."];
var arrayReh_B_G1 = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100 43.43 0.", "xyc 59700 36.229 0.", "xyc 60000 0. 0."];
var arrayReh_C_G1 = ["setdomain 63000","clear", "xyc 0 0. 0.", "xyc 100 36.229 0.", "xyc 62700 28.603 0.", "xyc 63000 0. 0."];
var arrayPerm_G1 =  ["setdomain 240000","clear", "xyc 0 0.0 0.", "xyc 319.149 33.07 0.", "xyc 2234.843 50.0 0.", "xyc 218297.872 24.0 0.", "xyc 234893.617 23.60 0.", "xyc 240000 0. 0."];
var arrayVar_G1 = [];

var arrayReh_A_G2 = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 333 0.26 0.", "xyc 666 0.01 0.", "xyc 60000 0. 0."]; // fill in
var arrayReh_B_G2 = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 333 0.26 0.", "xyc 666 0.01 0.", "xyc 60000 0. 0."]; // fill in
var arrayReh_C_G2 = ["setdomain 63000","clear", "xyc 0 0. 0.", "xyc 333 0.26 0.", "xyc 666 0.01 0.", "xyc 63000 0. 0."]; // fill in
var arrayPerm_G2 = ["setdomain 240000","clear", "xyc 0 0. 0.", "xyc 333 0.26 0.", "xyc 666 0.01 0.", "xyc 240000 0. 0."]; // fill in
var arrayVar_G2 = [];


// wet/dry points
var arrayPerm_G1_WD =  ["setdomain 240000","clear", "xyc 0 0.85 0.", "xyc 240000 0.9 0."];
var arrayReh_A_G1_WD = ["setdomain 60000","clear", "xyc 0 0.85 0.", "xyc 60000 0.88 0."]; 
var arrayReh_B_G1_WD = ["setdomain 60000","clear", "xyc 0 0.88 0.", "xyc 69000 0.9 0."];
var arrayReh_C_G1_WD = ["setdomain 63000","clear", "xyc 0 0.9 0.", "xyc 63000 0.9 0."];
var arrayVar_G1_WD = [];


var arrayPerm_G2_WD =  ["setdomain 240000", "clear", "xyc 0 0. 0.", "xyc 100. 0.9 0.", "xyc 7000. 0.92 0.", "xyc 10000. 0.91 0.", "xyc 13000. 0.92 0.", "xyc 20000. 0.9 0.", "xyc 22000. 0.79 0.", "xyc 25000. 0.87 0.", "xyc 30000. 0.81 0.", "xyc 33000. 0.54 0.", "xyc 40000. 0.63 0.", "xyc 50000. 0.77 0.", "xyc 55000. 0.833 0.", "xyc 60000. 0.81 0.", "xyc 70000 0.784 0.", "xyc 80000 0.751 0.", "xyc 90000 0.718 0.", "xyc 100000 0.686 0.", "xyc 150000 0.697 0.", "xyc 110000 0.626 0.", "xyc 117000 0.739 0.", "xyc 120000 0.745 0.", "xyc 120100 0.749 0.", "xyc 127000 0.757 0.", "xyc 130000 0.696 0.", "xyc 132000 0.679 0.", "xyc 134000 0.87 0.", "xyc 138000 0.938 0.", "xyc 140000 0.828 0.", "xyc 144000 0.8 0.", "xyc 147000 0.906 0.", "xyc 150000 0.907 0.", "xyc 160000 0.901 0.", "xyc 170000 0.895 0.", "xyc 180000 0.888 0.", "xyc 181000 0.909 0.", "xyc 182000 0. 0.", "xyc 240000 0.0 0."];
var arrayReh_A_G2_WD = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100. 0.9 0.", "xyc 7000. 0.92 0.", "xyc 10000. 0.91 0.", "xyc 13000. 0.92 0.", "xyc 20000. 0.9 0.", "xyc 22000. 0.79 0.", "xyc 25000. 0.87 0.", "xyc 30000. 0.81 0.", "xyc 33000. 0.54 0.", "xyc 40000. 0.63 0.", "xyc 50000. 0.77 0.", "xyc 55000. 0.833 0.", "xyc 60000. 0.81 0."];
var arrayReh_B_G2_WD = ["setdomain 60000","clear", "xyc 0 0.81 0.", "xyc 10000 0.784 0.", "xyc 20000 0.751 0.", "xyc 30000 0.718 0.", "xyc 40000 0.686 0.", "xyc 45000 0.697 0.", "xyc 50000 0.626 0.", "xyc 57000 0.739 0.", "xyc 60000. 0.745 0."];
var arrayReh_C_G2_WD = ["setdomain 63000", "clear", "xyc 0 0.749 0.", "xyc 7000 0.757 0.", "xyc 10000 0.696 0.", "xyc 12000 0.679 0.", "xyc 14000 0.87 0.", "xyc 18000 0.938 0.", "xyc 20000 0.828 0.", "xyc 24000 0.8 0.", "xyc 27000 0.906 0.", "xyc 30000 0.907 0.", "xyc 40000 0.901 0.", "xyc 50000 0.895 0.", "xyc 60000 0.888 0.", "xyc 61000 0.909 0.", "xyc 62000 0. 0","xyc 63000 0. 0."];
var arrayVar_G2_WD = [];


// shape points
var arrayPerm_G1_SH =  ["setdomain 240000","clear", "xyc 0 0.8 0.", "xyc 240000 0.9 0."];
var arrayReh_A_G1_SH = ["setdomain 60000","clear", "xyc 0 0.8 0.", "xyc 60000 0.85 0."];
var arrayReh_B_G1_SH = ["setdomain 60000","clear", "xyc 0 0.85 0.", "xyc 60000 0.9 0."];
var arrayReh_C_G1_SH = ["setdomain 63000","clear", "xyc 0 0.9 0.", "xyc 63000 0.9 0."];
var arrayVar_G1_SH = [];

var arrayPerm_G2_SH =  ["setdomain 240000","clear", "xyc 0 0. 0.", "xyc 100 0.2 0.", "xyc 60000 0.15 0.", "xyc 60100 0.15 0.", "xyc 120000 0. 0.", "xyc 140000 0.5 0.", "xyc 148000 0.3 0.", "xyc 151000 0.5 0.", "xyc 156000 0.3 0.", "xyc 180000 1. 0.", "xyc 182000 0. 0.", "xyc 183000 0. 0.","xyc 240000 0. 0."];
var arrayReh_A_G2_SH = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100 0.2 0.", "xyc 60000 0.15 0."];
var arrayReh_B_G2_SH = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100 0.15 0.", "xyc 60000 0. 0."];
var arrayReh_C_G2_SH = ["setdomain 63000","clear", "xyc 0 0. 0.", "xyc 20000 0.5 0.", "xyc 28000 0.3 0.", "xyc 31000 0.5 0.", "xyc 36000 0.3 0.", "xyc 60000 1. 0.", "xyc 62000 0. 0.", "xyc 63000 0. 0."];
var arrayVar_G2_SH = [];



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


