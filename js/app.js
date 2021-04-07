import { Level } from './class/Level.js';
import { Hero } from './class/Hero.js';
import { MapIntro } from './class/MapIntro.js';


const level = new Level();
const hero = new Hero();
const map = new MapIntro();

console.log(map);

//canvas
export const canvas = document.getElementById('canvas');
canvas.width = 750;
canvas.height = 625;
export const ctx = canvas.getContext("2d");

// gestion des directions
function keyHandler(e){
    if(e.key == "o" || e.key == "O"){
        console.log("o");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hero.moveLeft();
    }
    if(e.key == "p" || e.key == "P"){
        console.log("p");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hero.moveRight();
    }
    if(e.key == "a" || e.key == "A"){
        console.log("a");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hero.moveUp();
    }
    if(e.key == "q" || e.key == "Q"){
        console.log("q");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hero.moveDown();
    }
    if(e.key == " "){
        console.log("space");
    }
    if(e.key == "i"){
        console.log("i");
        document.querySelector('infos').remove.classList('')
    }
};
// écoute d'évènement au clavier
window.addEventListener('keydown', keyHandler);

// infos
let fixed = document.querySelector('.fixed');
let infos = document.createElement('div');
infos.classList.add('infos');
fixed.appendChild(infos);


// audio
let audio = document.createElement('audio');
audio.classList.add('audio');
audio.innerHTML = "Votre navigateur ne supporte pas la balise audio";
document.querySelector('body').appendChild(audio);

// images
export const chars = new Image();
document.querySelector('body').appendChild(chars);
chars.src = "../img/chara.png";
chars.style.cssText = `display: none;`

/**
 * MAPS
 */
let tutorial = level.worlds[0]


/**
 * Loop
 */

const loop = ()=>{

    /**
     * Methode pour la carte en background
     */


    /**
     * Methode pour dessiner le héro
     */
    hero.draw();

    // void ctx.drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);
    // ctx.drawImage(chars, 32, 0, 32, 50, hero.coordonates.x, hero.coordonates.y, 32, 50);
}
// rafraichissement 
setInterval(loop, 1);