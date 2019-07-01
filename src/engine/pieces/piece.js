export default class Piece {
    constructor(player) {
        this.player = player;
        this.hasMoved = false;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.hasMoved = true;
    }

    validCoordinate(Row,Col) {
        if(Row > 7) return false;
        if(Col > 7) return false;
        if(Row < 0) return false;
        if(Col < 0) return false;
        return true
    }
}
