 //////////////////Kelley Sheehan//////////////////////
// loads automation into function objects via user input

inlets=1;
outlets=7; 

var tsk = new Task(mytask, this); // the main task

var bang = 1;

// arrays that serve as automation points
//////////// rate points///////////////
// group 1
var arrayReh_A_G1 = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100.00 33.07 0.", "xyc 59700 43.43 0.", "xyc 60000 0. 0."];
var arrayReh_B_G1 = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100 43.43 0.", "xyc 59700 36.229 0.", "xyc 60000 0. 0."];
var arrayReh_C_G1 = ["setdomain 78000","clear", "xyc 0 0. 0.", "xyc 100 36.229 0.", "xyc 62700 28.603 0.", "xyc 78000  28.603. 0."];
var arrayPerm_G1 =  ["setdomain 240000","clear", "xyc 0 0.0 0.", "xyc 319.149 33.07 0.", "xyc 2234.843 50.0 0.", "xyc 218297.872 24.0 0.", "xyc 234893.617 23.60 0.", "xyc 240000 0. 0."];
var arrayVar_G1 = [];
// group 2
var arrayReh_A_G2 = ["setdomain 60000","clear","xyc 0 5. 0.", "xyc 1250 5. 0.","xyc 1500 7. 0.","xyc 2000 7. 0.","xyc 6000 0.9 0.","xyc 10500 5. 0.","xyc 12000 0.7 0.","xyc 15000 0.6 0.","xyc 19500 0.7 0.", "xyc 21500 7. 0.","xyc 22500 11.5 0.","xyc 23000 8.3 0.","xyc 26500 8.3 0.","xyc 27000 13.5 0.","xyc 29000 13.9 0.","xyc 29500 13.7 0.","xyc 32500 8.1 0.","xyc 34000 16.3 0.","xyc 38500 15.3 0.","xyc 42000 29.5 0.","xyc 45500 26. 0.","xyc 47700 25.8 0.","xyc 50000 23.9 0.","xyc 55000 40.5 0.","xyc 60000 51. 0."];
var arrayReh_B_G2 = ["setdomain 60000","clear","xyc 0 49. 0.","xyc 4000 34. 0.","xyc 8000 11.5 0.","xyc 13000 8.5 0.","xyc 15500 20.5 0.","xyc 20500 32.5 0.","xyc 26500 36.5 0.","xyc 32500 41. 0.","xyc 36500 45.5 0.","xyc 38500 47.5 0.","xyc 41500 29. 0.","xyc 44000 49. 0.","xyc 47000 55. 0.","xyc 49000 20.5 0.","xyc 51000 59.5 0.","xyc 53000 61.7 0.","xyc 55500 16.5 0.","xyc 56500 13. 0.","xyc 60000 16.5 0."];
var arrayReh_C_G2 = ["setdomain 78000","clear","xyc 0 16.5 0.","xyc 5000 23. 0.","xyc 13000 56. 0.","xyc 20500 53. 0.","xyc 24500 40.5 0.","xyc 28000 50.7 0.","xyc 61000 51. 0.","xyc 66500 57. 0.","xyc 69500 56.5 0.","xyc 72500 3. 0.","xyc 78000 51. 0."];
var arrayPerm_G2 = ["setdomain 240000","clear","xyc 0 0. 0.", "xyc 10000 5. 0.", "xyc 11250 5. 0.", "xyc 11500 7. 0.", "xyc 12000 7. 0.", "xyc 16000 0.9 0.", "xyc 20500 5. 0.", "xyc 22000 0.7 0.", "xyc 25000 0.6 0.", "xyc 29500 0.7 0.", "xyc 31500 7. 0.", "xyc 32500 11.5 0.", "xyc 33000 8.3 0.", "xyc 36500 8.3 0.", "xyc 37000 13.5 0.", "xyc 39000 13.9 0.", "xyc 39500 13.7 0.", "xyc 42500 8.1 0." ,"xyc 44000 16.3 0.", "xyc 48500 15.3 0.", "xyc 52000 29.5 0.", "xyc 55500 26. 0.", "xyc 57700 25.8 0.", "xyc 60000 23.9 0.", "xyc 65000 40.5 0.", "xyc 70000 51. 0.", "xyc 74000 34. 0.", "xyc 78000 11.5 0.", "xyc 83000 8.5 0.", "xyc 85500 20.5 0.", "xyc 90500 32.5 0.", "xyc 96500 36.5 0.", "xyc 102500 41. 0.", "xyc 106500 45.5 0.", "xyc 108500 47.5 0.", "xyc 111500 29. 0.", "xyc 114000 49. 0.", "xyc 117000 55. 0.", "xyc 119000 20.5 0.", "xyc 121000 59.5 0.", "xyc 123000 61.7 0.", "xyc 125500 16.5 0.", "xyc 126500 13. 0.", "xyc 120000 16.5 0.", "xyc 135000 23. 0.", "xyc 143000 56. 0.", "xyc 150500 53. 0.", "xyc 154500 40.5 0.", "xyc 158000 50.7 0.", "xyc 191000 51. 0.", "xyc 196500 57. 0.", "xyc 199500 56.5 0.", "xyc 202500 3. 0.", "xyc 208000 51. 0.", "xyc 209000 51. 0.", "xyc 210000 52. 0.", "xyc 240000 0. 0."];
var arrayVar_G2 = [];

