<script>
    import { piecesCount, handleDragStart, handleDragEnd} from '../drag'
    import { piecesID, customHandleMouseDown, customHandleMouseMove, customHandleMouseUp} from './pieces/piecesSetup';
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

    const pieceKeyUnderscore = pieceKey.slice(0, 5) + "_" + pieceKey.slice(6);
    let pieceKeyID = pieceKeyUnderscore.concat('_', pieceNumber.toString());
    
    //todo differentiate the side pieces and played pieces by their classes. Maybe have
    //a toggle flag that goes t/f when they are on the side or not? Also the drag and drop
    //functions are now kinda broken lol. Good luck

</script>


    <img 
    class = "piece {pieceKeyID}"
    id = {pieceKey}
    src = {pieceValue} 
    alt = {pieceKey}
    draggable="true" 
    on:mousedown={(e) => customHandleMouseDown(e, pieceKeyID)}
    on:mousemove={customHandleMouseMove}
    on:mouseup={customHandleMouseUp}
    on:dragstart={handleDragStart}
    on:dragend={handleDragEnd}/>

<style>
    .piece:hover{
        background: orange;
        cursor: pointer;
    }
</style>