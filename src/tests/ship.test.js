const { default: expect } = require("expect");
const Ship = require("../ship");

//test for the creating of a new ship

test('create ship with length of 4 and zero hits', () => {
    const newShip = new Ship('fighter', 4)
    expect(newShip.id).toBe('fighter');
    expect(newShip.length).toBe(4);
    expect(newShip.hits).toBe(0);
    expect(newShip.sunk).toBe(false);
})

//test that a "hit" adds one more hit

test('add a hit to a created ship', () => {
    const hitShip = new Ship('bomber', 5);
    hitShip.hit();
    hitShip.hit();
    expect(hitShip.hits).toBe(2);
})

//test that when a ship's hits match it's length, it is 'sunk'

test('sink a ship', () => {
    const sinkShip = new Ship('fighter', 4);
    sinkShip.hit();
    sinkShip.hit();
    sinkShip.hit();
    sinkShip.isSunk()
    expect(sinkShip.sunk).toBe(false);
    sinkShip.hit();
    sinkShip.isSunk()
    expect(sinkShip.sunk).toBe(true);
})