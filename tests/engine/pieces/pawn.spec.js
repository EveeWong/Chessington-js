import 'chai/register-should';
import Pawn from '../../../src/engine/pieces/pawn';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Pawn', () => {

    let board;
    beforeEach(() => board = new Board());

    describe('white pawns', () => {
        
        it('can move one square up', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(0, 0), pawn);

            const moves = pawn.getAvailableMoves(board);
            let square1 = Square.at(1,0)
            moves.push(square1)

            moves.should.deep.include(Square.at(1, 0));
        });

    });

    describe('black pawns', () => {
        
        it('can move one square down', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(7, 7), pawn);
            let square2 = Square.at(6,7)

            const moves = pawn.getAvailableMoves(board);
            moves.push(square2)

            moves.should.deep.include(Square.at(6, 7));
        });

    });

});
