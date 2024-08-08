import { add, create } from 'lodash';
import './style.css';
import { shipblackgm } from './shipgamer.js'; 

var x = 0; // true clicks counter
var test = 0; // this var is just like a witnes for cellclicks function
var test2 = 0;
//var perp = 0; // pern var in third three cell ship
var anum = 0; // var to enumerate the first row numbers
var ascii = 64; // var to put letters in the first column letters
var cell0 = 0;
var cell1 = 0;

function boardshippc (){ // ----------------------------------create the boardahip with numbers and letters ----------------------------
 var boardshipcont = document.createElement('table');
 for (let i = 0; i < 11; i++) {
    var tr = document.createElement('tr'); // Create a row
    for (let j = 0; j < 11; j++) {
        var td = document.createElement('td');// Create a cell
				td.classList.add('cell');
				td.id = [i, j, 4]; // --------------------------------------------id will be a string
				tr.appendChild(td);
				if( i == 0 ) { //numbers first row
						td.style.border = "none"; 
						td.style.cursor = "none";
						td.textContent = anum++;
				}
				if( j == 0 ) { // letters first colum
						td.style.border = "none"; 
						td.style.cursor = "none";
						td.textContent = String.fromCharCode(ascii++);
				}
				if ( i == 0 && j == 0){ td.textContent = ""; } // corner
		}
		boardshipcont.appendChild(tr);
 }
 anum = 0;
 ascii = 64;
 return boardshipcont;
}
function boardattackpc (){ // --------------------------------create board attack with numbers and letters ----------------------------
	var boardattack = document.createElement('table');
	for (let i = 0; i < 11; i++) {
		 var tr = document.createElement('tr'); // Create a row
		 for (let j = 0; j < 11; j++) {
				 var td = document.createElement('td');// Create a cell
				 td.classList.add('cell3');
				 tr.appendChild(td);
				 if( i == 0 ) { //numbers first row
						 td.style.border = "none"; 
						 td.style.cursor = "none";
						 td.textContent = anum++;
				 }
				 if( j == 0 ) { // letters first colum
						 td.style.border = "none"; 
						 td.style.cursor = "none";
						 td.textContent = String.fromCharCode(ascii++);
				 }
				 td.id = [i, j, 2]; //------------------------------------------it will be a string
				 if ( i == 0 && j == 0){ td.textContent = ""; } // corner
		 }
		 boardattack.appendChild(tr);
	}
	anum = 0;
	ascii = 64;
	return boardattack;
 }
