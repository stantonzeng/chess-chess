<script>
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

    export let ind;

    const pieceHolder = [BlackBishop, WhiteBishop, BlackKing, WhiteKing, BlackKnight,
    WhiteKnight, BlackPawn, WhitePawn, BlackQueen, WhiteQueen, BlackRook, WhiteRook];
    
    const pieceHolderAlt = ["Black Bishop", "White Bishop", "Black King", "White King", "Black Knight",
    "White Knight", "Black Pawn", "White Pawn", "Black Queen", "White Queen", "Black Rook", "White Rook"];

    const piece = {
        pieceType: pieceHolder[ind],
        pieceAlt: pieceHolderAlt[ind]
    }
</script>

<div class = "pieces_section">
    <img src = {piece.pieceType} alt = {piece.pieceAlt}/>
</div>

<style>
    .pieces_section{
        display: flex;
        background-color: bisque;
    }
</style>