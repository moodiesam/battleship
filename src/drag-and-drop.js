import { playerOneBoard } from "./game";
import {  renderPlayerBoard } from "./dom";


function dragDrop(ships) {

    const draggables = document.querySelectorAll(`.draggable`);
    const dropLocations = document.querySelectorAll('.playerCell');
    const offsetCells = document.querySelectorAll('.offsetCell')
    let dropSpot;
    let offset;
    
    // event listeners to know where to place ship
    dropLocations.forEach(location => {
        location.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropSpot = Number(location.id)
        })
    })

    // event listeners to set offset for where ship is grabbed
    offsetCells.forEach(offsetCell => {
        offsetCell.addEventListener('mouseover', () => {
            offset = offsetCell.id.toString().split(' ')[1]
        })
    })

    // event listeners to change toggle horizontal/vertical ships placement
    draggables.forEach(draggable => {

        draggable.addEventListener('click', () => {
            if (ships[draggable.id].vertical === false) {
                ships[draggable.id].vertical = true;
            } else {
                ships[draggable.id].vertical = false;
            }
            renderPlayerBoard(playerOneBoard)
        })

        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        })


        draggable.addEventListener('dragend', () => {
            playerOneBoard.placeShip(ships[draggable.id], dropSpot, ships[draggable.id].vertical, offset);
            draggable.classList.remove(`draggable`)
            draggable.setAttribute('draggable', 'false')
            draggable.classList.remove('dragging');
            renderPlayerBoard(playerOneBoard);
            
        })
    })
}



export { dragDrop }