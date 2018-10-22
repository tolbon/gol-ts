var board = require('../dist/board');
var boardEs6 = require('../dist/boardEs6');
var boardArr = require('../dist/boardArray');
var assert = require('assert');

describe('Specs', function(){
    describe('Board', function(){
        var b = new board.Board(255, 255);
        var bEs6 = new boardEs6.BoardEs6(255, 255);
        var bTarr = new boardArr.BoardArray(255, 255);

        it('Test Normal', function(){
            b.board[0][0] = 1;
            b.board[0][1] = 1;
            b.board[0][2] = 1;
            console.time('b');            
            b.computeStep(2);
            console.timeEnd('b');            
            assert.equal(true, true, '');
        });
        it('Test Es6', function(){
            bEs6.board[0][0] = 1;
            bEs6.board[0][1] = 1;
            bEs6.board[0][2] = 1;
            console.time('bEs6');
            bEs6.computeStep(2);
            console.timeEnd('bEs6');            
            assert.equal(true, true, '');
        });
        it('Test Es6 v2', function(){
            bEs6.board[0][0] = 1;
            bEs6.board[0][1] = 1;
            bEs6.board[0][2] = 1;
            console.time('bEs6v2');
            bEs6.computeStepV2(2);
            console.timeEnd('bEs6v2');            
            assert.equal(true, true, '');
        });
        it('Test Array CPU', function(){
            bTarr.board[0] = 1;
            bTarr.board[1] = 1;
            bTarr.board[2] = 1;
            console.time('bArr');
            bTarr.computeStep(2);
            console.timeEnd('bArr');            
            assert.equal(true, true, '');
        });
    });
});