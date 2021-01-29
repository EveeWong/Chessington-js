import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe.only('Bishop', () => {
    
    let board;
        beforeEach(() => board = new Board()); 

        it('can only move diagonally', () => {
            const bishop = new Bishop(Player.WHITE);
            board.setPiece(Square.at(0, 0), bishop);

            const moves = bishop.getAvailableMoves(board);
            
            //moves.should.have.length(7)
            moves.should.deep.include(Square.at(1, 1), Square.at(2, 2), Square.at(3, 3), Square.at(4, 4), 
            Square.at(5, 5), Square.at(6, 6));
        });

    
});
