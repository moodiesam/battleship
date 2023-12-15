const Gameboard = require("../gameboard");
const Ship = require("../ship")
const Player = require("../player");

//test that each player takes turns

//test that computer makes a random move, that is legal

test('computer makes a random move', () => {
    const computer = new Player('computer');

    expect(computer.randomMove(100)).toBeLessThan(100)
})

test('computer should not use coordinates more then once', () => {
    const computer = new Player('computer');

    computer.randomMove(5);
    computer.randomMove(5);
    computer.randomMove(5);
    computer.randomMove(5);
    computer.randomMove(5);
    
    expect(computer.shotsFired.includes(0)).toBe(true);
    expect(computer.shotsFired.includes(1)).toBe(true);
    expect(computer.shotsFired.includes(2)).toBe(true);
    expect(computer.shotsFired.includes(3)).toBe(true);
    expect(computer.shotsFired.includes(4)).toBe(true);
    expect(computer.shotsFired.includes(5)).toBe(false);
})

