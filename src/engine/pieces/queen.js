import Piece from './piece';
import Square from '../square';
import King from './king';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves = new Array(0);
        const currentSquare = board.findPiece(this);
        const row = currentSquare.row;
        const col = currentSquare.col;
        // Finds all right up moves
        let tempRow = row + 1;
        let tempCol = col + 1;
        while(true){
            if(!this.validCoordinate(tempRow,tempCol)) break;
            moves.push(Square.at(tempRow,tempCol));
            if(board.getPiece(Square.at(tempRow,tempCol))) break;
            tempRow = tempRow + 1;
            tempCol = tempCol + 1;
        }
        // Finds all right down moves
        tempRow = row - 1;
        tempCol = col + 1;
        while(true){
            if(!this.validCoordinate(tempRow,tempCol)) break;
            moves.push(Square.at(tempRow,tempCol));
            if(board.getPiece(Square.at(tempRow,tempCol))) break;
            tempRow = tempRow - 1;
            tempCol = tempCol + 1;
        }
        // Finds all left up moves
        tempRow = row + 1;
        tempCol = col - 1;
        while(true){
            if(!this.validCoordinate(tempRow,tempCol)) break;
            moves.push(Square.at(tempRow,tempCol));
            if(board.getPiece(Square.at(tempRow,tempCol))) break;
            tempRow = tempRow + 1;
            tempCol = tempCol - 1;
        }
        // Finds all left down moves
        tempRow = row - 1;
        tempCol = col - 1;
        while(true){
            if(!this.validCoordinate(tempRow,tempCol)) break;
            moves.push(Square.at(tempRow,tempCol));
            if(board.getPiece(Square.at(tempRow,tempCol))) break;
            tempRow = tempRow - 1;
            tempCol = tempCol - 1;
        }
        // Finds all vertical upward moves
        tempRow = row + 1;
        tempCol = col;
        while(true){
            if(!this.validCoordinate(tempRow,tempCol)) break;
            moves.push(Square.at(tempRow,tempCol));
            if(board.getPiece(Square.at(tempRow,tempCol))) break;
            tempRow = tempRow + 1;
        }
        // Finds all vertical downward moves
        tempRow = row - 1;
        tempCol = col;
        while(true){
            if(!this.validCoordinate(tempRow,tempCol)) break;
            moves.push(Square.at(tempRow,tempCol));
            if(board.getPiece(Square.at(tempRow,tempCol))) break;
            tempRow = tempRow - 1;
        }
        // Finds all horizontal left moves
        tempRow = row;
        tempCol = col + 1;
        while(true){
            if(!this.validCoordinate(tempRow,tempCol)) break;
            moves.push(Square.at(tempRow,tempCol));
            if(board.getPiece(Square.at(tempRow,tempCol))) break;
            tempCol = tempCol + 1;
        }
        // Finds all horizontal right moves
        tempRow = row;
        tempCol = col - 1;
        while(true){
            if(!this.validCoordinate(tempRow,tempCol)) break;
            moves.push(Square.at(tempRow,tempCol));
            if(board.getPiece(Square.at(tempRow,tempCol))) break;
            tempCol = tempCol - 1;
        }
        return moves;
    }
}
