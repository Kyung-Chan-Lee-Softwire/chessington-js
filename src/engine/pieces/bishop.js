import Piece from './piece';
import Square from '../square';
import King from './king';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves = Array(0);
        const currentSquare = board.findPiece(this);
        const row = currentSquare.row;
        const col = currentSquare.col;
        // Finds all right up moves
        let tempRow = row + 1;
        let tempCol = col + 1;
        while(true){
            if(!this.validCoordinate(tempRow,tempCol)) break;
            const pieceOnSquare = board.getPiece(Square.at(tempRow, tempCol));
            if(pieceOnSquare && pieceOnSquare.player == this.player) break;
            if(pieceOnSquare && pieceOnSquare instanceof King) break;
            moves.push(Square.at(tempRow,tempCol));
            if(pieceOnSquare) break;
            tempRow = tempRow + 1;
            tempCol = tempCol + 1;
        }
        // Finds all right down moves
        tempRow = row - 1;
        tempCol = col + 1;
        while(true){
            if(!this.validCoordinate(tempRow,tempCol)) break;
            const pieceOnSquare = board.getPiece(Square.at(tempRow, tempCol));
            if(pieceOnSquare && pieceOnSquare.player == this.player) break;
            if(pieceOnSquare && pieceOnSquare instanceof King) break;
            moves.push(Square.at(tempRow,tempCol));
            if(pieceOnSquare) break;
            tempRow = tempRow - 1;
            tempCol = tempCol + 1;
        }
        // Finds all left up moves
        tempRow = row + 1;
        tempCol = col - 1;
        while(true){
            if(!this.validCoordinate(tempRow,tempCol)) break;
            const pieceOnSquare = board.getPiece(Square.at(tempRow, tempCol));
            if(pieceOnSquare && pieceOnSquare.player == this.player) break;
            if(pieceOnSquare && pieceOnSquare instanceof King) break;
            moves.push(Square.at(tempRow,tempCol));
            if(pieceOnSquare) break;
            tempRow = tempRow + 1;
            tempCol = tempCol - 1;
        }
        // Finds all left down moves
        tempRow = row - 1;
        tempCol = col - 1;
        while(true){
            if(!this.validCoordinate(tempRow,tempCol)) break;
            const pieceOnSquare = board.getPiece(Square.at(tempRow, tempCol));
            if(pieceOnSquare && pieceOnSquare.player == this.player) break;
            if(pieceOnSquare && pieceOnSquare instanceof King) break;
            moves.push(Square.at(tempRow,tempCol));
            if(pieceOnSquare) break;
            tempRow = tempRow - 1;
            tempCol = tempCol - 1;
        }
        return moves;
    }
}
