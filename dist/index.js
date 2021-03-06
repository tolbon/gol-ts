"use strict";
class CanvasParams {
    constructor() {
        this.xCanvas = 0;
        this.yCanvas = 0;
        this.squareWidth = 5;
        this.ctx = null;
        this.canvas = document.getElementById("canvas_gol");
    }
    nextStep() {
    }
    play() {
    }
}
let canvasParams;
let gui;
window.onload = function () {
    canvasParams = new CanvasParams();
    gui = new dat.GUI();
    if (canvasParams.canvas === null || !canvasParams.canvas.getContext) {
        console.error("Init Fail");
        stop();
    }
    else {
        let ctxLocal = null;
        ctxLocal = canvasParams.canvas.getContext("2d");
        if (ctxLocal === null) {
            console.error("Init Fail getContext 2D");
        }
        else {
            canvasParams.ctx = ctxLocal;
            canvasParams.xCanvas = canvasParams.canvas.offsetTop;
            canvasParams.yCanvas = canvasParams.canvas.offsetLeft;
            canvasParams.canvas.addEventListener("pointerdown", pointerDownEvent);
            document.addEventListener("pointerup", pointerUpEvent);
        }
    }
    gui.add(canvasParams, 'squareWidth');
};
function pointerDownEvent(ev) {
    canvasParams.canvas.addEventListener("pointermove", pointerMoveEvent);
}
function pointerUpEvent(ev) {
    canvasParams.canvas.removeEventListener("pointermove", pointerMoveEvent);
}
function pointerMoveEvent(ev) {
    if (canvasParams.ctx !== null) {
        canvasParams.ctx.fillStyle = "rgb(200,0,0)";
        canvasParams.ctx.fillRect(ev.x, ev.y, canvasParams.squareWidth, canvasParams.squareWidth);
    }
}
//# sourceMappingURL=../src/dist/index.js.map