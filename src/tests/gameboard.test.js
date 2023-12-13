const { default: expect } = require("expect");
const Gameboard = require("../gameboard");
const Ship = require("../ship");

//test creating the 100 square board

test('create a board with 100 positions', () => {
    const game = new Gameboard();
    game.createBoard();
    expect(game.boardInfo.length).toBe(100);
})

//test to place ship on gameboard

test('place ship over four positions', () => {
    const game = new Gameboard();
    const fighter = new Ship('fighter', 4);
    
    game.createBoard();
    game.placeShip(fighter, 32);
    expect(game.boardInfo[31].ship).toBe(null);
    expect(game.boardInfo[32].ship).toBe('fighter');
    expect(game.boardInfo[33].ship).toBe('fighter');
    expect(game.boardInfo[34].ship).toBe('fighter');
    expect(game.boardInfo[35].ship).toBe('fighter');
    expect(game.boardInfo[36].ship).toBe(null);
})

//test to place ship vertically on gameboard

test('place ship vertically over 3 positions', () => {
    const game = new Gameboard();
    const mini = new Ship('mini', 3);
    
    game.createBoard();
    game.placeShip(mini, 0, true);

    expect(game.boardInfo[0].ship).toBe('mini');
    expect(game.boardInfo[10].ship).toBe('mini');
    expect(game.boardInfo[20].ship).toBe('mini');
    expect(game.boardInfo[30].ship).toBe(null);
})

//tests to receive an attack, determin if it hit a ship, and run 'hit' function on ship

test('receive an attack and determin if it hit a ship', () => {
    const game = new Gameboard();
    const fighter = new Ship('fighter', 4);

    game.createBoard();
    game.placeShip(fighter, 65);
    game.receiveAttack(65);

    expect(game.boardInfo[65].hit).toBe(true)
    expect(game.shipInfo[0].hits).toBe(1);

    game.receiveAttack(66);

    expect(game.boardInfo[66].hit).toBe(true)
    expect(game.shipInfo[0].hits).toBe(2);

    game.receiveAttack(64);

    expect(game.boardInfo[64].hit).toBe(true)
    expect(game.shipInfo[0].hits).toBe(2);
})

//test if all ships are sunk

test('all ships sunk', () => {
    const game = new Gameboard();
    const fighter = new Ship('fighter', 3);

    game.createBoard();
    game.placeShip(fighter, 65);
    game.receiveAttack(65);
    game.receiveAttack(66);

    expect(game.allShipsSunk()).toBe(false);

    game.receiveAttack(67);

    expect(game.allShipsSunk()).toBe(true);
})