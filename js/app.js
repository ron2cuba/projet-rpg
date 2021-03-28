import Knight from './Knight.js';

const knight = new Knight('toto');

console.log(knight);

/**
 * Var
 */
const body = document.querySelector('body');
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
ctx.drawImage(image, 0, 0, 34, 50, 20, 150, 34, 50);

/**
 * Infos, status, map
 */

// infos
let infos = document.createElement('div');
infos.classList.add('infos');
body.appendChild(infos);

// status
let status = document.createElement('div');
status.classList.add('status');
status.width = '1fr';
status.height = '100px';
infos.appendChild(status);

// nom
status.innerHTML = `
    <div class="status-content">Name : <span class="name">${knight.name}</span></div>
    <div class="status-content">Health : <span class="health-content">${knight.health}</span></div>
    <div class="status-content">Weapon : <span class="name">${knight.weapon}</span></div>
`;

// empty
let map = document.createElement('canvas');
map.setAttribute('id', 'mini-map');
map.width = '1fr';
map.height = '100px';
infos.appendChild(map);

// pack
let pack = document.createElement('div');
pack.classList.add('pack');
infos.appendChild(pack);
pack.width = '1fr';


/**
 * Move
 */
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

document.addEventListener('keydown', keyDownHanlder, false);

function keyDownHanlder(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
        console.log('right pressed');
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
        console.log('left pressed');
    }
    else if(e.key =="Up" || e.key == "ArrowUp"){
        console.log('up pressed');
        upPressed = true;
    }
    else if(e.key =="Down" || e.key == "ArrowDown"){
        console.log('down pressed');
        upPressed = true;
    }
}
