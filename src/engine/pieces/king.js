import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves = new Array(0);
        const currentSquare = board.findPiece(this);
        const row = currentSquare.row;
        const col = currentSquare.col;
        let pieceOnSquare = !this.validCoordinate(row + 1,col) || board.getPiece(Square.at(row + 1, col));
        if(this.validCoordinate(row + 1,col) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row + 1,col));
        pieceOnSquare = !this.validCoordinate(row,col + 1) || board.getPiece(Square.at(row, col + 1));
        if(this.validCoordinate(row,col + 1) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row,col + 1));
        pieceOnSquare = !this.validCoordinate(row - 1,col) || board.getPiece(Square.at(row - 1, col));
        if(this.validCoordinate(row - 1,col) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row - 1,col));
        pieceOnSquare = !this.validCoordinate(row,col - 1) || board.getPiece(Square.at(row, col - 1));
        if(this.validCoordinate(row,col - 1) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row,col - 1));
        pieceOnSquare = !this.validCoordinate(row + 1,col + 1) || board.getPiece(Square.at(row + 1, col + 1));
        if(this.validCoordinate(row + 1,col + 1) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row + 1,col + 1));
        pieceOnSquare = !this.validCoordinate(row + 1,col - 1) || board.getPiece(Square.at(row + 1, col - 1));
        if(this.validCoordinate(row + 1,col - 1) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row + 1,col - 1));
        pieceOnSquare = !this.validCoordinate(row - 1,col + 1) || board.getPiece(Square.at(row - 1, col + 1));
        if(this.validCoordinate(row - 1,col + 1) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row - 1,col + 1));
        pieceOnSquare = !this.validCoordinate(row - 1,col - 1) || board.getPiece(Square.at(row - 1, col - 1));
        if(this.validCoordinate(row - 1,col - 1) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row - 1,col - 1));
        return moves;
    }
}
