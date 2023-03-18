import { writable, get } from "svelte/store";
import { piecesID } from "./board_components/pieces/piecesSetup";

/* --------------------------------WRITTABLE VARIABLES START-------------------------------- */

/**
 * @type {any}
 */
let htmlImgEle;

//@todo Possibly put pieceMap back into piecesSetup and export it here? Might clean up
let pieceMap = new Map;
for(let i = 0; i < piecesID.pieceHolderNameUnderscore.length; i++){
    pieceMap.set(piecesID.pieceHolderNameUnderscore[i], 0);
}

/* --------------------------------WRITTABLE VARIABLES END-------------------------------- */

/* --------------------------------WRITTABLES START-------------------------------- */

export let piecesCount = writable(pieceMap);

export let draggedPiece = writable('None');

export let pieceTarget = writable(htmlImgEle);

/* --------------------------------WRITTABLES END-------------------------------- */

/* --------------------------------FUNCTIONS START-------------------------------- */
/**
 * @param {any} e
 */
export function handleDragStart(e) {
    pieceTarget.set(e.target);
    draggedPiece.set(e.target.id);
    e.dataTransfer.dropEffect = "move";
}
/**
 * @param {any} e
 */
export function handleDragEnd(e) {
    pieceTarget.set(htmlImgEle);
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

/* --------------------------------FUNCTIONS END-------------------------------- */
