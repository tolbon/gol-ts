"use strict";

class Board implements IBoard {
    private board: Array<Int8Array>;
    readonly width: number;
    readonly height: number;

    public constructor(width: number = 255, height: number = 255)
    {
        this.board = new Array<Int8Array>(height);
        this.width = width | 0;
        this.height = height | 0;
        for(let i = 0; i < this.height; i++)
        {
            this.board[i] = new Int8Array(this.width);
            for(let j = 0; j < this.height; j++)
            {
                this.board[i][j]  = eState.Dead;
            }
        }
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
        let copy = this.board;
        
        for(let i = 0; i < this.height; i++)
        {
            for(let j = 0; j < this.width; j++)
            {
                copy[i][j] = this.cellCompute(i, j);
            }
        }
    }

    public cellCompute(y: number, x: number): eState
    {
        let xMin: number = x - 1;  
        let xMax: number = x + 1;
        let yMin: number = y - 1;
        let yMax: number = y + 1;
        let countLive:number = 0;

        if (xMin < 0)
        {
            xMin = 0;
        }
        if (xMax >= this.width)
        {
            xMax = this.width - 1;
        }
        if (yMin < 0)
        {
            yMin = 0;
        }
        if (yMax >= this.height)
        {
            yMax = this.height - 1;
        }

        for (let i = yMin; i <= yMax; i++)
        {
            for (let j = xMin; j <= xMax; j++)
            {
                if (this.board[i][j] !== eState.Dead)
                {
                    countLive++;
                }
            }
        }

        return this.cellNextValue(this.board[y][x], countLive);
    } 

    private cellNextValue(currentState: eState, nbNeighbours: number): eState
    {
        if (nbNeighbours === 3)
        {
            return eState.Live;
        }
        else if (nbNeighbours === 2)
        {
            return currentState;
        }

        return eState.Dead;
    }
}