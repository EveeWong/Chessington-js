import Queen from '../../../src/engine/pieces/queen';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Queen', () => {

    let board;
        beforeEach(() => board = new Board()); 

    it('can move vertically any number of spaces', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(1, 0), queen);

        const moves = queen.getAvailableMoves(board);
        
        moves.should.deep.include(Square.at(2, 0), Square.at(3, 0), Square.at(4, 0), Square.at(5, 0), 
        Square.at(6, 0), Square.at(7, 0));
    });

    it('can move horizontally any number of spaces', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(1, 0), queen);
        

        const moves = queen.getAvailableMoves(board);
        
    
        moves.should.deep.include(Square.at(0, 2), Square.at(0, 3), Square.at(0, 4), Square.at(0, 5), 
        Square.at(0, 6), Square.at(0, 7));
    });

    it('can move diagonally any number of spaces', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(0, 0), queen);
    

        const moves = queen.getAvailableMoves(board);
        
    
        moves.should.deep.include(Square.at(1, 1), Square.at(2, 2), Square.at(3, 3), Square.at(4, 4), 
        Square.at(5, 5), Square.at(6, 6), Square.at(7,7));
    });
});
