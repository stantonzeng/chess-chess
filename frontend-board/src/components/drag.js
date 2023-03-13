import { writable, get } from "svelte/store";
import { piecesID } from "./board_components/pieces/piecesSetup";

let pieceMap = new Map;
for(let i = 0; i < piecesID.pieceHolderNameUnderscore.length; i++){
    pieceMap.set(piecesID.pieceHolderNameUnderscore[i], 0);
}
export let piecesCount = writable(pieceMap);

// export let piecesCount = writable({
//     Black_Bishop: "0",
//     White_Bishop: "0", 
//     Black_King: "0",
//     White_King: "0", 
//     Black_Knight: "0",
//     White_Knight: "0", 
//     Black_Pawn: "0", 
//     White_Pawn: "0", 
//     Black_Queen: "0", 
//     White_Queen: "0", 
//     Black_Rook: "0", 
//     White_Rook: "0"
// });

export let draggedPiece = writable('None');

/**
 * @param {any} e
 */
export function handleDragStart(e) {
    draggedPiece.set(e.target.id);
    e.dataTransfer.dropEffect = "move";
}
/**
 * @param {any} e
 */
export function handleDragEnd(e) {
    // console.log("Letting go of piece", get(draggedPiece));
    draggedPiece.set('None');
}

/**
     * @param {any} e
     */
export function handleDragEnter(e) {
    if(get(draggedPiece) != 'None'){
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text", e.target.getAttribute('id'));
        // console.log("Entering ", e.target.getAttribute('id'), " with ", get(draggedPiece));
    }
}
/**
 * @param {any} e
 */
export function handleDragLeave(e) {
    // console.log("You left the " + e.target.getAttribute('id'));
}
/**
 * @param {any} e
 * For some reason, we need to preventDefault for Dragging over to allow drop
 * to work
 */
export function handleDragOver(e) {
    e.preventDefault();
}
