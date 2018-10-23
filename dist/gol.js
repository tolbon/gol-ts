"use strict";
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
        var copy = this.board.slice(0);
        copy.forEach(function (line, i, board) {
            return _this.cellCompute(i, 0);
        });
        this.board = copy;
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
var CanvasParams = (function () {
    function CanvasParams() {
        this.xCanvas = 0;
        this.yCanvas = 0;
        this.squareWidth = 5;
        this.ctx = null;
        this.canvas = document.getElementById("canvas_gol");
    }
    CanvasParams.prototype.nextStep = function () {
    };
    CanvasParams.prototype.play = function () {
    };
    return CanvasParams;
}());
var canvasParams;
var gui;
window.onload = function () {
    canvasParams = new CanvasParams();
    gui = new dat.GUI();
    if (canvasParams.canvas === null || !canvasParams.canvas.getContext) {
        console.error("Init Fail");
        stop();
    }
    else {
        var ctxLocal = null;
        ctxLocal = canvasParams.canvas.getContext("2d");
        if (ctxLocal === null) {
            console.error("Init Fail getContext 2D");
        }
        else {
            canvasParams.ctx = ctxLocal;
            canvasParams.xCanvas = canvasParams.canvas.offsetTop;
            canvasParams.yCanvas = canvasParams.canvas.offsetLeft;
            canvasParams.canvas.addEventListener("pointerdown", pointerDownEvent);
            document.addEventListener("pointerup", pointerUpEvent);
        }
    }
    gui.add(canvasParams, 'squareWidth');
};
function pointerDownEvent(ev) {
    canvasParams.canvas.addEventListener("pointermove", pointerMoveEvent);
}
function pointerUpEvent(ev) {
    canvasParams.canvas.removeEventListener("pointermove", pointerMoveEvent);
}
function pointerMoveEvent(ev) {
    if (canvasParams.ctx !== null) {
        canvasParams.ctx.fillStyle = "rgb(200,0,0)";
        canvasParams.ctx.fillRect(ev.x, ev.y, canvasParams.squareWidth, canvasParams.squareWidth);
    }
}
;
//# sourceMappingURL=/home/jb/Téléchargements/gol-ts/dist/gol.js.map