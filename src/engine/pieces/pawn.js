import Piece from './piece';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves = new Array(2);
        moves[0] = Square.at(1,0);
        moves[1] = Square.at(6,7);
        return moves;
    }
}
