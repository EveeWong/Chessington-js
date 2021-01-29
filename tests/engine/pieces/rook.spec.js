import Rook from '../../../src/engine/pieces/rook';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe.only('Rook', () => {

    let board;
        beforeEach(() => board = new Board()); 

        it('can only move horizontally', () => {
            const rook = new Rook(Player.WHITE);
            board.setPiece(Square.at(1, 0), rook);
            //rook.moveTo(board, Square.at(7, 0));

            const moves = rook.getAvailableMoves(board);
            
            //moves.should.have.length(7)
            moves.should.deep.include(Square.at(4, 0));
        });

        it('can only move vertically', () => {
            const rook = new Rook(Player);
            board.setPiece(Square.at(0, 1), rook);
            //rook.moveTo(board, Square.at(0, 7));

            const moves = rook.getAvailableMoves(board);
            
            //moves.should.have.length(7)
            moves.should.deep.include(Square.at(0, 4));
        });

});
