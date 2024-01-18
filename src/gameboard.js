
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
        if (vertical === false) {
            //if ship hits end of row, cancel drop
            let availableSpace = 10 - startingPosition % 10;
            if (availableSpace < ship.length) return -1;

            //if any spaces contain a ship already, cancel drop
        
            for (let i = 0; i < ship.length; i++) {
                if (this.boardInfo[startingPosition + i].ship !== null) {
                    return -1
                }
            }

            this.shipInfo.push(ship);
            for (let i = 0; i < ship.length; i++) {
                this.boardInfo[startingPosition + i].ship = ship.id;
            }
        } else {
            let availableSpace = 10 - startingPosition.toString().split('')[0]
            if (availableSpace < ship.length) return -1;

            for (let i = 0; i < ship.length; i++) {
                if (this.boardInfo[startingPosition + i * 10].ship !== null) {
                    return -1
                }
            }

            this.shipInfo.push(ship);
            for (let i = 0; i < ship.length; i++) {
                this.boardInfo[startingPosition + i * 10].ship = ship.id
            }
        }
    };

    generateRandomBoard(ships) {
        ships.forEach((ship) => {
            this.placeRandomShip(ship);
        })
    }

    placeRandomShip(ship) {
            //generate random drop spot
            let coordinates = Math.floor(Math.random() * 100)

            //generate whether vertical
            let vertical = Math.floor(Math.random() * 100)
            if (vertical < 50) {
                vertical = false;
            } else {
                vertical = true;
            };

            //if spot not available, run again
            if (this.placeShip(ship, coordinates, vertical) === -1) {
                this.placeRandomShip(ship)
            }

            //else, place the ship
            
        }
    

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
            this.shipInfo[shipIndex].isSunk();
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