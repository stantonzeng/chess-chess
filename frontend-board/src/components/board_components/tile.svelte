<script>
    import { get } from 'svelte/store';
    import { piecesCount, pieceTarget, handleDragStart, handleDragEnter, handleDragLeave, handleDragOver } from "../drag";
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

    let dragPieceUnderscore = '';

    /**
	 * @param {HTMLImageElement} imgElem
	 * @param {any} pieceTarget
     * Deep copy of the HtmlImageElement
	 */
    function copyElementOver(imgElem, pieceTarget){
        imgElem.className = pieceTarget.getAttribute('class');
        imgElem.id = pieceTarget.getAttribute('id');
        imgElem.src = pieceTarget.getAttribute('src');
        imgElem.alt = pieceTarget.getAttribute('alt');
        imgElem.draggable = true;
    }
    
    /**
     * @param {any} e
     * When we drop the piece we are hovering, if they are a sidePiece, then we will create a DEEP copy
     * of the HTMLImageElement and place it on the board.
     * 
     * Otherwise if it is not a sidePiece, then we just simply append the element.
     * 
     * @todo Need to add the Droppable bool back in to make sure if a piece can drop in properly
     */
    function customHandleDragDrop(e) {
        if(draggedPieceType != 'None') {
            
            if($pieceTarget){ 
                let htmlElement = document.createElement("img");
                //todo make htmlElement hold the correct class (im talking black_bishop_0 -> black_bishop_1)
                copyElementOver(htmlElement, get(pieceTarget));  
                e.target.append(htmlElement);
            } 

            // Updates the piece count
            let val = get(piecesCount);
            dragPieceUnderscore = draggedPieceType.slice(0, 5) + "_" + draggedPieceType.slice(6);
            val.set(dragPieceUnderscore, val.get(dragPieceUnderscore)+1);
            piecesCount.set(val);
        }
    }

</script>

    <div 
    id = {name} 
    class = "tile {color}"
    on:dragstart={handleDragStart}
    on:dragenter={handleDragEnter}
    on:dragleave={handleDragLeave}
    on:drop={customHandleDragDrop}
    on:dragover={handleDragOver}
    >
        <!-- {#if droppable}
            <Piece 
            pieceKey = {dragPiece} 
            pieceValue = {piecesID.pieceMap?.get(`${dragPiece}`)}
            pieceNumber = {get(piecesCount).get(dragPieceUnderscore)}/>
        {/if} -->
    </div>

<style>
    .tile{
        width: 100%;
        height: 100%;
        display: flex;
        place-content: center;
        align-items: center; /* align-items keeps the pieces from being resized, remove me to undo it */
    }
    .black{    
        background-color: darkseagreen;
    }
    .white{
        background-color: azure;
    }
</style>