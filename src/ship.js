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
 var a = 0;
 var ascii = 64;
 var boardshipcont = document.createElement('table');
 for (var i = 0; i < 11; i++) {
    var tr = document.createElement('tr'); // Create a row
    for (var j = 0; j < 11; j++) {
        var td = document.createElement('td');// Create a cell
				td.classList.add('cell');
				//td.id =[i, j];
				//td.textContent = "x";
				tr.appendChild(td);
				if( i == 0 ) { //number first row
						td.style.border = "none"; 
						td.textContent = a++;
				}
				if( j == 0 ) { // letters first colum
						td.style.border = "none"; 
						td.textContent = String.fromCharCode(ascii++);
				}
				if ( i == 0 && j == 0){ td.textContent = ""; } // corner
		}
		boardshipcont.appendChild(tr);
 }
 return boardshipcont;
}

// function getindex (){
// 		let celllist = document.getElementsByClassName('cell');    // <------------------------------------------------
// 		for (let i = 0 ; i < celllist.length; i++) {
// 				celllist[i].addEventListener('click', function () { // listen click on chessboard
// 						//let indexcell=this.innerHTML; //this is string of 3 index
// 						console.log("this is i: " + i);
// 				});
// 		}
// }
// function matrizboard () {

// }

export { boardship };
