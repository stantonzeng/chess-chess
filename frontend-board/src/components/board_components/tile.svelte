<script>
    import Piece from './pieces.svelte';
    import { get } from 'svelte/store';
    import { piecesID } from "./pieces/piecesSetup";
    import { piecesCount, handleDragEnter, handleDragLeave, handleDragOver } from "../drag";
    /**
     * @type {string}
     */
    export let color;

    /**
     * @type {string}
     */
    export let name;

    /**
     * @type {string}
     */
     export let draggedPieceType;

    /**
	 * @type {string}
	 */
    let dragPiece;

    let droppable = false;

    let dragPieceUnderscore = '';
    
    
    /**
     * @param {any} e
     */
    function customHandleDragDrop(e) {
        // console.log("Dropped on ", e.target.getAttribute('id'), " with ", draggedPieceType);
        // e.preventDefault();
        if(draggedPieceType != 'None') {
            droppable = true;
            dragPiece = draggedPieceType;

            // This section updates the piece count
            let val = get(piecesCount);
            dragPieceUnderscore = dragPiece.slice(0, 5) + "_" + dragPiece.slice(6);
            val.set(dragPieceUnderscore, val.get(dragPieceUnderscore)+1);
            piecesCount.set(val);
            console.log(get(piecesCount));
        }
    }

</script>

    <div 
    id = {name} 
    class = "tile {color}"
    on:dragenter={handleDragEnter}
    on:dragleave={handleDragLeave}
    on:drop={customHandleDragDrop}
    on:dragover={handleDragOver}
    >
        {#if droppable}
            <Piece 
            pieceKey = {dragPiece} 
            pieceValue = {piecesID.pieceMap?.get(`${dragPiece}`)}
            pieceNumber = {get(piecesCount).get(dragPieceUnderscore)}/>
        {/if}
    </div>

<style>
    .tile{
        width: 100%;
        height: 100%;
        display: flex;
        place-content: center;
        /* align-items keeps the pieces from being resized, remove me to undo it */
        align-items: center; 
    }
    .black{    
        background-color: darkseagreen;
    }
    .white{
        background-color: azure;
    }
</style>