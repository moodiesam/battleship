import Ship from './ship'
import Gameboard from './gameboard'
import Player from './player'

const Game = () => {

    //create players

    const playerOne = new Player('playerOne');
    const computer = new Player('computer');

    //create gameboards for each player

    const playerOneBoard = new Gameboard(playerOne);
    playerOneBoard.createBoard();
    const computerBoard = new Gameboard(computer);
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
    playerOneBoard.placeShip(turbo, 86);

    computerBoard.placeShip(carrier, 14);
    computerBoard.placeShip(cruiser, 21);
    computerBoard.placeShip(fighter, 18, true);
    computerBoard.placeShip(turbo, 96);

    //EACH TURN

    //1. player attacks coordinates
    //2. receive attack
    //3. rerender gameboard

}