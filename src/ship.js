import { add, create } from 'lodash';
import './style.css';
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

function createships ()  {
	for ( let i = 0; i < 3; i++){
		const ship = {
			name: i,
			size: 2,
			position: [],
			orientation: "",
			attacks: 0,
			sunk: false		
		}
	}
	console.log("create ship ok: " + ship.name === 2)
}

const ship1 = {
	name: "ship1",
	size: 0,
	position: [],
	orientation: "",
	attacks: 0,
	sunk: false
}

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

var x = 0; // clicks
var y = 0; // count to second cell
function cellclick (){  // listen clicks on board
	var celllist = document.getElementsByClassName('cell');
	for (let i = 12 ; i < celllist.length; i++) {
		celllist[i].addEventListener('click', function (e) { 
			console.log("celllist: " + celllist[i].id)
			var cell0 = +(celllist[i].id)[0];      // first, take the string and convert to number
			var cell1 = +(celllist[i].id)[2];
			if ((celllist[i].id).length == 4 && (celllist[i].id)[1] == ","){cell1 = 10}
			if ((celllist[i].id).length == 4 && (celllist[i].id)[2] == ","){cell0 = 10; cell1 = +(celllist[i].id)[3];}	
			if ((celllist[i].id).length == 5 && (celllist[i].id)[2] == ","){cell0 = 10; cell1 = 10}
			if (cell0 > 0 && cell0 < 11 && cell1 > 0 && cell1 < 11){ placeships(cell0, cell1)}
		});
	}
}

function shipcell2 (cell0, cell1) {     // check cells aroud looking for the same ship comparing cell id
	let a = JSON.stringify([cell0 + 1, cell1]);
	let b = JSON.stringify([cell0 - 1, cell1]); 
	let c = JSON.stringify([cell0, cell1 + 1]);
	let d = JSON.stringify([cell0, cell1 - 1]);
	let e = JSON.stringify(ship1.position);
	console.log("a: " + a + " b: " + b + " c: " + c + " d: " + d + " e: " + e)
	if (a == e) { return true }
	else if (b == e) { return true }
	else if (c == e) { return true }
	else if (d == e) { return true }
	else { return false }
}

function shipblue (a, b) {
	document.getElementById([a,b]).style.backgroundColor = 'lightblue';
}

function placeships(a, b) {  
	console.log("click ok, y: " + y + " x: " + x + " " + shipcell2(a, b) + " " + ship1.position);
	if (x < 2) { 
		if( ship1.size == 0){
			shipblue (a, b);
			ship1.size++;
			ship1.position = [a,b];
		}
		if(ship1.size == 1 && shipcell2(a, b) == true){
			shipblue (a, b);
			ship1.size++;
		}
	}
	// if (x > 1 && x < 4) { document.getElementById([a, b]).classList.add('ship2');}
	// if (x > 3 && x < 6) { document.getElementById([a, b]).classList.add('ship3');}
}

function removecursor (celllist) {
	for (let i = 12 ; i < celllist.length; i++) {celllist[i].style.cursor = "none";}
}

// function tostringid (a, b) {
// 	let astring = String(a);
// 	let bstring = String(b);
// 	let stringid = astring + "," + bstring;
// 	stringid = String(stringid)
// 	console.log("stringid typeof: " + stringid);
// 	return stringid;
//  }

export { boardship, cellclick, createships};
