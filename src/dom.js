import { dragDrop } from "./drag-and-drop";
import { playerOne, computer, playerOneBoard, computerBoard, ships } from "./game";


function renderPlayerBoard(board) {

    clearPlayerGameboard()

    //render player board

    const playerGameboard = document.getElementById('playerGameboard');
    let cellID = 0;

    board.boardInfo.forEach((cell) => {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.classList.add('playerCell');
        newCell.id = cellID;

        if (cell.ship === null && cell.hit === true) {
            newCell.textContent = 'X';
            newCell.classList.add('emptyHitCell')
        } else if (cell.ship !== null && cell.hit === true){
            newCell.textContent = 'X';
            newCell.classList.add('occupiedHitCell')
        } else if (cell.ship !== null) {
            newCell.classList.add('occupiedCell')
        } else {newCell.classList.add('emptyCell')}

        cellID++;
        playerGameboard.appendChild(newCell);
    })

    renderDroppableShips()

    dragDrop(ships);
};

function clearPlayerGameboard() {
    const playerGameboard = document.getElementById('playerGameboard');
    while (playerGameboard.firstChild) {
        playerGameboard.firstChild.remove();
    }
};

function renderComputerBoard(board) {

    clearComputerGameboard()
    
    const computerGameboard = document.getElementById('computerGameboard');
    let cellID = 0;

    board.boardInfo.forEach((cell) => {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.id = cellID;

        //create classes for computer board

        if (cell.hit === true && cell.ship === null) {
            newCell.textContent = 'X';
            newCell.classList.add('emptyHitCell');
        } else if (cell.hit === true && cell.ship !== null) {
            newCell.classList.add('occupiedHitCell');
        } else {
            newCell.classList.add('emptyCell');
        }
        

        //create event for turn
        if (computerBoard.allShipsSunk() === true || playerOneBoard.allShipsSunk() === true) {} 
        else if (cell.hit === false) {
            
            newCell.addEventListener("click", e => {
                board.receiveAttack(e.target.id)
                renderComputerBoard(board);
                declareWinner(computerBoard)

                //make random computer attack

                playerOneBoard.receiveAttack(computer.randomMove(100));
                clearPlayerGameboard();
                renderPlayerBoard(playerOneBoard);
                declareWinner(playerOneBoard)
            })
        }

        cellID++;
        computerGameboard.appendChild(newCell);
    })
};

function clearComputerGameboard() {
    const computerGameboard = document.getElementById('computerGameboard');
    while (computerGameboard.firstChild) {
        computerGameboard.firstChild.remove();
    }
};

function renderDroppableShips() {

    clearDroppableShips();

    //grab display box
    const shipOptionsDiv = document.querySelector('.shipOptions');
    //for each ship...
    for (let i=0; i<ships.length; i++) {
        //create div
        const newShipDisplay = document.createElement('div')
        //add displayShip, draggable and ship classes
        newShipDisplay.classList.add('displayShip');
        newShipDisplay.classList.add('ship');
        newShipDisplay.setAttribute('id', `${i}`)

        //if ship doesn't exists in playerOneBoard.shipInfo, add draggable
        if (playerOneBoard.shipInfo.indexOf(ships[i]) === -1) {
            newShipDisplay.classList.add('draggable');
            newShipDisplay.setAttribute('draggable', 'true');
        } else {
            newShipDisplay.classList.add('dropped')
        };
        
        //add cells for length of ship
        for (let s=0; s<ships[i].length; s++) {
            const newShipCell = document.createElement('div');
            newShipCell.classList.add('cell');
            newShipCell.classList.add('occupiedCell');
            newShipDisplay.appendChild(newShipCell)
        }

        //if ship is vertical, add class to display vertical
        if (ships[i].vertical === true) {
            newShipDisplay.classList.add('vertical')
        }

        shipOptionsDiv.appendChild(newShipDisplay)
    } 

    //if all ships are dropped, render computer board to start game

    if (playerOneBoard.shipInfo.length === ships.length) {

        //Instruct to attack on computer's board

        const banner = document.querySelector('.banner');
        banner.innerHTML = 'Attack!';

        renderComputerBoard(computerBoard);
    }

}

function clearDroppableShips() {
    const shipOptionsDiv = document.querySelector('.shipOptions')
    while (shipOptionsDiv.firstChild) {
        shipOptionsDiv.firstChild.remove();
    }
}

function declareWinner(board) {
    if (board.allShipsSunk() === true) {
        const winningMessage = document.getElementById('winningMessage');

        winningMessage.innerHTML = 'Winner';
        winningMessage.classList.add('winner');
    } else return;
}

//Drag and Drop function to place ship and render board with it.



export {
    renderPlayerBoard,
    renderComputerBoard,
    clearPlayerGameboard
}