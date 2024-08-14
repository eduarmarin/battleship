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

  function component2() {
    console.log("element2");
    let element = document.createElement('div');
    //element.innerHTML = _.join(['Hello', 'battleship!!!!!!'], ' ');
    element.classList.add('centered');
    return element;
  }
  
document.body.appendChild(component());
document.body.appendChild(component2());

document.body.appendChild(boardship());   //-------------gamer board
document.body.appendChild(boardattack());
cellclick();
clickattack()


//document.body.appendChild(boardshippc());  //----------pc board
//document.body.appendChild(boardattackpc());
//cellclickpc();// ---------------------------------random function to simulate clicks to place pc ships on board------------
//clickattackpc();// -------------------------------random function to simulate clicks attacks-------------------------------

