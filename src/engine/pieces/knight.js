import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves = new Array(0);
        const currentSquare = board.findPiece(this);
        const row = currentSquare.row;
        const col = currentSquare.col;
        if(row + 2 <= 7 && col + 1 <= 7) moves.push(Square.at(row + 2,col + 1));
        if(row - 2 >= 0 && col + 1 <= 7) moves.push(Square.at(row - 2,col + 1));
        if(row + 2 <= 7 && col - 1 >= 0) moves.push(Square.at(row + 2,col - 1));
        if(row - 2 >= 0 && col - 1 >= 0) moves.push(Square.at(row - 2,col - 1));
        if(row + 1 <= 7 && col + 2 <= 7) moves.push(Square.at(row + 1,col + 2));
        if(row - 1 >= 0 && col + 2 <= 7) moves.push(Square.at(row - 1,col + 2));
        if(row + 1 <= 7 && col - 2 >= 0) moves.push(Square.at(row + 1,col - 2));
        if(row - 1 >= 0 && col - 2 >= 0) moves.push(Square.at(row - 1,col - 2));
        return moves;
    }
}
