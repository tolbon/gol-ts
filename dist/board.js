"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Board {
    constructor(width = 255, height = 255) {
        this.board = new Array(height);
        this.width = width | 0;
        this.height = height | 0;
        for (let i = 0; i < this.height; i++) {
            this.board[i] = new Int8Array(this.width);
            for (let j = 0; j < this.height; j++) {
                this.board[i][j] = 0;
            }
        }
    }
    computeStep(nbStep = 1) {
        if (nbStep < 0) {
            nbStep = 1;
        }
        for (let i = 0; i < nbStep; i++) {
            this.computeNextStep();
        }
    }
    computeNextStep() {
        let copy = this.cloneBoard();
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                copy[i][j] = this.cellCompute(i, j);
            }
        }
        this.board = copy;
    }
    cloneBoard() {
        let copy = new Array(this.height);
        for (let i = 0; i < this.height; i++) {
            copy[i] = this.board[i].slice();
        }
        return copy;
    }
    cellCompute(y, x) {
        let xMin = x - 1;
        let xMax = x + 1;
        let yMin = y - 1;
        let yMax = y + 1;
        let countLive = 0;
        if (xMin < 0) {
            xMin = 0;
        }
        if (xMax >= this.width) {
            xMax = this.width - 1;
        }
        if (yMin < 0) {
            yMin = 0;
        }
        if (yMax >= this.height) {
            yMax = this.height - 1;
        }
        for (let i = yMin; i <= yMax; i++) {
            for (let j = xMin; j <= xMax; j++) {
                if (this.board[i][j] !== 0) {
                    countLive++;
                }
            }
        }
        if (this.board[y][x] !== 0) {
            countLive--;
        }
        return this.cellNextValue(this.board[y][x], countLive);
    }
    cellNextValue(currentState, nbNeighbours) {
        if (nbNeighbours === 3) {
            return 1;
        }
        else if (nbNeighbours === 2) {
            return currentState;
        }
        return 0;
    }
}
exports.Board = Board;
//# sourceMappingURL=../src/dist/board.js.map