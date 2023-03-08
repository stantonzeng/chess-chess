<script>
    import { pieceIDs } from "./pieces.svelte";
    /**
	 * @type {string}
	 */
     export let color;

     /**
	 * @type {string}
	 */
     export let name;

     /**
	 * @type {any}
	 */
      export let pieceType;

     class Tile{
        /**
          * @param {string} name 
		  * @param {string} color
		  * @param {string} pieceType
		  */
        constructor(name, color, pieceType){
            this.name = name;
            this.color = color;
            this.pieceType = pieceType;
        }
    }
    const tile = new Tile(name, color, "-1-1");
    
/******************************************************************/
    /**
	 * @param {any} e
	 */
	function handleDragEnter(e) {
        if(pieceType != 'none'){
            e.dataTransfer.dropEffect = "move";
            e.dataTransfer.setData("text", e.target.getAttribute('id'));
            console.log("Entering ", e.target.getAttribute('id'), " with ", pieceType);
        }
	}
    /**
	 * @param {any} e
	 */
    function handleDragLeave(e) {
        console.log("You left the " + e.target.getAttribute('id'));
    }

    /**
	 * @param {any} e
     * For some reason, we need to preventDefault for Dragging over to allow drop
     * to work
	 */
	function handleDragOver(e) {
        e.preventDefault();
	}

    /**
	 * @param {any} e
	 */
	function handleDragDrop(e) {
        console.log("Dropped on ", e.target.getAttribute('id'));
        e.preventDefault();
	}

</script>

<div 
id = {tile.name} 
class = "tile {tile.color}"
on:dragenter={handleDragEnter}
on:dragleave={handleDragLeave}
on:drop={handleDragDrop}
on:dragover={handleDragOver}
>
<!-- <img id = {pieceIDs.pieceHolderName[0]} src = {pieceIDs.pieceHolder[0]} alt = "test"/> -->
</div>

<style>
    .tile{
        width: 100%;
        height: 100%;
    }
    .black{    
        background-color: darkseagreen;
    }
    .white{
        background-color: azure;
    }
</style>