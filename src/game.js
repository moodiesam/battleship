import Ship from './ship'
import Gameboard from './gameboard'
import Player from './player'
import { renderPlayerBoard, renderComputerBoard } from './dom';

let playerOne, computer, playerOneBoard, computerBoard;

//create the ships that will be used
let ships = [];

const carrier = new Ship('carrier', 5);
ships.push(carrier);
const cruiser = new Ship('cruiser', 4);
ships.push(cruiser);
const fighter = new Ship('fighter', 4);
ships.push(fighter);
const turbo = new Ship('turbo', 3);
ships.push(turbo);
const mini = new Ship('mini', 2);
ships.push(mini);

const game = () => {
    //create players

    playerOne = new Player('playerOne');
    computer = new Player('computer');

    //create gameboards for each player

    playerOneBoard = new Gameboard('playerOne');
    playerOneBoard.createBoard();
    computerBoard = new Gameboard('computer');
    computerBoard.createBoard();

    //place computer ships

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