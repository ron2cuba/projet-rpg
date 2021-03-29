import Knight from './Knight.js';
import KeyHandler from './KeyHandler.js';

const knight = new Knight();
// const keyHandler = new KeyHandler();

console.log(knight);

/**
 * Var
 */
const body = document.querySelector('body');
let infos = document.createElement('div');
let status = document.createElement('div');
let pack = document.createElement('div');
let map = document.createElement('canvas');
let initialPosition = {x: 20,y: 150}


/**
 * Canvas
 */
const canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.border ="1px solid";

// heroe
let ctx = canvas.getContext('2d');
let image = new Image();
image.src = '../img/chara.png'
ctx.drawImage(image, 0, 0, 34, 50, initialPosition.x, initialPosition.y, 34, 50);

/**
 * Infos, status, map
 */

// infos
infos.classList.add('infos');
body.appendChild(infos);

// status
status.classList.add('status');
status.width = '1fr';
status.height = '100px';
infos.appendChild(status);

// nom health lvl exp
status.innerHTML = `
    <div class="status-content">Name : <span class="name">${knight.name}</span></div>
    <div class="status-content">Health : <span class="number">${knight.health}</span></div>
    <div class="status-content">Weapon : <span class="name">${knight.weapon}</span></div>
    <div class="status-content">Lvl : <span class="number">${knight.lvl}</span></div>
    <div class="status-content">Exp : <span class="number">${knight.exp}</span></div>
`;

// empty
map.setAttribute('id', 'mini-map');
map.width = '1fr';
map.height = '100px';
infos.appendChild(map);

// pack
pack.classList.add('pack');
infos.appendChild(pack);
pack.width = '1fr';


/**
 * diusplay Inventory
 */
 function pressKeyDown(e){
        if(e.key == "i"|| e.key == "I"){
            console.log('yep');
            if(infos.classList.contains('hide') == false){   
                infos.classList.add('hide');
            } else {
                infos.classList.remove('hide');
            }
        }
     }

document.addEventListener('keydown', pressKeyDown, false);

// function keyDownHanlder(e) {
//     if(e.key == "Right" || e.key == "ArrowRight") {
//         rightPressed = true;
//     }
//     else if(e.key == "Left" || e.key == "ArrowLeft") {
//         leftPressed = true;
//     }
//     else if(e.key =="Up" || e.key == "ArrowUp"){
//         upPressed = true;
//     }
//     else if(e.key =="Down" || e.key == "ArrowDown"){
//         downPressed = true;
//     }
//     else if(e.key == "&"){
//         inventory = true;
//         console.log(inventory);
//     }
// }


// apparition inventory
