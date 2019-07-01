import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves = new Array(0);
        const currentSquare = board.findPiece(this);
        const row = currentSquare.row;
        const col = currentSquare.col;
        while (this.player == Player.WHITE){
            if(row == 7) break;

            if(this.validCoordinate(row + 1,col + 1) && board.getPiece(Square.at(row + 1,col + 1)) && board.getPiece(Square.at(row + 1,col + 1)).player != this.player){
                moves.push(Square.at(row + 1,col + 1));
            }
            
            if(this.validCoordinate(row + 1,col - 1) && board.getPiece(Square.at(row + 1,col - 1)) && board.getPiece(Square.at(row + 1,col - 1)).player != this.player){
                moves.push(Square.at(row + 1,col - 1));
            }

            if(board.getPiece(Square.at(row + 1,col))) break;

            moves.push(Square.at(row + 1,col));

            if(board.getPiece(Square.at(row + 2,col))) break;

            if(!this.hasMoved) {
                moves.push(Square.at(row + 2,col));
            }
            break;
        }
        while (this.player == Player.BLACK){
            if(row == 0) break;

            if(this.validCoordinate(row - 1,col + 1) && board.getPiece(Square.at(row - 1,col + 1)) && board.getPiece(Square.at(row - 1,col + 1)).player != this.player){
                moves.push(Square.at(row - 1,col + 1));
            }
            
            if(this.validCoordinate(row - 1,col - 1) && board.getPiece(Square.at(row - 1,col - 1)) && board.getPiece(Square.at(row - 1,col - 1)).player != this.player){
                moves.push(Square.at(row - 1,col - 1));
            }

            if(board.getPiece(Square.at(row - 1,col))) break;

            moves.push(Square.at(row - 1,col));

            if(board.getPiece(Square.at(row - 2,col))) break;

            if(!this.hasMoved){
                moves.push(Square.at(row - 2,col));
            }
            break;
        }
        return moves;
    }
}
