<script>
    /**
	 * @type {string}
	 */
     export let clr;

     /**
	 * @type {string}
	 */
     export let nme;

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
    const tile = new Tile(nme, clr, "-1-1");
</script>

<div class = "tile {tile.color}"></div>

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