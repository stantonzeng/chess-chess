<script>
    import { pieces } from "./pieceSetup.svelte";
    import { draggedPiece, droppable, handleDragEnter, handleDragLeave, handleDragOver, handleDragDrop } from "../drag";
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
    //todo figure out why dropping piece on board is not working
    /******************************************************************/
    let pieceBeingDragged = 'None';
    let pieceBeingDropped = false;
	draggedPiece.subscribe((_draggedPiece) => pieceBeingDragged = _draggedPiece);
    droppable.subscribe((_pieceBeingDropped) => pieceBeingDropped = _pieceBeingDropped);

    
</script>

    <div 
    id = {name} 
    class = "tile {color}"
    on:dragenter={handleDragEnter}
    on:dragleave={handleDragLeave}
    on:drop={(e) => 
    {handleDragDrop(e, pieces)}}
    on:dragover={handleDragOver}
    >
        {#if pieceBeingDropped}
            <img 
            id = {draggedPieceType} 
            src = {pieces.pieceMap?.get(`${draggedPieceType}`)} 
            alt = "test"
            draggable = "true"/>
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