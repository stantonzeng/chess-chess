/**
 * Holds the axis labels and amount. Develops itself
 */
class Board {
    constructor(){
        this.vertSize = 8;
        this.horzSize = 8;
        this.numUniquePieces = 12;
        this.vertAxis = ["8", "7", "6", "5", "4", "3", "2", "1"];
        this.horzAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
        this.totalSize = this.vertSize * this.horzSize;
        this.developBoard();
    }
    /**
     * Prepares the board labels using objects to insert them into the tiles 
     */
    developBoard(){
        /**
         * @type {{ lbl: string; clr: string; }[]}
         */
        this.boardLabels = [];
        /**
         * @type {number[]}
         */
        this.uniquePiecesList = [];

        for (let i = 0; i < this.vertAxis.length; i++) {
            for(let j = 0; j < this.horzAxis.length; j++){
                let _lbl = this.horzAxis[j].concat(this.vertAxis[i]);
                let _clr = (i+j+2)%2 ? "black" : "white";
                this.boardLabels[i*this.vertSize + j] = {lbl: _lbl, clr: _clr};
            }
        }
        for (let i = 0; i < this.numUniquePieces; i++) {
            this.uniquePiecesList[i] = i;
            
        }
    }
};

export const board = new Board();