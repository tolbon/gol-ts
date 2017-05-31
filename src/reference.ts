"use strict";

const enum eState {
    Dead = 0,
    Live = 1
};

interface IBoard
{
    readonly width: number;
    readonly height: number;
    computeStep(nbStep: number): void;
    computeNextStep() : void;

}