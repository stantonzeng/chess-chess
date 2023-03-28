import { writable, get } from "svelte/store";
import { piecesID } from "./board_components/pieces/piecesSetup";
import $ from 'jquery';

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

export let isItASidePiece = writable(false);

/* --------------------------------WRITTABLES END-------------------------------- */



/* --------------------------------FUNCTIONS START-------------------------------- */

function checkDraggedPiece(){
    if(get(draggedPiece) != 'None')
        return true;
    return false;
}

function getDraggedPiece(){
    return get(draggedPiece)
}

function getPiecesCount(){
    return get(piecesCount);
}

function getPieceTarget(){
    return get(pieceTarget);
}

function getIsItASidePiece(){
    return get(isItASidePiece);
}

/**
 * @param {any} e
 */
function getOffset(e) {
    const rect = e.getBoundingClientRect();
    return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
    };
}

/**
 * @param {string} classString
 * Recreates the class string, but adds the correct number at the end
 * e.g: black_bishop_0 -> black_bishop_1 using this function.
 */
function findPieceTypeNumber(classString){
    const isSideClass = classString.slice(0, 4);
    if(isSideClass === "side")
    {
        
        const pieceType = classString.slice(11, 23);
        let newClassString = classString.slice(5, 24);
        var pcecnt = getPiecesCount();

        return newClassString.concat(pcecnt.get(pieceType).toString());
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
    imgElem.addEventListener("dragstart", handleDragStart)
    imgElem.addEventListener("dragend", handleDragEnd)
    imgElem.addEventListener("mousedown", handleMouseDown)
    imgElem.addEventListener("mouseup", handleMouseUp)
    return imgElem;
}

var dx = 0
var dy = 0
/**
 * @type {any}
 */
var draggedItem = undefined;

/**
 * @param {any} e
 */
export function handleDrag(e){
    // draggedItem.style.left = e.ClientX - dx;
    // draggedItem.style.top = e.ClientY - dy;
}

/**
 * @param {any} e
 */
export function handleDragStart(e) {
    // e.preventDefault();

    // draggedItem = e.target;
    // dx = e.clientX - draggedItem.getBoundingClientRect().x;
    // dy = e.clientY - draggedItem.getBoundingClientRect().y;
    // draggedItem.style.position = 'absolute';

    // console.log(e.target);
    
    let imgElemCopy = copyElementOver(e.target);
    if(e.target.getAttribute('class').slice(0, 4) === "side"){ //todo test this out
        isItASidePiece.set(true);
        pieceTarget.set(imgElemCopy);
        // console.log(imgElemCopy);
    }
    else{
        pieceTarget.set(e.target);
    }
    draggedPiece.set(e.target.id);
    // e.dataTransfer.dropEffect = "move";
}

/**
 * @param {any} e
 */
export function handleDragEnd(e) {
    isItASidePiece.set(false);
    pieceTarget.set(htmlImgEle);
    draggedPiece.set('None');
}

/**
 * @type {any}
 */
let piece_temp = null;
/**
 * @param {any} e
 */
export function handleMouseDown(e) {
    // e.preventDefault();

    // piece_temp = copyElementOver(e.target);
    // console.log(piece_temp)
    
    // console.log(mousePosition)
    // console.log(e.target)
    // console.log(getOffset(e.target));
}

/**
 * @param {any} e
 */
export function handleMouseMove(e){
    // let mousePosition = {
    //     x: e.clientX,
    //     y: e.clientY
    // }

    // if(piece_temp != null){
    //     console.log("hello");
    //     piece_temp.style.position = "absolute";
    //     piece_temp.style.left = mousePosition.x + 'px';
    //     piece_temp.style.top = mousePosition.y + 'px';
    //     console.log(piece_temp)
    // }
}

/**
 * @param {any} e
 */
export function handleMouseUp(e) {
    piece_temp = null;
    console.log(e.target)
    pieceTarget.set(htmlImgEle);
    draggedPiece.set('None');
}

/**
 * @type {any}
 */
var enterTargetStorage_1 = null;

/**
 * @type {any}
 */
var enterTargetStorage_2 = null;

/**
 * @type {any}
 */
var enterChildTargetStorage = null;
/**
 * @param {any} e
 */
export function handleDragEnter(e) {
    
    if(checkDraggedPiece() && e.target != enterChildTargetStorage)
    {

        enterTargetStorage_2 = enterTargetStorage_1;
        enterTargetStorage_1 = e.target;

        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text", e.target.getAttribute('id'));
        
        let imgElemCopy = copyElementOver(getPieceTarget());
        imgElemCopy.className = "hoverPiece";

        if(e.target.children.length < 1)
        {

            e.target.append(imgElemCopy);
            enterChildTargetStorage = imgElemCopy;
        
        }

    }
}

/**
 * @param {any} e
 */
export function handleDragLeave(e) {
    if(checkDraggedPiece())
    {

        let node = document.getElementById(`${e.target.id}`);
        if (((enterTargetStorage_2 && enterTargetStorage_2 === e.target) 
           ||(enterTargetStorage_1 && enterTargetStorage_1 === e.target)) 
           && node && node.firstChild && node?.children[0].className == "hoverPiece") 
        {
            node.removeChild(node.firstChild);
        } 
    }
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
