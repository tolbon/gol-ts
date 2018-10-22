"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoardArray = (function () {
    function BoardArray(width, height) {
        if (width === void 0) { width = 255; }
        if (height === void 0) { height = 255; }
        this.board = new Int8Array(height * width);
        this.width = width | 0;
        this.height = height | 0;
    }
    BoardArray.prototype.computeStep = function (nbStep) {
        if (nbStep === void 0) { nbStep = 1; }
        if (nbStep < 0) {
            nbStep = 1;
        }
        for (var i = 0; i < nbStep; i++) {
            this.computeNextStep();
        }
    };
    BoardArray.prototype.computeNextStep = function () {
        var _this = this;
        this.board = this.board.map(function (line, i, b) {
            return _this.cellCompute(i, 0);
        });
    };
    BoardArray.prototype.cellCompute = function (y, x) {
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
                if (this.board[(i + j)] !== 0) {
                    countLive++;
                }
            }
        }
        if (this.board[(y + x)] !== 0) {
            countLive--;
        }
        return this.cellNextValue(this.board[(y + x)], countLive);
    };
    BoardArray.prototype.cellNextValue = function (currentState, nbNeighbours) {
        if (nbNeighbours === 3) {
            return 1;
        }
        else if (nbNeighbours === 2) {
            return currentState;
        }
        return 0;
    };
    return BoardArray;
}());
exports.BoardArray = BoardArray;
//# sourceMappingURL=../src/dist/boardArray.js.map