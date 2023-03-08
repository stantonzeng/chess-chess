<script context="module">
    import BlackBishop from './pieces/Chess_bdt60.png' 
    import WhiteBishop from './pieces/Chess_blt60.png' 
    import BlackKing from './pieces/Chess_kdt60.png' 
    import WhiteKing from './pieces/Chess_klt60.png'
    import BlackKnight from './pieces/Chess_ndt60.png' 
    import WhiteKnight from './pieces/Chess_nlt60.png' 
    import BlackPawn from './pieces/Chess_pdt60.png' 
    import WhitePawn from './pieces/Chess_plt60.png'
    import BlackQueen from './pieces/Chess_qdt60.png' 
    import WhiteQueen from './pieces/Chess_qlt60.png' 
    import BlackRook from './pieces/Chess_rdt60.png' 
    import WhiteRook from './pieces/Chess_rlt60.png'
    
    class pieceID {
        constructor(){
            this.pieceHolder = [BlackBishop, WhiteBishop, BlackKing, WhiteKing, BlackKnight,
                WhiteKnight, BlackPawn, WhitePawn, BlackQueen, WhiteQueen, BlackRook, WhiteRook];
            this.pieceHolderName = ["Black Bishop", "White Bishop", "Black King", "White King", "Black Knight",
                "White Knight", "Black Pawn", "White Pawn", "Black Queen", "White Queen", "Black Rook", "White Rook"];
                this.numberOfPieces = this.pieceHolder.length;
            this.developPieceMap();
        }
        developPieceMap(){
            this.pieceMap = new Map();
            for(let i = 0; i < this.numberOfPieces; i++)
            {
                this.pieceMap.set(this.pieceHolderName[i], this.pieceHolder[i]);
            }
        }
    }

    export const pieceIDs = new pieceID();
</script>

<script>
    export let ind;

    const piece = {
        pieceType: pieceIDs.pieceHolder[ind],
        pieceName: pieceIDs.pieceHolderName[ind]
    }

</script>

<div class = "pieces_section">
    <img id = {piece.pieceName} src = {piece.pieceType} alt = {piece.pieceName}/>
</div>

<style>
    .pieces_section{
        display: flex;
        background-color: bisque;
    }
</style>