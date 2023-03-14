import BlackBishop from './Chess_bdt60.png' 
import WhiteBishop from './Chess_blt60.png' 
import BlackKing from './Chess_kdt60.png' 
import WhiteKing from './Chess_klt60.png'
import BlackKnight from './Chess_ndt60.png' 
import WhiteKnight from './Chess_nlt60.png' 
import BlackPawn from './Chess_pdt60.png' 
import WhitePawn from './Chess_plt60.png'
import BlackQueen from './Chess_qdt60.png' 
import WhiteQueen from './Chess_qlt60.png' 
import BlackRook from './Chess_rdt60.png' 
import WhiteRook from './Chess_rlt60.png'

class Pieces {
    pieceHolder: string[]
    pieceHolderName: string[]
    pieceHolderNameUnderscore: string[]
    numberOfPieces: number
    pieceMap: Map<any, any>
    constructor(){
        this.pieceHolder = [BlackBishop, WhiteBishop, BlackKing, WhiteKing, BlackKnight,
            WhiteKnight, BlackPawn, WhitePawn, BlackQueen, WhiteQueen, BlackRook, WhiteRook];
        this.pieceHolderName = ["Black Bishop", "White Bishop", "Black King", "White King", "Black Knight",
            "White Knight", "Black Pawn", "White Pawn", "Black Queen", "White Queen", "Black Rook", "White Rook"];
        this.pieceHolderNameUnderscore = ["Black_Bishop", "White_Bishop", "Black_King", "White_King", "Black_Knight",
            "White_Knight", "Black_Pawn", "White_Pawn", "Black_Queen", "White_Queen", "Black_Rook", "White_Rook"];
        this.numberOfPieces = this.pieceHolder.length;
        this.pieceMap = new Map();
        for(let i = 0; i < this.numberOfPieces; i++)
        {
            this.pieceMap.set(this.pieceHolderName[i], this.pieceHolder[i])!;
        }
    }
}

export const piecesID = new Pieces();

let tempStylePosition = '';

let activeGrabPiece: HTMLElement | null = null;

/**
 * @param {any} e
 */
export function customHandleMouseDown(e: { clientX: any; clientY: any; offsetX: any; offsetY: any; target: any; }, pieceKeyID: string){
    let pce = document.getElementsByClassName(pieceKeyID) as HTMLCollectionOf<HTMLElement>;
    tempStylePosition = pce[0].style.position;
    pce[0].style.position = "absolute";
    pce[0].style.left = `${e.clientX - 30}px`;
    pce[0].style.top = `${e.clientY - 30}px`;
    activeGrabPiece = pce[0];
} 

/**
 * @param {any} e
 */
export function customHandleMouseMove(e: { clientX: any; clientY: any; offsetX: any; offsetY: any; target: any; }){
    if(activeGrabPiece)
    {
        tempStylePosition = activeGrabPiece.style.position;
        activeGrabPiece.style.position = "absolute";
        activeGrabPiece.style.left = `${e.clientX - 30}px`;
        activeGrabPiece.style.top = `${e.clientY - 30}px`;
    }
    
} 

/**
 * @param {any} e
 */
export function customHandleMouseUp(e: { clientX: any; clientY: any; offsetX: any; offsetY: any; target: any; }){
    if(activeGrabPiece){
        activeGrabPiece.style.position = tempStylePosition;
        activeGrabPiece = null;
    }   
    
} 