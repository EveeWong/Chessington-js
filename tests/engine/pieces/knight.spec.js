import Knight from '../../../src/engine/pieces/knight';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Knight', () => {
    let board;
        beforeEach(() => board = new Board()); 

        it('can move in a vertical L', () => {
            const knight = new Knight(Player);
            board.setPiece(Square.at(0, 6), knight);
            knight.moveTo(board, Square.at(7, 3));

            const moves = knight.getAvailableMoves(board);
            
            moves.should.have.length(2)
            moves.should.deep.include(Square.at(5, 3), Square.at(7, 3));
        });

});
