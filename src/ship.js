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

function boardship (){
 
 var boardshipcont = document.createElement('table');
 var a = 0;
 var char = 'A';
 var ascii = char.charCodeAt(0);
 for (var i = 0; i < 8; i++) {
    var tr = document.createElement('tr'); // Create a row
    for (var j = 0; j < 8; j++) {
        var td = document.createElement('td');// Create a cell
				td.classList.add('cell');
				td.textContent =[i, j];
				tr.appendChild(td);
				
				if( i == 0 ) { 
					td.style.border = "none"; 
					td.textContent = a++;
					;
				}
				if( j == 0 ) { 
					td.style.border = "none"; 
					td.textContent = String.fromCharCode(ascii++);
				}
				if ( i == 0 && j == 0){ td.textContent = ""; }
		}
		boardshipcont.appendChild(tr);
 }
 return boardshipcont;
}

export { boardship };