//////////// wet/dry points//////////////
// group 1
var arrayPerm_G1_WD =  ["setdomain 240000","clear", "xyc 0 0.85 0.", "xyc 240000 0.9 0."];
var arrayReh_A_G1_WD = ["setdomain 60000","clear", "xyc 0 0.85 0.", "xyc 60000 0.88 0."]; 
var arrayReh_B_G1_WD = ["setdomain 60000","clear", "xyc 0 0.88 0.", "xyc 69000 0.9 0."];
var arrayReh_C_G1_WD = ["setdomain 78000","clear", "xyc 0 0.9 0.", "xyc 78000 0.9 0."];
var arrayVar_G1_WD = [];
// group 2
var arrayPerm_G2_WD =  ["setdomain 240000", "clear", "xyc 0 0. 0.", "xyc 100. 0.9 0.", "xyc 7000. 0.92 0.", "xyc 10000. 0.91 0.", "xyc 13000. 0.92 0.", "xyc 20000. 0.9 0.", "xyc 22000. 0.79 0.", "xyc 25000. 0.87 0.", "xyc 30000. 0.81 0.", "xyc 33000. 0.54 0.", "xyc 40000. 0.63 0.", "xyc 50000. 0.77 0.", "xyc 55000. 0.833 0.", "xyc 60000. 0.81 0.", "xyc 70000 0.784 0.", "xyc 80000 0.751 0.", "xyc 90000 0.718 0.", "xyc 100000 0.686 0.", "xyc 150000 0.697 0.", "xyc 110000 0.626 0.", "xyc 117000 0.739 0.", "xyc 120000 0.745 0.", "xyc 120100 0.749 0.", "xyc 127000 0.757 0.", "xyc 130000 0.696 0.", "xyc 132000 0.679 0.", "xyc 134000 0.87 0.", "xyc 138000 0.938 0.", "xyc 140000 0.828 0.", "xyc 144000 0.8 0.", "xyc 147000 0.906 0.", "xyc 150000 0.907 0.", "xyc 160000 0.901 0.", "xyc 170000 0.895 0.", "xyc 180000 0.888 0.", "xyc 181000 1. 0.", "xyc 210000 1. 0.","xyc 220000 0. 0.", "xyc 240000 0.0 0."];
var arrayReh_A_G2_WD = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100. 0.9 0.", "xyc 7000. 0.92 0.", "xyc 10000. 0.91 0.", "xyc 13000. 0.92 0.", "xyc 20000. 0.9 0.", "xyc 22000. 0.79 0.", "xyc 25000. 0.87 0.", "xyc 30000. 0.81 0.", "xyc 33000. 0.54 0.", "xyc 40000. 0.63 0.", "xyc 50000. 0.77 0.", "xyc 55000. 0.833 0.", "xyc 60000. 0.81 0."];
var arrayReh_B_G2_WD = ["setdomain 60000","clear", "xyc 0 0.81 0.", "xyc 10000 0.784 0.", "xyc 20000 0.751 0.", "xyc 30000 0.718 0.", "xyc 40000 0.686 0.", "xyc 45000 0.697 0.", "xyc 50000 0.626 0.", "xyc 57000 0.739 0.", "xyc 60000. 0.745 0."];
var arrayReh_C_G2_WD = ["setdomain 78000", "clear", "xyc 0 0.749 0.", "xyc 7000 0.757 0.", "xyc 10000 0.696 0.", "xyc 12000 0.679 0.", "xyc 14000 0.87 0.", "xyc 18000 0.938 0.", "xyc 20000 0.828 0.", "xyc 24000 0.8 0.", "xyc 27000 0.906 0.", "xyc 30000 0.907 0.", "xyc 40000 0.901 0.", "xyc 50000 0.895 0.", "xyc 60000 0.888 0.", "xyc 61000 0.909 0.", "xyc 77500 1. 0","xyc 78000 0. 0."];
var arrayVar_G2_WD = [];

