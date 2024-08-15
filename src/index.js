import _, { divide } from 'lodash';
import './style.css';
import { boardship, cellclick, boardattack, clickattack} from './shipgamer.js'; 
import { boardshippc, cellclickpc, boardattackpc, clickattackpc} from './shippc.js'; 

let element1 = document.createElement('div'); // genral container
element1.classList.add('container');

let element2 = document.createElement('div'); // container for boards
element2.classList.add('container2');

let element3 = document.createElement('div'); // div for centered---hiden div
element3.classList.add('centered');
element3.id = 'centered';
  
document.body.appendChild(element1);
element1.appendChild(element2);
element2.appendChild(element3);

element2.appendChild(boardship());   //-------------gamer board
element2.appendChild(boardattack());
cellclick();
clickattack()


//document.body.appendChild(boardshippc());  //----------pc board
//document.body.appendChild(boardattackpc());
//cellclickpc();// ---------------------------------random function to simulate clicks to place pc ships on board------------
//clickattackpc();// -------------------------------random function to simulate clicks attacks-------------------------------

