class Ship {
    constructor(id, length, hits = 0, sunk = false) {
        this.id = id;
        this.length = length;
        this.hits = hits;
        this.sunk = sunk;
    }

    hit() {
        this.hits += 1;
    };

    isSunk() {
        if (this.hits >= this.length) {
            this.sunk = true;
        }
    }


};

module.exports = Ship;