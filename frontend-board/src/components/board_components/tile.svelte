<script>
    import { pieces } from "./pieceSetup.svelte";
    import { handleDragEnter, handleDragLeave, handleDragOver } from "../drag";
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
    /**
     * @param {any} e
     */
    function customHandleDragDrop(e) {
        console.log("Dropped on ", e.target.getAttribute('id'), " with ", draggedPieceType);
        e.preventDefault();
        if(draggedPieceType != 'None') {
            droppable = true;
            dragPiece = draggedPieceType;
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
            <img 
            id = {dragPiece} 
            src = {pieces.pieceMap?.get(`${dragPiece}`)} 
            alt = {dragPiece}
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