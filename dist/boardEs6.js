"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BoardEs6 {
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
    computeStepV2(nbStep = 1) {
        if (nbStep < 0) {
            nbStep = 1;
        }
        for (let i = 0; i < nbStep; i++) {
            this.computeNextStepV2();
        }
    }
    computeNextStep() {
        let copy = this.cloneBoard();
        copy.forEach((line, y, board) => {
            line.forEach((cell, x, line) => {
                line[x] = this.cellCompute(y, x);
            });
        });
        this.board = copy;
    }
    cloneBoard() {
        return this.board.map((value) => {
            return value.slice();
        });
    }
    computeNextStepV2() {
        this.board = this.board.map((line, y, b) => {
            return line.map((cell, x) => {
                return this.cellCompute(y, x);
            });
        });
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
exports.BoardEs6 = BoardEs6;
//# sourceMappingURL=../src/dist/boardEs6.js.map