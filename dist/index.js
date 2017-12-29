"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dat = require("dat-gui");
var CanvasParams = (function () {
    function CanvasParams() {
        this.squareWidth = 5;
        this.ctx = null;
        this.canvas = document.getElementById("canvas_gol");
    }
    CanvasParams.prototype.nextStep = function () {
    };
    CanvasParams.prototype.play = function () {
    };
    return CanvasParams;
}());
var canvasParams;
var gui;
window.onload = function () {
    canvasParams = new CanvasParams();
    gui = new dat.GUI();
    if (canvasParams.canvas === null || !canvasParams.canvas.getContext) {
        console.error("Init Fail");
        stop();
    }
    else {
        var ctxLocal = null;
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
//# sourceMappingURL=/home/jb/Documents/gol-ts/dist/index.js.map