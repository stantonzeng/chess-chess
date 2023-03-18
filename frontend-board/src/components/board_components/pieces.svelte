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
    let isSideClass = sidePiece ? "side_piece" : "piece"

</script>

    <img 
    class = "{isSideClass} {pieceKeyID}"
    id = {pieceKey}
    src = {pieceValue} 
    alt = {pieceKey}
    draggable="true" 
    on:dragstart = {handleDragStart}
    on:dragend = {handleDragEnd}/>

<style>
    :global(.piece):hover, :global(.side_piece):hover {
    background: orange;
    cursor: pointer;
}
</style>