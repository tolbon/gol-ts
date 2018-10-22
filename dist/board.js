"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board = (function () {
    function Board(width, height) {
        if (width === void 0) { width = 255; }
        if (height === void 0) { height = 255; }
        this.board = new Array(height);
        this.width = width | 0;
        this.height = height | 0;
        for (var i = 0; i < this.height; i++) {
            this.board[i] = new Int8Array(this.width);
            for (var j = 0; j < this.height; j++) {
                this.board[i][j] = 0;
            }
        }
    }
    Board.prototype.computeStep = function (nbStep) {
        if (nbStep === void 0) { nbStep = 1; }
        if (nbStep < 0) {
            nbStep = 1;
        }
        for (var i = 0; i < nbStep; i++) {
            this.computeNextStep();
        }
    };
    Board.prototype.computeNextStep = function () {
        var copy = this.cloneBoard();
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                copy[i][j] = this.cellCompute(i, j);
            }
        }
        this.board = copy;
    };
    Board.prototype.cloneBoard = function () {
        var copy = new Array(this.height);
        for (var i = 0; i < this.height; i++) {
            copy[i] = this.board[i].slice();
        }
        return copy;
    };
    Board.prototype.cellCompute = function (y, x) {
        var xMin = x - 1;
        var xMax = x + 1;
        var yMin = y - 1;
        var yMax = y + 1;
        var countLive = 0;
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
        for (var i = yMin; i <= yMax; i++) {
            for (var j = xMin; j <= xMax; j++) {
                if (this.board[i][j] !== 0) {
                    countLive++;
                }
            }
        }
        if (this.board[y][x] !== 0) {
            countLive--;
        }
        return this.cellNextValue(this.board[y][x], countLive);
    };
    Board.prototype.cellNextValue = function (currentState, nbNeighbours) {
        if (nbNeighbours === 3) {
            return 1;
        }
        else if (nbNeighbours === 2) {
            return currentState;
        }
        return 0;
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=../src/dist/board.js.map