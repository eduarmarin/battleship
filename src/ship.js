import { add } from 'lodash';
import './style.css';
class ship{
		lenght = 3;
    constructor(name, lenght){
			this.name = name;
			this.lenght = lenght;
		}
		hits = 0;
		hit(){this.hits++;}
		isSunk(){if(hits>=3){console.log("ship's been sunk")} }
}

class gameboard {
	placeship(){console.log("place ships method")}
	receiveAttack(){console.log("attack on ship")}
	attacks(){console.log("attack")}
}

class gamer {
	constructor(name){
		this.name = name;
		this.lenght = lenght;
	}
}

function boardship (){ // create the board with numbers and letters 
 var a = 0; // var to enumerate the first row
 var ascii = 64; // var to put letters in the first column
 var boardshipcont = document.createElement('table');
 for (var i = 0; i < 11; i++) {
    var tr = document.createElement('tr'); // Create a row
    for (var j = 0; j < 11; j++) {
        var td = document.createElement('td');// Create a cell
				td.classList.add('cell');
				td.id = ([i,j]); // it will be a string
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

var x = 0;
var y = 0;
function cellclick (){  // listen clicks on board
	var celllist = document.getElementsByClassName('cell');
	for (let i = 12 ; i < celllist.length; i++) {
		celllist[i].addEventListener('click', function (e) { 
			//console.log("this is i: " + celllist[i].id);
			//removecursor (celllist);
			var cell0 = +(celllist[i].id)[0];      // first at all, take the string and convert to number
			var cell1 = +(celllist[i].id)[2];
			if ((celllist[i].id).length == 4 && (celllist[i].id)[1] == ","){cell1 = 10}
			if ((celllist[i].id).length == 4 && (celllist[i].id)[2] == ","){cell0 = 10; cell1 = +(celllist[i].id)[3];}	
			if ((celllist[i].id).length == 5 && (celllist[i].id)[2] == ","){cell0 = 10; cell1 = 10}
			placeships(cell0, cell1, celllist[i])
		});
	}
}

// function optionship (cell0, cell1) {     // go to "placeships" to enable cells to place each ship cell
// 	for (let j = 0 ; j < 5 ; j++) {  
// 		if (j == 0) { placeships(cell0, cell1)}
// 		if (j == 1) { placeships(cell0 + 1, cell1)}
// 		if (j == 2) { placeships(cell0 - 1, cell1)}
// 		if (j == 3) { placeships(cell0, cell1 + 1)}
// 		if (j == 4) { placeships(cell0, cell1 - 1)}
// 	}
// }
const ship1 = {
	name: "ship1",
	size: 0,
	position: [],
	orientation: "horizontal",
	attacks: 0,
	sunk: false
}

function placeships(a, b) {
	if (a > 0 && a < 11 && b > 0 && b < 11){ 
		let idstring = tostringid();
		document.getElementById([a,b]).style.backgroundColor = 'lightblue';
		if (x < 2) { 
			ship1.size++;
			ship1.position = [a, b];
			
		 }
    if (x > 1 && x < 4) { document.getElementById([a, b]).classList.add('ship2');}
    if (x > 3 && x < 6) { document.getElementById([a, b]).classList.add('ship3');}
    x++;
		if((document.getElementById(idstring) == null)) {console.log("no class")		}
	}
}

function removecursor (celllist) {
	for (let i = 12 ; i < celllist.length; i++) {celllist[i].style.cursor = "none";}
}
function tostringid (a, b) {
	let astring = toString(a);
	let bstring = toString(b);
	let stringid = astring + "," + bstring;
	console.log("stringid: " + stringid);
	return stringid;
 }

export { boardship, cellclick};
