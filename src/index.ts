"use strict";

class CanvasParams
{
    public readonly canvas: HTMLCanvasElement|null;
    public xCanvas: number = 0;
    public yCanvas: number = 0;
    public squareWidth = 5;
    public ctx:CanvasRenderingContext2D|null = null;

    public constructor()
    {
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas_gol");
    }


    public nextStep()
    {

    }

    public play(){
        
    }
}

let canvasParams:CanvasParams;
let gui:dat.GUI;

window.onload = function() {
    canvasParams = new CanvasParams();
    gui = new dat.GUI();

    if (canvasParams.canvas === null || !canvasParams.canvas.getContext)
    {
        console.error("Init Fail");
        stop();
    }
    else
    {
        let ctxLocal:CanvasRenderingContext2D|null = null;        
        ctxLocal = canvasParams.canvas.getContext("2d");
        if (ctxLocal === null)
        {
            console.error("Init Fail getContext 2D");
        }
        else
        {
            canvasParams.ctx = ctxLocal;
            canvasParams.xCanvas = canvasParams.canvas.offsetTop;
            canvasParams.yCanvas = canvasParams.canvas.offsetLeft;
            canvasParams.canvas.addEventListener("pointerdown", pointerDownEvent);
            document.addEventListener("pointerup", pointerUpEvent);
        }
    }

    gui.add(canvasParams, 'squareWidth');
}


function pointerDownEvent(ev:PointerEvent): any
{
    canvasParams.canvas!.addEventListener("pointermove", pointerMoveEvent);
}

function pointerUpEvent(ev:PointerEvent): any
{
    canvasParams.canvas!.removeEventListener("pointermove", pointerMoveEvent);
}

function pointerMoveEvent(ev:PointerEvent): any
{
    if (canvasParams.ctx !== null)
    {
        canvasParams.ctx.fillStyle = "rgb(200,0,0)";
        canvasParams.ctx.fillRect (ev.x, ev.y, canvasParams.squareWidth, canvasParams.squareWidth);
    }
}

