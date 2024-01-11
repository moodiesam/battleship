
class Gameboard {
    constructor (playerName) {
        this.playerName = playerName;
        this.boardInfo = []
        this.shipInfo = []
    }

    createBoard() {
        for (let i=0; i < 100; i++) {
            this.boardInfo.push({ship: null, hit: false});
        }
    };

    placeShip(ship, startingPosition, vertical = false) {
        this.shipInfo.push(ship);
        if (vertical === false) {
            for (let i = 0; i < ship.length; i++) {
                this.boardInfo[startingPosition + i].ship = ship.id;
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                this.boardInfo[startingPosition + i * 10].ship = ship.id
            }
        }
    };

    receiveAttack(coordinates) {
        let shipIndex;
        this.shipInfo.forEach((ship) => {
            if (ship.id === this.boardInfo[coordinates].ship) {
                shipIndex = this.shipInfo.indexOf(ship);
            }
        })
        
        if (this.boardInfo[coordinates].hit === true) {
            return 'Already shot here';
        } else if (this.boardInfo[coordinates].ship === null) {
            this.boardInfo[coordinates].hit = true;
            return 'Missed!';
        } else {
            this.boardInfo[coordinates].hit = true;
            this.shipInfo[shipIndex].hit();
        };

    };

    allShipsSunk() {
        let allSunk = true;
        this.boardInfo.forEach((space) => {
            if (space.ship !== null && space.hit === false)
            allSunk = false;
        })
        return allSunk;
    }
}

module.exports = Gameboard;