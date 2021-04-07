import { ctx } from "../app.js";
import { chars } from "../app.js";
import { canvas } from "../app.js"

export class Hero{

    constructor(){
        this.name = "Toto";
        // tile pour le spawn
        this.faceX = 32;
        this.faceY = 0;
        this.heroWidth = 32;
        this.heroHeight = 50;
        // mouvement
        this.rightCycleLoop = [{}];
        this.leftCycleLoop = [{}];
        this.upCycleLoop = [{}];
        this.downCycleLoop = [{faceX:0, faceY:0}, {faceX: 32, faceY:0}, {faceX:64, faceY:0}];
    }
    draw(){
        ctx.drawImage(
            chars,
            this.faceX,
            this.faceY,
            this.heroWidth,
            this.heroHeight,
            canvas.width / 2,
            canvas.height / 2,
            this.heroWidth,
            this.heroHeight,
        );
    }
    update(){
        // ici onm et a jour les sprites de mouvements
    }
    moveRight(){
    }
    moveLeft(){
    }
    moveUp(){
    }
    moveDown(){
        // this.coordonates.y = this.coordonates.y + 25;
    }
}