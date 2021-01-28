import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let pieceLocation = board.findPiece(this)
        if (this.player == Player.WHITE && pieceLocation.row==1) {
            return [Square.at(pieceLocation.row+1, pieceLocation.col), Square.at(pieceLocation.row+2, pieceLocation.col)]
        } else if (this.player == Player.WHITE) {
             return [Square.at(pieceLocation.row+1, pieceLocation.col)]
        } else if (this.player == Player.BLACK && pieceLocation.row==6) {
            return [Square.at(pieceLocation.row-1, pieceLocation.col), Square.at(pieceLocation.row-2, pieceLocation.col)]
        } else if (this.player == Player.BLACK) {
            return [Square.at(pieceLocation.row-1, pieceLocation.col)] 
        } 
    }
    
}
