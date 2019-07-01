import Piece from './piece';
import Square from '../square';
import King from './king';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves = new Array(0);
        const currentSquare = board.findPiece(this);
        const row = currentSquare.row;
        const col = currentSquare.col;
        let pieceOnSquare = !this.validCoordinate(row + 2,col + 1) || board.getPiece(Square.at(row + 2, col + 1));
        if(this.validCoordinate(row + 2,col + 1) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row + 2,col + 1));
        pieceOnSquare = !this.validCoordinate(row - 2,col + 1) || board.getPiece(Square.at(row - 2, col + 1));
        if(this.validCoordinate(row - 2,col + 1) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row - 2,col + 1));
        pieceOnSquare = !this.validCoordinate(row + 2,col - 1) || board.getPiece(Square.at(row + 2, col - 1));
        if(this.validCoordinate(row + 2,col - 1) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row + 2,col - 1));
        pieceOnSquare = !this.validCoordinate(row - 2,col - 1) || board.getPiece(Square.at(row - 2, col - 1));
        if(this.validCoordinate(row - 2,col - 1) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row - 2,col - 1));
        pieceOnSquare = !this.validCoordinate(row + 1,col + 2) || board.getPiece(Square.at(row + 1, col + 2));
        if(this.validCoordinate(row + 1,col + 2) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row + 1,col + 2));
        pieceOnSquare = !this.validCoordinate(row - 1,col + 2) || board.getPiece(Square.at(row - 1, col + 2));
        if(this.validCoordinate(row - 1,col + 2) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row - 1,col + 2));
        pieceOnSquare = !this.validCoordinate(row + 1,col - 2) || board.getPiece(Square.at(row + 1, col - 2));
        if(this.validCoordinate(row + 1,col - 2) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row + 1,col - 2));
        pieceOnSquare = !this.validCoordinate(row - 1,col - 2) || board.getPiece(Square.at(row - 1, col - 2));
        if(this.validCoordinate(row - 1,col - 2) && (!pieceOnSquare || (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King))))
            moves.push(Square.at(row - 1,col - 2));
        return moves;
    }
}
