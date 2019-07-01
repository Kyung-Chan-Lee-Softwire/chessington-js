import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves = new Array(0);
        while (this.player == Player.WHITE){
            if(board.getPiece(Square.at(board.findPiece(this).row + 1,board.findPiece(this).col))) break;

            moves.push(Square.at(board.findPiece(this).row + 1,board.findPiece(this).col));

            if(board.getPiece(Square.at(board.findPiece(this).row + 2,board.findPiece(this).col))) break;

            if(!this.hasMoved) {
                moves.push(Square.at(board.findPiece(this).row + 2,board.findPiece(this).col));
            }
            break;
        }
        while (this.player == Player.BLACK){
            if(board.getPiece(Square.at(board.findPiece(this).row - 1,board.findPiece(this).col))) break;

            moves.push(Square.at(board.findPiece(this).row - 1,board.findPiece(this).col));

            if(board.getPiece(Square.at(board.findPiece(this).row - 2,board.findPiece(this).col))) break;

            if(!this.hasMoved){
                moves.push(Square.at(board.findPiece(this).row - 2,board.findPiece(this).col));
            }
            break;
        }
        return moves;
    }
}
