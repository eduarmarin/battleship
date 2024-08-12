import _, { divide } from 'lodash';
import './style.css';
import { boardship, cellclick, boardattack, clickattack} from './shipgamer.js'; 
import { boardshippc, cellclickpc, boardattackpc, clickattackpc} from './shippc.js'; 

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'battleship!!!!!!'], ' ');
    element.classList.add('hello');
  
    return element;
  }
  
document.body.appendChild(component());

document.body.appendChild(boardship());   //-------------gamer board
document.body.appendChild(boardattack());
cellclick();
clickattack()

var windiv = document.createElement("div");
windiv.classList.add("centered");
document.boddy.append(windiv);

//document.body.appendChild(boardshippc());  //----------pc board
//document.body.appendChild(boardattackpc());
//cellclickpc();// ---------------------------------random function to simulate clicks to place pc ships on board------------
//clickattackpc();// -------------------------------random function to simulate clicks attacks-------------------------------

