<script>
	import Board from '../components/board.svelte';
</script>

<body>
	<div class = "board-page">
		<Board />
	</div>
</body>

<style>
	/*For some reason, the margin becomes off if I do not add the body with 0 margin*/
	body{
		margin: 0;
	}
	.board-page {
		max-height: 100%;
		max-width :100%;
		height: 100vh;
		width: 100vw;
		display: flex;
		place-content: center;
		background-color: rgb(255, 255, 255);
	}
</style>
