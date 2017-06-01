"use strict";

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas_gol");
let ctx:CanvasRenderingContext2D|null = null;
if (canvas === null || !canvas.getContext)
{
    console.error("Init Fail");
    stop();
}
else
{

    ctx = canvas.getContext("2d");
    if (ctx === null)
    {
        console.error("Init Fail getContext 2D");
    }
    else
    {
        canvas.addEventListener("pointerdown", pointerDownEvent);
        document.addEventListener("pointerup", pointerUpEvent);
    }
}

function pointerDownEvent(ev:PointerEvent): any
{
    console.log(ev);
    canvas.addEventListener("pointermove", pointerMoveEvent);
}

function pointerUpEvent(ev:PointerEvent): any
{
    console.log("UP "+ ev);
    canvas.removeEventListener("pointermove", pointerMoveEvent);
}

function pointerMoveEvent(ev:PointerEvent): any
{
    if (ctx !== null)
    {
        console.log(ev);
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (ev.x, ev.y, 1, 1);
    }
}

