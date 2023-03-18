<script>
    import { piecesCount, handleDragStart, handleDragEnd} from '../drag'
    import { piecesID } from './pieces/piecesSetup';
    /**
	 * @type {string}
	 */
    export let pieceKey;
    /**
	 * @type {string}
	 */
    export let pieceValue;
    /**
	 * @type {number}
	 */ 
    export let pieceNumber = 0;
    /**
	 * @type {boolean}
	 */ 
    export let sidePiece = false;

    const pieceKeyUnderscore = pieceKey.slice(0, 5) + "_" + pieceKey.slice(6);
    let pieceKeyID = pieceKeyUnderscore.concat('_', pieceNumber.toString());

</script>

    <img 
    class = "piece {pieceKeyID}"
    id = {pieceKey}
    src = {pieceValue} 
    alt = {pieceKey}
    draggable="true" 
    on:dragstart = {handleDragStart}
    on:dragend = {handleDragEnd}/>

<style>
    .piece:hover{
        background: orange;
        cursor: pointer;
    }
</style>