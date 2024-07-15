import { add, create } from 'lodash';
import './style.css';

function boardship (){ // create the board with numbers and letters 
 var a = 0; // var to enumerate the first row
 var ascii = 64; // var to put letters in the first column
 var boardshipcont = document.createElement('table');
 for (let i = 0; i < 11; i++) {
    var tr = document.createElement('tr'); // Create a row
    for (let j = 0; j < 11; j++) {
        var td = document.createElement('td');// Create a cell
				td.classList.add('cell');
				td.id = [i, j]; // it will be a string
				tr.appendChild(td);
				if( i == 0 ) { //number first row
						td.style.border = "none"; 
						td.style.cursor = "none";
						td.textContent = a++;
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
 return boardshipcont;
}

var x = 0; // true clicks counter
var test = 0; // this var is just a witnes 
function cellclick (){  // listen clicks on board
	var celllist = document.getElementsByClassName('cell');
	for (let i = 12 ; i < celllist.length; i++) {
		celllist[i].addEventListener('click', function (e) { 
			test = 1; // this var is just a witnes 
			//console.log("celllist: " + celllist[i].id)
			var cell0 = +(celllist[i].id)[0];      // first, take the string and convert to number
			var cell1 = +(celllist[i].id)[2];
			if ((celllist[i].id).length == 4 && (celllist[i].id)[1] == ","){cell1 = 10}
			if ((celllist[i].id).length == 4 && (celllist[i].id)[2] == ","){cell0 = 10; cell1 = +(celllist[i].id)[3];}	
			if ((celllist[i].id).length == 5 && (celllist[i].id)[2] == ","){cell0 = 10; cell1 = 10}
			if (cell0 > 0 && cell0 < 11 && cell1 > 0 && cell1 < 11){ placeships(cell0, cell1)}
		});
	}
}

function shipcell2 (cell0, cell1, shippos) {     // check cells aroud looking for the same ship comparing cell id
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

function cellcolorblue (cell0, cell1) {    // check cell clicked dont be another ship using blue color as identifier
	if (document.getElementById([cell0, cell1]).style.backgroundColor == 'lightblue') { return true }
	else { return false }
}

function shipblue (a, b) {
	//console.log("inside shipblue ");
	document.getElementById([a,b]).style.backgroundColor = 'lightblue';
}

function placeships(a, b) {  
	if (x < 2 && test == 1) {  //--------------place ship1 cells--------------
		if( ship1.size == 0){
			shipblue (a, b);
			ship1.position = [a,b];
			x++;  // x = 1
		}
		if(ship1.size == 1 && shipcell2(a, b, ship1.position) == true  && (cellcolorblue(a, b) == false)) {
			shipblue (a, b);
			x++;  // x = 2
		}
		if (ship1.size == 0){ship1.size = 1;} // dont get into first if again niether second if
		test = 0;
	}
	if (1 < x && x < 4 && test == 1) {  //--------------place ship2 cells--------------
		if( ship2.size == 0 && (cellcolorblue(a, b) == false)){
			shipblue (a, b);
			ship2.position = [a,b];
			x++;  // x = 3
		}
		if(ship2.size == 1 && shipcell2(a, b, ship2.position) == true && cellcolorblue(a, b) == false){
			shipblue (a, b);
			x++;  // x = 4
		}
		if (ship2.size == 0){ship2.size = 1}
		test = 0;
		console.log("x2: " + x);
	}
	if (3 < x && x < 6 && test == 1) {  //--------------place ship3 cells--------------
		console.log("x3: " + x);
		if( ship3.size == 0 && (cellcolorblue(a, b) == false)){
			shipblue (a, b);
			ship3.position = [a,b];
			x++;
		}
		if(ship3.size == 1 && shipcell2(a, b, ship3.position) == true && cellcolorblue(a, b) == false){
			shipblue (a, b);
			x++;
		}
		if (ship3.size == 0){ship3.size = 1} 
		test = 0;
	}
}

// function removecursor (celllist) {
// 	for (let i = 12 ; i < celllist.length; i++) {celllist[i].style.cursor = "none";}
// }

class ship{
	constructor(name, lenght){
		this.name = name;
		this.lenght = lenght;
	}
	lenght = 3;
	hits = 0;
	hit(){this.hits++;}
	isSunk(){if(hits>=3){console.log("ship's been sunk")} }
}

//var shipsgamer = [];

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

const ship1 = {
name: "ship1",
size: 0,
position: [],
orientation: "",
attacks: 0,
sunk: false
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

// function tostringid (a, b) {
// 	let astring = String(a);
// 	let bstring = String(b);
// 	let stringid = astring + "," + bstring;
// 	stringid = String(stringid)
// 	console.log("stringid typeof: " + stringid);
// 	return stringid;
//  }

export { boardship, cellclick};
