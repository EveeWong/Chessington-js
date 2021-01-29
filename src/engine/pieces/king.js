import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let pieceLocation = board.findPiece(this)
            return [Square.at(pieceLocation.row+1, pieceLocation.col), Square.at(pieceLocation.row-1, pieceLocation.col),
            Square.at(pieceLocation.row, pieceLocation.col+1), Square.at(pieceLocation.row, pieceLocation.col-1),
            Square.at(pieceLocation.row-1, pieceLocation.col-1), Square.at(pieceLocation.row-1, pieceLocation.col+1),
            Square.at(pieceLocation.row+1, pieceLocation.col-1), Square.at(pieceLocation.row+1, pieceLocation.col+1)]
            
        
    }
}
