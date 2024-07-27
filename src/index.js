import _ from 'lodash';
import './style.css';
import { boardship, cellclick, boardattack, clickattack} from './ship.js'; 

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'battleship!!!!!!'], ' ');
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());
  document.body.appendChild(boardship());
  document.body.appendChild(boardattack());
  cellclick();
  clickattack()