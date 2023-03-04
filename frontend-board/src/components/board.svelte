<script>
	import Tile from './board_components/tile.svelte';
	import Pieces from './board_components/pieces.svelte';
	/**
	 * Holds the axis labels and amount. Develops itself
	 */
	class Board {
		constructor(){
			this.vertSize = 8;
			this.horzSize = 8;
			this.numUniquePieces = 12;
			this.vertAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
			this.horzAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
			this.totalSize = this.vertSize * this.horzSize;
			this.developBoard();
		}
		/**
		 * Prepares the board labels using objects to insert them into the tiles 
		 */
		developBoard(){
			/**
			 * @type {{ lbl: string; clr: string; }[]}
			 */
			this.boardLabels = [];
			/**
			 * @type {number[]}
			 */
			this.uniquePiecesList = [];

			for (let i = 0; i < this.vertAxis.length; i++) {
				for(let j = 0; j < this.horzAxis.length; j++){
					let _lbl = this.horzAxis[j].concat(this.vertAxis[i]);
					let _clr = (i+j+2)%2 ? "black" : "white";
					this.boardLabels[i*this.vertSize + j] = {lbl: _lbl, clr: _clr};
				}
			}
			for (let i = 0; i < this.numUniquePieces; i++) {
				this.uniquePiecesList[i] = i;
				
			}
		}
	};
	
	const board_1 = new Board();
	
</script>

<div class = "board_and_pieces">
	<div class = "board">
		<!--This if statement is used just to remove the undefined board1 error-->
		{#if board_1.boardLabels}
			<!--Loop through the boardLabels and assign them to each tile-->
			{#each board_1.boardLabels as bl}
				<Tile nme = {bl.lbl} clr = {bl.clr}/>
			{/each}
		{/if}
	</div>
	<!--This holds the pieces grid and centers it-->
	<div class = "pieces">
		<!--Grids the pieces on the side-->
		<div class = "pieces_grid">
			{#if board_1.uniquePiecesList}
				{#each board_1.uniquePiecesList as pl}
					<Pieces ind = {pl}/>
				{/each}
			{/if}
		</div>
	</div>	
</div>

<style>
	.board_and_pieces{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr; 
		grid-template-rows: 1fr; 
		gap: 0px 0px; 
		grid-template-areas: 
			". board pieces"; 
	}
	.board {
		grid-area: board;
		display: grid;
		place-content: center;
		grid-template-columns: repeat(8, 100px);
		grid-template-rows: repeat(8, 100px);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
	.pieces {
		grid-area: pieces;
		display: flex;
		place-content: center;
		justify-content: center;
    	align-items: center;
	}
	.pieces_grid {
		display: grid;
		grid-template-columns: 1fr 1fr; 
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr; 
		gap: 0px 0px; 
		/* grid-template-areas: 
			". ."
			". ."
			". ."
			". ."
			". ."
			". .";  */
	}
</style>