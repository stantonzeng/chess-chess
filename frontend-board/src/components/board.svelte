<script>
	import Tile from './board_components/tile.svelte';
	import Pieces from './board_components/pieces.svelte';
	import { piecesID } from './board_components/pieces/piecesSetup';
	import { draggedPiece } from './drag';
	import { board } from './boardSetup';
	
	let pieceBeingDragged = 'None';
	draggedPiece.subscribe((_draggedPiece) => pieceBeingDragged = _draggedPiece);
	
</script>

<div class = "board_and_pieces">
	<h2> Dragging Piece : {pieceBeingDragged}</h2>
	<!------------------------------TILES START------------------------------>
	<div class = "board">
		<!--This if statement is used just to remove the undefined board1 error-->
		{#if board.boardLabels}
			<!--Loop through the boardLabels and assign them to each tile-->
			{#each board.boardLabels as bl}
				<Tile name = {bl.lbl} color = {bl.clr} bind:draggedPieceType = {pieceBeingDragged}/>
			{/each}
		{/if}
	</div>
	<!------------------------------TILES END------------------------------>


	<!------------------------------PIECES START------------------------------>
	<!--This holds the pieces grid and centers it-->
	<div class = "pieces">
		<!--Grids the pieces on the side-->
		<div 
		class = "pieces_grid">
			{#if piecesID.pieceMap}
				{#each [...piecesID.pieceMap] as [key, value]}
					<Pieces pieceKey = {key} pieceValue = {value}/>
				{/each}
			{/if}
		</div>
	</div>	
	<!------------------------------PIECES END------------------------------>
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
		background-color: bisque;
		/* grid-template-areas: 
			". ."
			". ."
			". ."
			". ."
			". ."
			". .";  */
	}
</style>