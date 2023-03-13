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

    const pieceKeyUnderscore = pieceKey.slice(0, 5) + "_" + pieceKey.slice(6);
    let pieceKeyID = pieceKeyUnderscore.concat('_', pieceNumber.toString());
    
    /**
     * @param {any} e
     */
    function customHandleMouseDown(e){
        // console.log("Mouse down at position ", e.clientX, " and ", e.clientY);
        // console.log("Mouse down at offset ", e.offsetX, " and ", e.offsetY);
        console.log(e.target);
        console.log(pieceKeyID)
        
        // console.log($piecesCount);
    } 

    //todo figure out why getIDName doesn't work properly
</script>


    <img 
    class = "piece {pieceKeyID}"
    id = {pieceKey}
    src = {pieceValue} 
    alt = {pieceKey}
    draggable="true" 
    on:mousedown={customHandleMouseDown}
    on:dragstart={handleDragStart}
    on:dragend={handleDragEnd}/>

<style>
</style>