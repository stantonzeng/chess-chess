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
 * @param {string} classString
 * Recreates the class string, but adds the correct number at the end
 * e.g: black_bishop_0 -> black_bishop_1 using this function.
 */
function findPieceTypeNumber(classString){
    const isSideClass = classString.slice(0, 4);
    if(isSideClass === "side"){
        const pieceType = classString.slice(11, 23);
        let newClassString = classString.slice(5, 24);
        return newClassString.concat(get(piecesCount).get(pieceType).toString());
    }
    return classString;
}

/**
	 * @param {any} pieceTarget
     * Deep copy of the HtmlImageElement
	 */
function copyElementOver(pieceTarget){
    let imgElem = document.createElement("img");
    imgElem.className = findPieceTypeNumber(pieceTarget.getAttribute('class'));
    imgElem.id = pieceTarget.getAttribute('id');
    imgElem.src = pieceTarget.getAttribute('src');
    imgElem.alt = pieceTarget.getAttribute('alt');
    imgElem.draggable = true;
    return imgElem;
}

/**
 * @param {any} e
 */
export function handleDragStart(e) {
    let imgElemCopy = copyElementOver(e.target);

    pieceTarget.set(imgElemCopy);
    draggedPiece.set(imgElemCopy.id);
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
