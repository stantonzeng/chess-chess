import { writable, get } from "svelte/store";

export let draggedPiece = writable('None');
export let droppable = writable(false);

/**
 * @param {any} e
 */
export function handleDragStart(e) {
    console.log(e.target.id);
    draggedPiece.set(e.target.id);
    e.dataTransfer.dropEffect = "move";
}
/**
 * @param {any} e
 */
export function handleDragEnd(e) {
    console.log("Letting go of piece", get(draggedPiece));
    draggedPiece.set('None');
}

/**
     * @param {any} e
     */
export function handleDragEnter(e) {
    if(get(draggedPiece) != 'None'){
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text", e.target.getAttribute('id'));
        console.log("Entering ", e.target.getAttribute('id'), " with ", get(draggedPiece));
    }
}
/**
 * @param {any} e
 */
export function handleDragLeave(e) {
    console.log("You left the " + e.target.getAttribute('id'));
}
/**
 * @param {any} e
 * For some reason, we need to preventDefault for Dragging over to allow drop
 * to work
 */
export function handleDragOver(e) {
    e.preventDefault();
}
/**
 * @param {any} e
 * @param {any} pieces
 */
export function handleDragDrop(e, pieces) {
    console.log("Dropped on ", e.target.getAttribute('id'), " with ", get(draggedPiece));
    console.log(pieces.pieceMap?.get(`${get(draggedPiece)}`));
    e.preventDefault();
    // draggedPiece.set(get(draggedPiece));
    if(get(draggedPiece) != 'None') {
        droppable.set(true);
    }
}