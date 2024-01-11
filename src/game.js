import Ship from './ship'
import Gameboard from './gameboard'
import Player from './player'
import { renderPlayerBoard, renderComputerBoard } from './dom';

let playerOne, computer, playerOneBoard, computerBoard;

const game = () => {
    //create players

    playerOne = new Player('playerOne');
    computer = new Player('computer');

    //create gameboards for each player

    playerOneBoard = new Gameboard('playerOne');
    playerOneBoard.createBoard();
    computerBoard = new Gameboard('computer');
    computerBoard.createBoard();

    //create the four ships that will be used

    const carrier = new Ship('carrier', 5);
    const cruiser = new Ship('cruiser', 4);
    const fighter = new Ship('fighter', 4);
    const turbo = new Ship('turbo', 3);

    //place the four ships onto each board

    playerOneBoard.placeShip(carrier, 4);
    playerOneBoard.placeShip(cruiser, 41);
    playerOneBoard.placeShip(fighter, 58, true);
    playerOneBoard.placeShip(turbo, 82);

    computerBoard.placeShip(carrier, 14);
    computerBoard.placeShip(cruiser, 21);
    computerBoard.placeShip(fighter, 18, true);
    computerBoard.placeShip(turbo, 96);

    renderPlayerBoard(playerOneBoard);
    renderComputerBoard(computerBoard);

    //EACH TURN

    

    //1. player attacks coordinates XX
    //2. receive attack XX
    //3. rerender gameboard XX

    //4.computer attacks 
    //5. receive attack
    //6. rerender gameboard

    return {
        playerOne,
        playerOneBoard,
        computer,
        computerBoard
    }

};

export { game, playerOne, computer, playerOneBoard, computerBoard };