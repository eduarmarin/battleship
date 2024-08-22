
import { xor } from 'lodash';
import odin from './odin.png';
const odinlogo = new Image();
odinlogo.src = odin;
odinlogo.style.width = "100px";
odinlogo.style.paddingLeft = "8px"

import mail from './envelope-fill.svg';
const image = new Image();
image.src = mail;
image.style.width = "30px";
image.style.fill = 'red';

import git from './github.svg';
const image2 = new Image();
image2.src = git;
image2.style.width = "30px";
image2.style.marginLeft = "10px";

var navbar = document.createElement('nav'); // container for boards
navbar.style.minWidth = "100%";
navbar.style.minHeight = "5rem";
navbar.style.backgroundColor = "lightgray";
navbar.style.color = "rgb(155, 102, 102)";
navbar.style.display = "flex";
navbar.style.alignItems = "center";
navbar.style.justifyContent = "space-between";

var tittle = document.createElement('h1');
tittle.style.paddingRight = "8px"
tittle.textContent = "Odin Battleships";

navbar.appendChild(odinlogo);
navbar.appendChild(tittle);


var footer = document.createElement('footer');
centeritems(footer);
footer.style.width = "100%";    
//footer.style.position = "absolute";    
footer.style.height = "120px";
footer.style.background = "#3C0D03";
//footer.style.color = "white";
footer.style.flexDirection = "column";

var gingerm = document.createElement('a');
centeritems(gingerm);
gingerm.textContent = '\xA9 2024 Ginger Media';
//gingerm.style.margin = "0px"
gingerm.style.color = "white";
gingerm.style.textDecoration = "none";
gingerm.setAttribute("href","https://github.com/eduarmarin/battleship");
gingerm.appendChild(image2);

var linkm = document.createElement('a');
centeritems(linkm);
linkm.setAttribute("href","mailto:donsecun@gmail.com");
linkm.textContent = 'Contact ';
linkm.style.color = "white";
linkm.style.gap = "10px";
linkm.style.textDecoration = "none";

linkm.appendChild(image);
footer.appendChild(gingerm); // add second div to navbar
footer.appendChild(linkm);

function centeritems(item){
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.justifyContent = "center";
}

export { navbar, footer};