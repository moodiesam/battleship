import Ship from './ship'
import Gameboard from './gameboard'
import Player from './player'
import { renderPlayerBoard, renderComputerBoard } from './dom';
import { dragDrop } from './drag-and-drop';

let playerOne, computer, playerOneBoard, computerBoard;
let ships = [];

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
    ships.push(carrier);
    const cruiser = new Ship('cruiser', 4);
    ships.push(cruiser);
    const fighter = new Ship('fighter', 4);
    ships.push(fighter);
    const turbo = new Ship('turbo', 3);
    ships.push(turbo);

    //place the four ships onto each board

    //playerOneBoard.placeShip(carrier, 4);
    //playerOneBoard.placeShip(cruiser, 41);
    //playerOneBoard.placeShip(fighter, 58, true);
    //playerOneBoard.placeShip(turbo, 82);

    // computerBoard.placeShip(ships[0], 14);
    // computerBoard.placeShip(ships[1], 21);
    // computerBoard.placeShip(ships[2], 18, true);
    // computerBoard.placeShip(ships[3], 99);

    computerBoard.generateRandomBoard(ships)

    renderPlayerBoard(playerOneBoard);

    renderComputerBoard(computerBoard);

    

    return {
        playerOne,
        playerOneBoard,
        computer,
        computerBoard,
        ships
    }

};

export { game, playerOne, computer, playerOneBoard, computerBoard, ships };