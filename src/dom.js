import { playerOne, computer, playerOneBoard, computerBoard } from "./game";

function renderPlayerBoard(board) {
    //render player board

    const playerGameboard = document.getElementById('playerGameboard');

    board.boardInfo.forEach((cell) => {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        
        //for each boardinfo, create div and attach it to board in html
        //add classes for...
        //1. empty
        //2. occupied
        //3. empty and hit
        //4. occupied and hit
        //5. ship sunk

        if (cell.ship === null && cell.hit === true) {
            newCell.textContent = 'X';
            newCell.classList.add('emptyHitCell')
        } else if (cell.ship !== null && cell.hit === true){
            newCell.textContent = 'X';
            newCell.classList.add('occupiedHitCell')
        } else if (cell.ship !== null) {
            newCell.classList.add('occupiedCell')
        } else {newCell.classList.add('emptyCell')}

        playerGameboard.appendChild(newCell);
    })
};

function clearPlayerGameboard() {
    const playerGameboard = document.getElementById('playerGameboard');
    while (playerGameboard.firstChild) {
        playerGameboard.firstChild.remove();
    }
};

function renderComputerBoard(board) {
    const computerGameboard = document.getElementById('computerGameboard');
    let cellID = 0
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
        
        //clear computer board

        function clearComputerGameboard() {
            const computerGameboard = document.getElementById('computerGameboard');
            while (computerGameboard.firstChild) {
                computerGameboard.firstChild.remove();
            }
        };

        //create event for turn
        if (computerBoard.allShipsSunk() === true || playerOneBoard.allShipsSunk() === true) {} 
        else if (cell.hit === false) {
            newCell.addEventListener("click", e => {
                board.receiveAttack(e.target.id)
                clearComputerGameboard();
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

function declareWinner(board) {
    if (board.allShipsSunk() === true) {
        const winningMessage = document.getElementById('winningMessage');

        winningMessage.innerHTML = 'Winner';
        winningMessage.classList.add('winner');
    } else return;
}

export {
    renderPlayerBoard,
    renderComputerBoard
}