function clickattackpc (){  // -------------------------------random function to simulate clicks on board attack----------------------------------
	cell0 = Math.floor((Math.random() * 10) + 1); // random whole number between 1 and 10 (inclusive)
	cell1 = Math.floor((Math.random() * 10) + 1);
	if (document.getElementById([cell0,cell1,2]).style.backgroundColor =='') {
		document.getElementById([cell0,cell1,2]).style.backgroundColor = 'red';
		console.log("click random cell0: " + cell0 + " cell1; " + cell1)
		shipblackgm(cell0, cell1); 
	} else { clickattackpc()}
}
function cellclickpc (){  // ---------------------------------random function to simulate clicks to place pc ships on board----------------------------------
	test = 1; // this var is just a witnes 
	if (test2 == 1) { //select one of four options to get the second cell ship 2 cell ship
		let celltwo = Math.floor((Math.random() * 4) + 1);
		if (celltwo == 1) {
			cell0 = cell0 + 1;
			if (cell0 > 10){ cell0 = 9; }
		}
		if (celltwo == 2) {
			cell0 = cell0 - 1;
			if (cell0 < 1){ cell0 = 2; }
		} 
		if (celltwo == 3) {
			cell1 = cell1 + 1;
			if (cell1 > 10){ cell1 = 9; }
		}
		if (celltwo == 4) {
			cell1 = cell1 - 1;
			if (cell1 < 1){ cell1 = 2; }
		}
		test2 = 0;
	} else { //
		cell0 = Math.floor((Math.random() * 10) + 1); // random whole number between 1 and 10 (inclusive)
		cell1 = Math.floor((Math.random() * 10) + 1);
		//console.log("random click pc cell0: " + cell0 + " cell1: " + cell1);
	}
	placeships(cell0, cell1);
}
function cellcolorblue (cell0, cell1) {   //------------------2 & 3 cells ships; check cell clicked dont be another ship using blue color as identifier
	if (document.getElementById([cell0, cell1, 4]).style.backgroundColor == 'blue') { return true }
	else { return false }
}
function shipblue (cell0, cell1) {  // -----------------------paint cell with lightblue-------------------------------
	document.getElementById([cell0,cell1,4]).style.backgroundColor = 'blue';
	//console.log("cello: " + a + "  " + " cell1: " + b)
}
function shipblackpc (cell0, cell1) {  // ---------------------paint cell black when gets a attack-------------------------------
	document.getElementById([cell0,cell1,4]).style.backgroundColor = 'black';
	var classn = document.getElementById([cell0,cell1,4]).classList;
	if (classn.length == 2) {
		let a = classn[1];
		console.log("shipblackpc classn: " + a);
		if (a == "ship1p") { ship1p.attacks ++}
		if (a == "ship2p") { ship2p.attacks ++}
		if (a == "ship3p") { ship3p.attacks ++}
		if (a == "ship4p") { ship4p.attacks ++}
		if (a == "ship5p") { ship5p.attacks ++}
		console.log("ship1p: " + ship1p.attacks + " ship2p: " + ship2p.attacks + " ship3p: " + ship3p.attacks + " ship4p: " + ship4p.attacks + " ship5p: " + ship5p.attacks)
	} 
	else { classn = classn[0] }	
}
function lasttwocells (a, b, c) { //--------------------------function to place last two cells of fourth nd fifthy ships
	if (a < 9 && a > 2 && b < 9 && b > 2){ //------------------------------------------------------central square
		//console.log("iniside III")
		if (cellcolorblue (a + 1, b) == false && cellcolorblue (a + 2, b) == false){ //down 
			shipblue (a + 1, b);
			shipblue (a + 2, b);
			document.getElementById([a + 1, b, 4]).classList.add(c);
			document.getElementById([a + 2, b, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a - 1, b) == false && cellcolorblue (a - 2, b) == false){ // up
			shipblue (a - 1, b);
			shipblue (a - 2, b);
			document.getElementById([a - 1, b, 4]).classList.add(c);
			document.getElementById([a - 2, b, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a, b + 1) == false && cellcolorblue (a, b + 2) == false){ // right
			shipblue (a, b + 1);
			shipblue (a, b + 2);
			document.getElementById([a, b + 1, 4]).classList.add(c);
			document.getElementById([a, b + 2, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a, b - 1) == false && cellcolorblue (a, b - 2) == false){ // left
			shipblue (a, b - 1);
			shipblue (a, b - 2);
			document.getElementById([a, b - 1, 4]).classList.add(c);
			document.getElementById([a, b - 2, 4]).classList.add(c);
		}
		else {
			shipblue (9, 9);
		}
	} else 
	if (b > 2 && b < 9 && a < 3){ //---------------------------------------------------------------rectangle up
		if(cellcolorblue (a, b + 1) == false && cellcolorblue (a, b + 2) == false){ // right
			shipblue (a, b + 1);
			shipblue (a, b + 2);
			document.getElementById([a, b + 1, 4]).classList.add(c);
			document.getElementById([a, b + 2, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a, b - 1) == false && cellcolorblue (a, b - 2) == false){ // left
			shipblue (a, b - 1);
			shipblue (a, b - 2);
			document.getElementById([a, b - 1, 4]).classList.add(c);
			document.getElementById([a, b - 2, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a + 1, b) == false && cellcolorblue (a + 2, b) == false){ //down 
			shipblue (a + 1, b);
			shipblue (a + 2, b);
			document.getElementById([a + 1, b, 4]).classList.add(c);
			document.getElementById([a + 2, b, 4]).classList.add(c);
		} 
	} else
	if (b > 2 && b < 9 && a > 8){ //---------------------------------------------------------------rectangle down
		if (cellcolorblue (a - 1, b) == false && cellcolorblue (a - 2, b) == false){ // up
			shipblue (a - 1, b);
			shipblue (a - 2, b);
			document.getElementById([a - 1, b, 4]).classList.add(c);
			document.getElementById([a - 2, b, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a, b + 1) == false && cellcolorblue (a, b + 2) == false){ // right
			shipblue (a, b + 1);
			shipblue (a, b + 2);
			document.getElementById([a, b + 1, 4]).classList.add(c);
			document.getElementById([a, b + 2, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a, b - 1) == false && cellcolorblue (a, b - 2) == false){ // left
			shipblue (a, b - 1);
			shipblue (a, b - 2);
			document.getElementById([a, b - 1, 4]).classList.add(c);
			document.getElementById([a, b - 2, 4]).classList.add(c);
		}
	} else
	if (a > 2 && a < 9 && b < 3){ //---------------------------------------------------------------rectangle left
		if (cellcolorblue (a + 1, b) == false && cellcolorblue (a + 2, b) == false){ //down 
			shipblue (a + 1, b);
			shipblue (a + 2, b);
			document.getElementById([a + 1, b, 4]).classList.add(c);
			document.getElementById([a + 2, b, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a - 1, b) == false && cellcolorblue (a - 2, b) == false){ // up
			shipblue (a - 1, b);
			shipblue (a - 2, b);
			document.getElementById([a - 1, b, 4]).classList.add(c);
			document.getElementById([a - 2, b, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a, b + 1) == false && cellcolorblue (a, b + 2) == false){ // right
			shipblue (a, b + 1);
			shipblue (a, b + 2);
			document.getElementById([a, b + 1, 4]).classList.add(c);
			document.getElementById([a, b + 2, 4]).classList.add(c);

		}
	} else 
	if (a > 2 && a < 9 && b > 8){ //---------------------------------------------------------------rectangle right
		if (cellcolorblue (a + 1, b) == false && cellcolorblue (a + 2, b) == false){ //down 
			shipblue (a + 1, b);
			shipblue (a + 2, b);
			document.getElementById([a + 1, b, 4]).classList.add(c);
			document.getElementById([a + 2, b, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a - 1, b) == false && cellcolorblue (a - 2, b) == false){ // up
			shipblue (a - 1, b);
			shipblue (a - 2, b);
			document.getElementById([a - 1, b, 4]).classList.add(c);
			document.getElementById([a - 2, b, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a, b - 1) == false && cellcolorblue (a, b - 2) == false){ // left
			shipblue (a, b - 1);
			shipblue (a, b - 2);
			document.getElementById([a, b - 1, 4]).classList.add(c);
			document.getElementById([a, b - 2, 4]).classList.add(c);
		}
	} else 
	if (a < 3 && b < 3) {         //---------------------------------------------------------------corner left and up 
		if (cellcolorblue (a + 1, b) == false && cellcolorblue (a + 2, b) == false){ //down 
			shipblue (a + 1, b);
			shipblue (a + 2, b);
			document.getElementById([a + 1, b, 4]).classList.add(c);
			document.getElementById([a + 2, b, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a, b + 1) == false && cellcolorblue (a, b + 2) == false){ // right
			shipblue (a, b + 1);
			shipblue (a, b + 2);
			document.getElementById([a, b + 1, 4]).classList.add(c);
			document.getElementById([a, b + 2, 4]).classList.add(c);
		}
	} else
	if (a < 3 && b > 8){          //---------------------------------------------------------------corner right and up 
		if (cellcolorblue (a + 1, b) == false && cellcolorblue (a + 2, b) == false){ //down 
			shipblue (a + 1, b);
			shipblue (a + 2, b);
			document.getElementById([a + 1, b, 4]).classList.add(c);
			document.getElementById([a + 2, b, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a, b - 1) == false && cellcolorblue (a, b - 2) == false){ // left
			shipblue (a, b - 1);
			shipblue (a, b - 2);
			document.getElementById([a, b - 1, 4]).classList.add(c);
			document.getElementById([a, b - 2, 4]).classList.add(c);
		}
	} else
	if (a > 8 && b < 3){          //---------------------------------------------------------------corner left and down 
		if (cellcolorblue (a - 1, b) == false && cellcolorblue (a - 2, b) == false){ // up
			shipblue (a - 1, b);
			shipblue (a - 2, b);
			document.getElementById([a - 1, b, 4]).classList.add(c);
			document.getElementById([a - 2, b, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a, b + 1) == false && cellcolorblue (a, b + 2) == false){ // right
			shipblue (a, b + 1);
			shipblue (a, b + 2);
			document.getElementById([a, b + 1, 4]).classList.add(c);
			document.getElementById([a, b + 2, 4]).classList.add(c);
		}
	} else
	if(a > 8 && b > 8){           //---------------------------------------------------------------corner right and down 
		if (cellcolorblue (a - 1, b) == false && cellcolorblue (a - 2, b) == false){ // up
			shipblue (a - 1, b);
			shipblue (a - 2, b);
			document.getElementById([a - 1, b, 4]).classList.add(c);
			document.getElementById([a - 2, b, 4]).classList.add(c);
		} else 
		if (cellcolorblue (a, b - 1) == false && cellcolorblue (a, b - 2) == false){ // left
			shipblue (a, b - 1);
			shipblue (a, b - 2);
			document.getElementById([a, b - 1, 4]).classList.add(c);
			document.getElementById([a, b - 2, 4]).classList.add(c);
		}
	}
}
function placeships(a, b) {  //-------------------------------placing all ships-----------------------------------------
	if (x < 2) {  //------------------------------------placing ship1 --------------
		if( ship1p.size == 0 && test == 1){
			shipblue (a, b);
			ship1p.position = [a,b];
			x++; // v = 1
			test = 0;
			test2 = 1
			ship1p.size = 1;
			document.getElementById([a, b, 4]).classList.add("ship1p");
			//console.log("shipcell 11");
			cellclickpc();
		}
		if(ship1p.size == 1 && test == 1 && cellcolorblue(a, b) == false){ //shipcell2(a, b, ship3.position) == true &&
			shipblue (a, b);
			x++; // x = 2
			test = 0;
			test2 = 0;
			document.getElementById([a, b, 4]).classList.add("ship1p");
			//console.log("shipcell 12");
		}
		test = 0;
		//console.log("ship1, x must be 2 " + x)
		//ship1.sizeok1();
		cellclickpc();
	}
	if (1 < x && x < 4 && test == 1) {  //--------------placing ship2 --------------
		if( ship2p.size == 0 && test == 1 && (cellcolorblue(a, b) == false)){
			shipblue (a, b);
			ship2p.position = [a,b];
			x++;  // x = 3
			test = 0;
			test2 = 1;
			ship2p.size = 1;
			document.getElementById([a, b, 4]).classList.add("ship2p");
			//console.log("shipcell 21");
			cellclickpc();
		}
		if(ship2p.size == 1 && test ==1 && cellcolorblue(a, b) == false){
			shipblue (a, b);
			x++;  // x = 4
			test = 0;
			test2 = 0;
			document.getElementById([a, b, 4]).classList.add("ship2p");
			//console.log("shipcell 22");
		}
		test = 0;
		//console.log("ship2, x must be 4 " + x);
		cellclickpc();
	}
	if (3 < x && x < 6 && test == 1) {  //--------------placing ship3 --------------
		if( ship3p.size == 0 && test == 1 && cellcolorblue(a, b) == false){
			shipblue (a, b);
			ship3p.position = [a,b];
			x++; // v = 5
			test = 0;
			test2 = 1
			ship3p.size = 1;
			document.getElementById([a, b, 4]).classList.add("ship3p");
			//console.log("shipcell 31");
			cellclickpc();
		} 
		if(ship3p.size == 1 && test == 1 && cellcolorblue(a, b) == false){ //shipcell2(a, b, ship3.position) == true &&
			shipblue (a, b);
			x++; // x = 6
			test = 0;
			test2 = 0;
			document.getElementById([a, b, 4]).classList.add("ship3p");
			//console.log("shipcell 32");
		}
		test = 0;
		//console.log("ship3, x must be 6! " + x);
		cellclickpc();
	}
	if (x == 6 && test == 1) {  //----------------------placing ship4p ---------------
		if( ship4p.size == 0 && test == 1 && cellcolorblue(a, b) == false){ // placing first cell of the fourth ship
			shipblue (a, b);
			ship4p.position = [a,b];
			x++; // x = 7
			test = 3;
			ship4p.size = 1;
			document.getElementById([a, b, 4]).classList.add("ship4p");
			//console.log("first shipcell 41 " + "cell0: " + a + " cell1: " + b );
		}
		if(ship4p.size == 1 && test == 3){ // placing second and third cells of the fourth ship
			test = 0;
			ship4p.size = 3;
			//console.log("ship5 2 and 3 cells")
            lasttwocells(a, b, "ship4p");
		}	
		test = 0;
		//console.log("ship 41, x must be 7: " + x)
		cellclickpc();
	}
	if (x == 7 && test == 1) {  //----------------------placing ship5 ---------------
		if( ship5p.size == 0 && test == 1 && cellcolorblue(a, b) == false){ // place first cell of the fourth ship
			shipblue (a, b);
			ship5p.position = [a,b];
			x++; // x = 8
			test = 4;
			ship5p.size = 1;
			document.getElementById([a, b, 4]).classList.add("ship5p");
			//console.log("first 51 " + "cell0: " + a + " cell1: " + b );
		}
		if(ship5p.size == 1 && test == 4){ // placing second and third cells of the fourth ship
			test = 0;
			ship5p.size = 3;
			//console.log("ship5 2 and 3 cells")
			lasttwocells(a, b, "ship5p");
		}	
		test = 0;
		//console.log("ship 5, x must be 8: " + x)
		//for (let i = 0; i < 3; i++){clickattackpc()}
	}
	// let shipclass = document.getElementsByClassName("ship4p")
	// console.log("class ship4p: " + shipclass.length)
}


var ship1p = { // -------------------------------------------two cells ships ------------------------------------
	name: "ship1",
	size: 0,
	position: [],
	orientation: "",
	attacks: 0,
	sunk: false,
	sizeok1 (){if (ship1p.size == 1){console.log("ship1 size ok")}}
}
var ship2p = {
	name: "ship2",
	size: 0,
	position: [],
	orientation: "",
	attacks: 0,
	sunk: false
}
var ship3p = {
	name: "ship3",
	size: 0,
	position: [],
	orientation: "",
	attacks: 0,
	sunk: false
}
var ship4p = { // -------------------------------------------trhee cells ships ----------------------------
	name: "ship4p",
	size: 0,
	position: [],
	orientation: "",
	attacks: 0,
	sunk: false,
	sizeok4 (){if (ship4p.size == 2){console.log("ship5 size ok")} else {console.log("ship5 size no ok")}}
}
var ship5p = {
	name: "ship5",
	size: 0,
	position: [],
	orientation: "",
	attacks: 0,
	functionattacks(){
		if (ship5p.attacks == 2){
			console.log("ship5 3 attacks!")
		}
	},
	sunk: false,
	sizeok5 (){if (ship5p.size == 2){console.log("ship5 size ok")} else {console.log("ship5 size no ok")}}
}


class ship{  // create ship by fubction still in constuction
	constructor(name, lenght){
		this.name = name;
		this.lenght = lenght;
	}
	lenght = 3;
	hits = 0;
	hit(){this.hits++;}
	isSunk(){if(hits>=3){console.log("ship's been sunk")} }
}
var gamersships =  [ // create ship by fubction still in constuction
	{
		name: 1,
		size: 2,
		position: [],
		orientation: "",
		attacks: 0,
		sunk: false		
	},
	{
		name: 2,
		size: 2,
		position: [],
		orientation: "",
		attacks: 0,
		sunk: false		
	},
	{
		name: 3,
		size: 2,
		position: [],
		orientation: "",
		attacks: 0,
		sunk: false		
	}
]



export { boardshippc, cellclickpc, boardattackpc, clickattackpc, shipblackpc};