////////////shape points/////////////////
// group 1
var arrayPerm_G1_SH =  ["setdomain 240000","clear", "xyc 0 0.8 0.", "xyc 240000 0.9 0."];
var arrayReh_A_G1_SH = ["setdomain 60000","clear", "xyc 0 0.8 0.", "xyc 60000 0.85 0."];
var arrayReh_B_G1_SH = ["setdomain 60000","clear", "xyc 0 0.85 0.", "xyc 60000 0.9 0."];
var arrayReh_C_G1_SH = ["setdomain 78000","clear", "xyc 0 0.9 0.", "xyc 78000 0.9 0."];
var arrayVar_G1_SH = [];
// group 2
var arrayPerm_G2_SH =  ["setdomain 240000","clear", "xyc 0 0. 0.", "xyc 100 0.2 0.", "xyc 60000 0.15 0.", "xyc 60100 0.15 0.", "xyc 120000 0. 0.", "xyc 140000 0.5 0.", "xyc 148000 0.3 0.", "xyc 151000 0.5 0.", "xyc 156000 0.3 0.", "xyc 180000 1. 0.", "xyc 182000 1. 0.", "xyc 220000 1.1 0.","xyc 240000 0. 0."];
var arrayReh_A_G2_SH = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100 0.2 0.", "xyc 60000 0.15 0."];
var arrayReh_B_G2_SH = ["setdomain 60000","clear", "xyc 0 0. 0.", "xyc 100 0.15 0.", "xyc 60000 0. 0."];
var arrayReh_C_G2_SH = ["setdomain 78000","clear", "xyc 0 0. 0.", "xyc 20000 0.5 0.", "xyc 28000 0.3 0.", "xyc 31000 0.5 0.", "xyc 36000 0.3 0.", "xyc 60000 1. 0.", "xyc 77000 1. 0.", "xyc 78000 0. 0."];
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


// triggers function graphs after points are filled
function startFunc() {
	   outlet(6, bang);
	}


// logic to match user input to desired arrays
function msg_int(v){

	///////performance
	if (v == 1) {
		arrayVar_G1 = arrayPerm_G1;
		arrayVar_G2 = arrayPerm_G2;
		
		arrayVar_G1_WD = arrayPerm_G1_WD;
		arrayVar_G2_WD = arrayPerm_G2_WD;
				
		arrayVar_G1_SH = arrayPerm_G1_SH;
		arrayVar_G2_SH = arrayPerm_G2_SH;
		
		mytask(arrayVar_G1, arrayVar_G2, arrayVar_G1_WD, arrayVar_G2_WD, arrayVar_G1_SH, arrayVar_G2_SH);
	}
	
	///////rehearsal A
	else if (v == 2) {
		arrayVar_G1 = arrayReh_A_G1;
		arrayVar_G2 = arrayReh_A_G2;
		
		arrayVar_G1_WD = arrayReh_A_G1_WD;
		arrayVar_G2_WD = arrayReh_A_G2_WD;		
		
		arrayVar_G1_SH = arrayReh_A_G1_SH;		
		arrayVar_G2_SH = arrayReh_A_G2_SH;							
										
		mytask(arrayVar_G1, arrayVar_G2, arrayVar_G1_SH, arrayVar_G2_SH, arrayVar_G1_WD, arrayVar_G2_WD);
	}	
	
	///////rehearsal B
	else if (v == 3) {
		arrayVar_G1 = arrayReh_B_G1;
		arrayVar_G2 = arrayReh_B_G2;
		
		arrayVar_G1_WD = arrayReh_B_G1_WD;
		arrayVar_G2_WD = arrayReh_B_G2_WD;		
		
		arrayVar_G1_SH = arrayReh_B_G1_SH;					
		arrayVar_G2_SH = arrayReh_B_G2_SH;	
										
		mytask(arrayVar_G1, arrayVar_G2, arrayVar_G1_SH, arrayVar_G2_SH, arrayVar_G1_WD, arrayVar_G2_WD);
	}	
	
	///////rehearsal C
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


// fills in an empty array with specific reh/performance points to fill in function objects
function mytask(){	
	// group 1
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
	
	// group 2
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


