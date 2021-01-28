import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('King', () => {
        
    describe('white King', () => {

        let board;
        beforeEach(() => board = new Board());

        it('can only move one square up or down', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(1, 0), king);

            const moves = king.getAvailableMoves(board);
            
            moves.should.have.length(2);
            moves.should.deep.include(Square.at(2, 0), Square.at(0, 0));
        });

        it('can move one square horizontally', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(1, 7), king);


            const moves = king.getAvailableMoves(board);
            

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(1, 6), Square.at(1, 5)]);
        });

        it('can move one square diagonally in any direction', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(2, 3), king);


            const moves = king.getAvailableMoves(board);
            

            moves.should.have.length(4);
            moves.should.deep.include.members([Square.at(1, 2), Square.at(1, 4), Square.at(3,2), Square.at(3,4)]);
        });
    })

    describe('black King', () => {

        let board;
        beforeEach(() => board = new Board());

        it('can only move one square up or down', () => {
            const king = new King(Player.BLACK);
            board.setPiece(Square.at(6, 0), king);

            const moves = king.getAvailableMoves(board);
            
            moves.should.have.length(2);
            moves.should.deep.include(Square.at(5, 0), Square.at(7, 0));
        });

        it('can only move one square horizontally', () => {
            const king = new King(Player.BLACK);
            board.setPiece(Square.at(6, 3), king);

            const moves = king.getAvailableMoves(board);
            
            moves.should.have.length(2);
            moves.should.deep.include(Square.at(6, 2), Square.at(6, 4));
        });

        it('can move one square diagonally in any direction', () => {
            const king = new King(Player.BLACK);
            board.setPiece(Square.at(2, 3), king);


            const moves = king.getAvailableMoves(board);
            

            moves.should.have.length(4);
            moves.should.deep.include.members([Square.at(1, 2), Square.at(1, 4), Square.at(3,2), Square.at(3,4)]);
        });
    })


});
