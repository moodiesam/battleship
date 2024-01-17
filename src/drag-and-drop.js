//create the logic for placing ships on player's board with drag and drop


import { playerOneBoard } from "./game";
import {  renderPlayerBoard } from "./dom";

function createDropListeners() {
    let dropSpot
    const dropLocations = document.querySelectorAll('.playerCell');

    dropLocations.forEach(location => {
        location.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropSpot = Number(location.id)
        })
    })
}

function dragDrop(ships) {

    const draggables = document.querySelectorAll(`.draggable`);
    const dropLocations = document.querySelectorAll('.playerCell');
    let dropSpot;

    dropLocations.forEach(location => {
        location.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropSpot = Number(location.id)
        })
    })

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        })


        draggable.addEventListener('dragend', () => {
            playerOneBoard.placeShip(ships[draggable.id], dropSpot);
            draggable.classList.remove(`draggable`)
            draggable.setAttribute('draggable', 'false')
            draggable.classList.remove('dragging');
            renderPlayerBoard(playerOneBoard);
            
        })
    })
}

// function dragDrop(ships) {

//     const draggables = document.querySelectorAll(`.draggable`);
//     const dropLocations = document.querySelectorAll('.playerCell');


//     draggables.forEach(draggable => {
//         draggable.addEventListener('dragstart', () => {
//             draggable.classList.add('dragging');
//         })

//         draggable.addEventListener('dragend', () => {
//             // playerOneBoard.placeShip(ships[draggable.id], dropSpot);
//             // draggable.classList.remove(`draggable`)
//             // draggable.setAttribute('draggable', 'false')
//              draggable.classList.remove('dragging');
//             // clearPlayerGameboard(playerOneBoard);
//             // renderPlayerBoard(playerOneBoard);
//         })
//     })

//     dropLocations.forEach(location => {
//         location.addEventListener('dragover', (e) => {
//             e.preventDefault();
//             const dropSpot = getDropLocation(location)
//             const draggable = document.querySelector('.dragging');
//             playerOneBoard.placeShip(ships[draggable.id], dropspot);
//         })
//     })

//     function getDropLocation(location) {
        
//     }
// }

export { dragDrop }