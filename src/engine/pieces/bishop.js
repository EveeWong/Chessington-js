import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let pieceLocation = board.findPiece(this)
        let movesArray = []
        for (let i = 0; i < 8; i++) {
            movesArray.push(Square.at(i+1, i+1))
        }
        for (let j = 0; j < 8; j++) {
            movesArray.push(Square.at(j+1, j-1))
        }
        for (let a = 0; a < 8; a++){
            movesArray.push(Square.at(a-1, a-1))
        }
        for (let b = 0; b < 8; b++) {
            movesArray.push(Square.at(b-1, b+1))
        }
      
    

        return movesArray;
    }
}
