import Piece from './piece';
import Square from '../square';
import { cpus } from 'os';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves = new Array(0);
        const currentSquare = board.findPiece(this);
        const row = currentSquare.row;
        const col = currentSquare.col;
        // Finds all vertical upward moves
        let tempRow = row + 1;
        let tempCol = col;
        while(true){
            if(tempRow > 7) break;
            moves.push(Square.at(tempRow,tempCol));
            if(board.getPiece(Square.at(tempRow,tempCol))) break;
            tempRow = tempRow + 1;
        }
        // Finds all vertical downward moves
        tempRow = row - 1;
        tempCol = col;
        while(true){
            if(tempRow < 0) break;
            moves.push(Square.at(tempRow,tempCol));
            if(board.getPiece(Square.at(tempRow,tempCol))) break;
            tempRow = tempRow - 1;
        }
        // Finds all horizontal left moves
        tempRow = row;
        tempCol = col + 1;
        while(true){
            if(tempCol > 7) break;
            moves.push(Square.at(tempRow,tempCol));
            if(board.getPiece(Square.at(tempRow,tempCol))) break;
            tempCol = tempCol + 1;
        }
        // Finds all horizontal right moves
        tempRow = row;
        tempCol = col - 1;
        while(true){
            if(tempCol < 0) break;
            moves.push(Square.at(tempRow,tempCol));
            if(board.getPiece(Square.at(tempRow,tempCol))) break;
            tempCol = tempCol - 1;
        }
        return moves;
    }
}
