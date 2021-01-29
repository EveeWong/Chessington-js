import Piece from './piece';
import Player from '../player';
import Square from '../square';


export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let pieceLocation = board.findPiece(this)
        let movesArray = []
        for (let i = 0; i < 8; i++) {
            if (i != pieceLocation.row) {
            movesArray.push(Square.at(i, pieceLocation.col));
            }
        
        }
        
        for (let j = 0; j < 8; j++) {
            if (j != pieceLocation.col) {
                movesArray.push(Square.at(pieceLocation.row, j))
            }
            }
            return movesArray
        }
    }

