
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
    
        //create event for turn

        newCell.addEventListener("click", e => {
            board.receiveAttack(e.target.id)
            board.clearComputerGameboard();
            renderComputerBoard(board);


            //make random computer attack
            //clear player board
            //rerender player board

            console.log(board.allShipsSunk());
        })

        cellID++;
        computerGameboard.appendChild(newCell);
    })
};


export {
    renderPlayerBoard,
    renderComputerBoard
}