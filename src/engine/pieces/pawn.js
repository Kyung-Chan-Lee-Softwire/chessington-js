import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves = new Array(0);
        if(this.player == Player.WHITE){
            moves.push(Square.at(board.findPiece(this).row + 1,board.findPiece(this).col));
            if(!this.hasMoved){
                moves.push(Square.at(board.findPiece(this).row + 2,board.findPiece(this).col));
            }
        }
        if(this.player == Player.BLACK){
            moves.push(Square.at(board.findPiece(this).row - 1,board.findPiece(this).col));
            if(!this.hasMoved){
                moves.push(Square.at(board.findPiece(this).row - 2,board.findPiece(this).col));
            }
        }
        return moves;
    }
}
