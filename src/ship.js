import { add, create } from 'lodash';
import './style.css';

var x = 4; // true clicks counter
var test = 0; // this var is just like a witnes for cellclicks function
var perp = []; // pern var in third three cell ship
var anum = 0; // var to enumerate the first row
var ascii = 64; // var to put letters in the first column

function boardship (){ // ----------------------------------create the board with numbers and letters ----------------------------
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

function boardattack (){ // --------------------------------create board attack with numbers and letters ----------------------------
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

function clickattack (){  // -------------------------------listen clicks on board----------------------------------
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

function cellclick (){  // ---------------------------------listen clicks on board----------------------------------
	var celllist = document.getElementsByClassName('cell');
	for (let i = 12 ; i < celllist.length; i++) {
		celllist[i].addEventListener('click', function (e) { 
			test = 1; // this var is just a witnes 
			var cell0 = +(celllist[i].id)[0];      // first, take the string and convert to number
			var cell1 = +(celllist[i].id)[2];
			if ((celllist[i].id).length == 4 && (celllist[i].id)[1] == ","){cell1 = 10}
			if ((celllist[i].id).length == 4 && (celllist[i].id)[2] == ","){cell0 = 10; cell1 = +(celllist[i].id)[3];}	
			if ((celllist[i].id).length == 5 && (celllist[i].id)[2] == ","){cell0 = 10; cell1 = 10}
			if (cell0 > 0 && cell0 < 11 && cell1 > 0 && cell1 < 11){ placeships(cell0, cell1)}
		});
	}
}

function shipcell2 (cell0, cell1, shippos) {   //-----------check cells aroud looking for the same ship comparing cell id---------------------
	let a = JSON.stringify([cell0 + 1, cell1]);
	let b = JSON.stringify([cell0 - 1, cell1]); 
	let c = JSON.stringify([cell0, cell1 + 1]);
	let d = JSON.stringify([cell0, cell1 - 1]);
	let e = JSON.stringify(shippos);
	//console.log("a: " + a + " b: " + b + " c: " + c + " d: " + d + " e: " + e)
	if (a == e) { return true }
	else if (b == e) { return true }
	else if (c == e) { return true }
	else if (d == e) { return true }
	else { return false }
}

function cellcolorblue (cell0, cell1) {   //----------------2 cells ships; check cell clicked dont be another ship using blue color as identifier
	if (document.getElementById([cell0, cell1]).style.backgroundColor == 'lightblue') { return true }
	else { return false }
}

function cellcolorblue3 (cell0, cell1, shippos) {  //-------3 cells ships; check cell clicked dont be another ship using blue color as identifier
	try{var aa = document.getElementById([cell0 + 1, cell1]).style.backgroundColor} // down
	 catch(err){aa = "lightblue";} //finally {aa = "lightblue"}
	let b = document.getElementById([cell0 - 1, cell1]).style.backgroundColor // up
	try{var cc = document.getElementById([cell0, cell1 + 1]).style.backgroundColor} // right
	 catch(err){cc = "lightblue";} //finally {cc = "lightblue"}
	let d = document.getElementById([cell0, cell1 - 1]).style.backgroundColor // left

	let e = cell0 - shippos[0]; // e = - 1 --> up ;  e =  1 --> down
	let g = cell1 - shippos[1]; // g = - 1 --> left ;  g =  1 --> right

	// console.log("cell0 " + cell0 + " cell1 " + cell1 + " shippos " + shippos)
	// console.log("cellcolorblue3 " + "a: " + aa + " b: " + b + " c: " + cc + " d: " + d)
	// console.log("perpen" + " e: " + e + " g: " + g)
	
	if (g == 1 && e == 0) { 
		if (cc == "lightblue") { return false } else { perp[0] = 1; return true }
	}
	if (g == - 1 && e == 0) {
		if (d == "lightblue") { return false } else { perp[0] = 2; return true }
	}
	if (e == - 1 && g == 0) { 
		if (b == "lightblue") { return false } else { perp[0] = 3; return true }
	}
	if ( e == 1 && g == 0) { 
		if (aa == "lightblue") { return false } else { perp[0] = 4; return true }
	}
}

function cellcolorblue33 (cell0, cell1, shippos){ //--------third cell of three cells ships
	if (perp[0] == 1) { // cell0, cell1 + 1
		if (cell0 == shippos[0] && cell1 == shippos[1] + 1){return true} else{return false}
	}
	if (perp[0] == 2) { // cell0, cell1 - 1
		if (cell0 == shippos[0] && cell1 == shippos[1] - 1){return true} else{return false}
	}
	if (perp[0] == 3) { // cell0 - 1, cell1
		if (cell0 == shippos[0] - 1 && cell1 == shippos[1]){return true} else{return false}
	}
	if (perp[0] == 4) { // cell0 + 1, cell1
		if (cell0 == shippos[0] + 1 && cell1 == shippos[1]){return true} else{return false}
	}
}

function shipblue (a, b) {  // -----------------------------paint cell with lightblue-------------------------------
	//console.log("inside shipblue ");
	document.getElementById([a,b]).style.backgroundColor = 'lightblue';
}

function placeships(a, b) {  //-----------------------------place all ships-----------------------------------------
	if (x < 2) {  //------------------------------------place ship1 --------------
		if( ship1.size == 0 && test == 1){
			shipblue (a, b);
			ship1.position = [a,b];
			x++;  // x = 1
			test = 0; // this var help to get into placeships only when listen click on cellclick
			console.log("shipcell 11");
			ship1.size = 1;
		}
		if(ship1.size == 1 && test == 1 && shipcell2(a, b, ship1.position) == true  && (cellcolorblue(a, b) == false)) {
			console.log("shipcell 12");
			shipblue (a, b);
			x++;  // x = 2
			test = 0;
		}
		test = 0;
		console.log("ship1")
		ship1.sizeok();
	}
	if (1 < x && x < 4 && test == 1) {  //--------------place ship2 --------------
		if( ship2.size == 0 && test == 1 && (cellcolorblue(a, b) == false)){
			shipblue (a, b);
			ship2.position = [a,b];
			x++;  // x = 3
			test = 0;
			ship2.size = 1;
			console.log("shipcell 21");
		}
		if(ship2.size == 1 && test ==1 && shipcell2(a, b, ship2.position) == true && cellcolorblue(a, b) == false){
			shipblue (a, b);
			x++;  // x = 4
			test = 0;
			console.log("shipcell 22");
		}
		test = 0;
		console.log("ship2");
	}
	if (3 < x && x < 6 && test == 1) {  //--------------place ship3 --------------
		if( ship3.size == 0 && test == 1 && (cellcolorblue(a, b) == false)){
			shipblue (a, b);
			ship3.position = [a,b];
			x++; // v = 5
			test = 0;
			ship3.size = 1;
			//console.log("shipcell 31");
		}
		if(ship3.size == 1 && test == 1 && shipcell2(a, b, ship3.position) == true && cellcolorblue(a, b) == false){
			shipblue (a, b);
			x++; // x = 6
			test = 0;
			//console.log("shipcell 32");
		}
		test = 0;
		//console.log("ship3");
	}
	if (5 < x && x < 9 && test == 1) {  //--------------place ship4 ---------------
		if( ship4.size == 0 && test == 1 && (cellcolorblue(a, b) == false)){
			shipblue (a, b);
			ship4.position = [a,b]; // ship4.position.push([a,b]);
			x++; // x = 7
			test = 0;
			ship4.size = 1;
			console.log("shipcell 41 " );
		}
		if(ship4.size == 1 && test == 1 && cellcolorblue (a, b) == false && cellcolorblue3(a, b, ship4.position) == true){
			shipblue (a, b);
			ship4.position = [a,b];
			x++; // x = 8
			test = 0;
			ship4.size = 2;
			console.log("shipcell 42 " );
		}
		if(ship4.size == 2 && test == 1 && cellcolorblue33(a, b, ship4.position) == true){
			shipblue (a, b);
			x++; // x = 9
			test = 0;
			console.log("shipcell 43 " );
		}
		test = 0;
		console.log("ship 41")
	}
	if (8 < x && x < 12 && test == 1) { //--------------place ship5 ---------------
		if( ship5.size == 0 && test == 1 && (cellcolorblue(a, b) == false)){
			shipblue (a, b);
			ship5.position = [a,b]; // ship4.position.push([a,b]);
			x++; // x = 10
			test = 0;
			ship5.size = 1;
			console.log("shipcell 51 " );
		}
		if(ship5.size == 1 && test == 1 && cellcolorblue (a, b) == false && cellcolorblue3(a, b, ship5.position) == true){
			shipblue (a, b);
			ship5.position = [a,b];
			x++; // x = 11
			test = 0;
			ship5.size = 2;
			console.log("shipcell 52 " );
		}
		if(ship5.size == 2 && test == 1 && cellcolorblue33(a, b, ship5.position) == true){
			shipblue (a, b);
			x++; // x = 12
			test = 0;
			console.log("shipcell 53 " );
			ship5.sizeok5();
		}
		test = 0;
		console.log("ship 51")
	}
}

const ship1 = { // -----------------------------------------place two cells ships ------------------------------------
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

const ship4 = { // -----------------------------------------trhee cells ships ----------------------------
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

//ship1.sizeok1();
//ship5.sizeok5();

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



export { boardship, cellclick, boardattack, clickattack };
