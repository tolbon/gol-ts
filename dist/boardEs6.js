"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoardEs6 = (function () {
    function BoardEs6(width, height) {
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
    BoardEs6.prototype.computeStep = function (nbStep) {
        if (nbStep === void 0) { nbStep = 1; }
        if (nbStep < 0) {
            nbStep = 1;
        }
        for (var i = 0; i < nbStep; i++) {
            this.computeNextStep();
        }
    };
    BoardEs6.prototype.computeStepV2 = function (nbStep) {
        if (nbStep === void 0) { nbStep = 1; }
        if (nbStep < 0) {
            nbStep = 1;
        }
        for (var i = 0; i < nbStep; i++) {
            this.computeNextStepV2();
        }
    };
    BoardEs6.prototype.computeNextStep = function () {
        var _this = this;
        var copy = this.cloneBoard();
        copy.forEach(function (line, y, board) {
            line.forEach(function (cell, x, line) {
                line[x] = _this.cellCompute(y, x);
            });
        });
        this.board = copy;
    };
    BoardEs6.prototype.cloneBoard = function () {
        return this.board.map(function (value) {
            return value.slice();
        });
    };
    BoardEs6.prototype.computeNextStepV2 = function () {
        var _this = this;
        this.board = this.board.map(function (line, y, b) {
            return line.map(function (cell, x) {
                return _this.cellCompute(y, x);
            });
        });
    };
    BoardEs6.prototype.cellCompute = function (y, x) {
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
    BoardEs6.prototype.cellNextValue = function (currentState, nbNeighbours) {
        if (nbNeighbours === 3) {
            return 1;
        }
        else if (nbNeighbours === 2) {
            return currentState;
        }
        return 0;
    };
    return BoardEs6;
}());
exports.BoardEs6 = BoardEs6;
//# sourceMappingURL=/home/jb/Documents/gol-ts/dist/boardEs6.js.map