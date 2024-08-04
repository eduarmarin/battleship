import { add, create } from 'lodash';
import './style.css';

var x = 0; // true clicks counter
var test = 0; // this var is just like a witnes for cellclicks function
var test2 = 0;
var perp = 0; // pern var in third three cell ship
var anum = 0; // var to enumerate the first row
var ascii = 64; // var to put letters in the first column
var cell0 = 0;
var cell1 = 0;

function boardshippc (){ // ----------------------------------create the board with numbers and letters ----------------------------
 var boardshipcont = document.createElement('table');
 for (let i = 0; i < 11; i++) {
    var tr = document.createElement('tr'); // Create a row
    for (let j = 0; j < 11; j++) {
        var td = document.createElement('td');// Create a cell
				td.classList.add('cell');
				td.id = [i, j]; // it will be a string
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
				 td.classList.add('cell2');
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
				 td.id = [i, j, 1]; // it will be a string
				 if ( i == 0 && j == 0){ td.textContent = ""; } // corner
		 }
		 boardattack.appendChild(tr);
	}
	anum = 0;
	ascii = 64;
	return boardattack;
 }
function clickattackpc (){  // -------------------------------listen clicks on board attack----------------------------------
	var celllist = document.getElementsByClassName('cell2');
	for (let i = 12 ; i < celllist.length; i++) {
		celllist[i].addEventListener('click', function (e) { 
			this.style.backgroundColor = 'red';
			console.log("attacck: " + this.id)
			// test = 1; // this var is just a witnes 
			// var cell0 = +(celllist[i].id)[0];      // first, take the string and convert to number
			// var cell1 = +(celllist[i].id)[2];
			// if ((celllist[i].id).length == 4 && (celllist[i].id)[1] == ","){cell1 = 10}
			// if ((celllist[i].id).length == 4 && (celllist[i].id)[2] == ","){cell0 = 10; cell1 = +(celllist[i].id)[3];}	
			// if ((celllist[i].id).length == 5 && (celllist[i].id)[2] == ","){cell0 = 10; cell1 = 10}
			// if (cell0 > 0 && cell0 < 11 && cell1 > 0 && cell1 < 11){ shipblue(cell0, cell1)}
		});
	}
}
function cellclickpc (){  // ---------------------------------random clicks pc board----------------------------------
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
	if (document.getElementById([cell0, cell1]).style.backgroundColor == 'blue') { return true }
	else { return false }
}
function shipblue (cell0, cell1) {  // -----------------------paint cell with lightblue-------------------------------
	//console.log("inside shipblue ");
	document.getElementById([cell0,cell1]).style.backgroundColor = 'blue';
	//console.log("cello: " + a + "  " + " cell1: " + b)
}
function placeships(a, b) {  //-------------------------------place all ships-----------------------------------------
	if (x < 2) {  //------------------------------------place ship1 --------------
		if( ship1.size == 0 && test == 1){
			shipblue (a, b);
			ship1.position = [a,b];
			x++; // v = 1
			test = 0;
			test2 = 1
			ship1.size = 1;
			//console.log("shipcell 11");
			cellclickpc();
		}
		if(ship1.size == 1 && test == 1 && cellcolorblue(a, b) == false){ //shipcell2(a, b, ship3.position) == true &&
			shipblue (a, b);
			x++; // x = 2
			test = 0;
			test2 = 0;
			//console.log("shipcell 12");
		}
		test = 0;
		console.log("ship1, x must be 2 " + x)
		//ship1.sizeok1();
		cellclickpc();
	}
	if (1 < x && x < 4 && test == 1) {  //--------------place ship2 --------------
		if( ship2.size == 0 && test == 1 && (cellcolorblue(a, b) == false)){
			shipblue (a, b);
			ship2.position = [a,b];
			x++;  // x = 3
			test = 0;
			test2 = 1;
			ship2.size = 1;
			//console.log("shipcell 21");
			cellclickpc();
		}
		if(ship2.size == 1 && test ==1 && cellcolorblue(a, b) == false){
			shipblue (a, b);
			x++;  // x = 4
			test = 0;
			test2 = 0;
			//console.log("shipcell 22");
		}
		test = 0;
		console.log("ship2, x must be 4 " + x);
		cellclickpc();
	}
	if (3 < x && x < 6 && test == 1) {  //--------------place ship3 --------------
		if( ship3.size == 0 && test == 1 && cellcolorblue(a, b) == false){
			shipblue (a, b);
			ship3.position = [a,b];
			x++; // v = 5
			test = 0;
			test2 = 1
			ship3.size = 1;
			console.log("shipcell 31");
			cellclickpc();
		} 
		if(ship3.size == 1 && test == 1 && cellcolorblue(a, b) == false){ //shipcell2(a, b, ship3.position) == true &&
			shipblue (a, b);
			x++; // x = 6
			test = 0;
			test2 = 0;
			console.log("shipcell 32");
		}
		test = 0;
		console.log("ship3, x must be 6! " + x);
		cellclickpc();
	}
	if (5 < x && x < 9 && test == 1) {  //--------------place ship4 ---------------
		if( ship4.size == 0 && test == 1 && cellcolorblue(a, b) == false){
			shipblue (a, b);
			ship4.position = [a,b];
			x++; // x = 7
			test = 4;
			ship4.size = 1;
			console.log("first shipcell 41 " + "cell0: " + a + " cell1: " + b );
		}
		if(ship4.size == 1 && test == 4){
			console.log("iniside II")
			let randdom1 = Math.floor((Math.random() * 4) + 1);
			if (a < 9 && a > 2 && b < 9 && b > 2){ //------------------------------------------------------central square
				console.log("iniside III")
				if (cellcolorblue (a + 1, b) == false && cellcolorblue (a + 2, b) == false){ //down 
					console.log("down, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a + 1, b);
					shipblue (a + 2, b);
				} else 
				if (cellcolorblue (a - 1, b) == false && cellcolorblue (a - 2, b) == false){ // up
					console.log("up, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a - 1, b);
					shipblue (a - 2, b);
				} else 
				if (cellcolorblue (a, b + 1) == false && cellcolorblue (a, b + 2) == false){ // right
					console.log("right, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a, b + 1);
					shipblue (a, b + 2);
				} else 
				if (cellcolorblue (a, b - 1) == false && cellcolorblue (a, b - 2) == false){ // left
					console.log("left, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a, b - 1);
					shipblue (a, b - 2);
				}
				else {
					shipblue (9, 9);
				}
			} else 
			if (b > 2 && b < 9 && a < 3){ //---------------------------------------------------------------rectangle up
				if(cellcolorblue (a, b + 1) == false && cellcolorblue (a, b + 2) == false){ // right
					console.log("right, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a, b + 1);
					shipblue (a, b + 2);
				} else 
				if (cellcolorblue (a, b - 1) == false && cellcolorblue (a, b - 2) == false){ // left
					console.log("left, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a, b - 1);
					shipblue (a, b - 2);
				} else 
				if (cellcolorblue (a + 1, b) == false && cellcolorblue (a + 2, b) == false){ //down 
					console.log("down, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a + 1, b);
					shipblue (a + 2, b);
				} 
			} else
			if (b > 2 && b < 9 && a > 8){ //---------------------------------------------------------------rectangle down
				if (cellcolorblue (a - 1, b) == false && cellcolorblue (a - 2, b) == false){ // up
					console.log("up, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a - 1, b);
					shipblue (a - 2, b);
				} else 
				if (cellcolorblue (a, b + 1) == false && cellcolorblue (a, b + 2) == false){ // right
					console.log("right, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a, b + 1);
					shipblue (a, b + 2);
				} else 
				if (cellcolorblue (a, b - 1) == false && cellcolorblue (a, b - 2) == false){ // left
					console.log("left, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a, b - 1);
					shipblue (a, b - 2);
				}
			} else
			if (a > 2 && a < 9 && b < 3){ //---------------------------------------------------------------rectangle left
				if (cellcolorblue (a + 1, b) == false && cellcolorblue (a + 2, b) == false){ //down 
					console.log("down, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a + 1, b);
					shipblue (a + 2, b);
				} else 
				if (cellcolorblue (a - 1, b) == false && cellcolorblue (a - 2, b) == false){ // up
					console.log("up, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a - 1, b);
					shipblue (a - 2, b);
				} else 
				if (cellcolorblue (a, b + 1) == false && cellcolorblue (a, b + 2) == false){ // right
					console.log("right, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a, b + 1);
					shipblue (a, b + 2);
				}
			} else 
			if (a > 2 && a < 9 && b > 8){ //---------------------------------------------------------------rectangle right
				if (cellcolorblue (a + 1, b) == false && cellcolorblue (a + 2, b) == false){ //down 
					console.log("down, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a + 1, b);
					shipblue (a + 2, b);
				} else 
				if (cellcolorblue (a - 1, b) == false && cellcolorblue (a - 2, b) == false){ // up
					console.log("up, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a - 1, b);
					shipblue (a - 2, b);
				} else 
				if (cellcolorblue (a, b - 1) == false && cellcolorblue (a, b - 2) == false){ // left
					console.log("left, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a, b - 1);
					shipblue (a, b - 2);
				}
			} else 
			if (a < 3 && b < 3) {         //---------------------------------------------------------------corner left and up 
				if (cellcolorblue (a + 1, b) == false && cellcolorblue (a + 2, b) == false){ //down 
					console.log("down, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a + 1, b);
					shipblue (a + 2, b);
				} else 
				if (cellcolorblue (a, b + 1) == false && cellcolorblue (a, b + 2) == false){ // right
					console.log("right, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a, b + 1);
					shipblue (a, b + 2);
				}
			} else
			if (a < 3 && b > 8){          //---------------------------------------------------------------corner right and up 
				if (cellcolorblue (a + 1, b) == false && cellcolorblue (a + 2, b) == false){ //down 
					console.log("down, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a + 1, b);
					shipblue (a + 2, b);
				} else 
				if (cellcolorblue (a, b - 1) == false && cellcolorblue (a, b - 2) == false){ // left
					console.log("left, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a, b - 1);
					shipblue (a, b - 2);
				}
			} else
			if (a > 8 && b < 3){          //---------------------------------------------------------------corner left and down 
				if (cellcolorblue (a - 1, b) == false && cellcolorblue (a - 2, b) == false){ // up
					console.log("up, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a - 1, b);
					shipblue (a - 2, b);
				} else 
				if (cellcolorblue (a, b + 1) == false && cellcolorblue (a, b + 2) == false){ // right
					console.log("right, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a, b + 1);
					shipblue (a, b + 2);
				}
			} else
			if(a > 8 && b > 8){           //---------------------------------------------------------------corner right and down 
				if (cellcolorblue (a - 1, b) == false && cellcolorblue (a - 2, b) == false){ // up
					console.log("up, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a - 1, b);
					shipblue (a - 2, b);
				} else 
				if (cellcolorblue (a, b - 1) == false && cellcolorblue (a, b - 2) == false){ // left
					console.log("left, randdom1: " + randdom1 + " a: " + a + " b " + b)
					shipblue (a, b - 1);
					shipblue (a, b - 2);
				}
			}
			}	
		test = 0;
		console.log("ship 41, x must be 7: " + x)
		//cellclickpc();
	}

}
const ship1 = { // -------------------------------------------two cells ships ------------------------------------
name: "ship1",
size: 0,
position: [],
orientation: "",
attacks: 0,
sunk: false,
sizeok1 (){if (ship1.size == 1){console.log("ship1 size ok")}}

}
const ship2 = {
	name: "ship2",
	size: 0,
	position: [],
	orientation: "",
	attacks: 0,
	sunk: false
	}
const ship3 = {
	name: "ship3",
	size: 0,
	position: [],
	orientation: "",
	attacks: 0,
	sunk: false
	}
const ship4 = { // -------------------------------------------trhee cells ships ----------------------------
name: "ship4",
size: 0,
position: [],
orientation: "",
attacks: 0,
sunk: false
}
const ship5 = {
	name: "ship5",
	size: 0,
	position: [],
	orientation: "",
	attacks: 0,
	sunk: false,
	sizeok5 (){if (ship5.size == 2){console.log("ship5 size ok")} else {console.log("ship5 size no ok")}}
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



export { boardshippc, cellclickpc, boardattackpc, clickattackpc };
