"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BoardArray {
    constructor(width = 255, height = 255) {
        this.board = new Int8Array(height * width);
        this.width = width | 0;
        this.height = height | 0;
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
        this.board = this.board.map((line, i, b) => {
            return this.cellCompute(i, 0);
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
                if (this.board[(i * 1 + j)] !== 0) {
                    countLive++;
                }
            }
        }
        if (this.board[(y * 1 + x)] !== 0) {
            countLive--;
        }
        return this.cellNextValue(this.board[(y * 1 + x)], countLive);
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
exports.BoardArray = BoardArray;
//# sourceMappingURL=../src/dist/boardArray.js.map