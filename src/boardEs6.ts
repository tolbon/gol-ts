"use strict";

class BoardEs6 implements IBoard {
    private board: Array<Int8Array>;
    readonly width: number;
    readonly height: number;

    public constructor(width: number = 255, height: number = 255)
    {
        this.board = new Array<Int8Array>(height);
        this.width = width | 0;
        this.height = height | 0;
        this.board.forEach((val:Int8Array, index:number, array: Array<Int8Array>) => {
            console.log(val);
            this.board[index] = new Int8Array(this.width);
            this.board[index].forEach((val:number, index:number, array: Int8Array) => {
                array[index] = eState.Dead;
            });
        });
    }

    public computeStep(nbStep: number = 1): void
    {
        if (nbStep < 0)
        {
            nbStep = 1;
        }
        for(let i = 0; i < nbStep; i++)
        {
            this.computeNextStep();
        }
    }

    public computeNextStep(): void
    {
        const copy = this.board;
        
        for(let i = 0; i < this.height; i++)
        {
            for(let j = 0; j < this.width; j++)
            {
                this.board[i] = new Int8Array(this.width);
            }
        }
    }
}