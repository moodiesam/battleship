class Player {
    constructor (name) {
        this.playerID = name;
        this.shotsFired = [];
    }

    randomMove(options) {
        let coordinates = Math.floor(Math.random() * options);

        while (this.shotsFired.includes(coordinates) === true) {
            coordinates = Math.floor(Math.random() * options);
        }
        this.shotsFired.push(coordinates);
        return coordinates;
    };


}

module.exports = Player;