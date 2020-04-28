function GameCardPlayer() {
    this.initialize.apply(this, arguments);

}

GameCardPlayer.prototype.initialize = function() {

};

GameCardPlayer.prototype.getFolders = function() {
    return [
        {name: "Pasta 1", collection: [
            {
                id: 1,
                amount: 2
            },
            {
                id: 2,
                amount: 3
            }]
        },
        {name: "Pasta 2", collection: [
            {
                id: 1,
                amount: 1
            },
            {
                id: 2,
                amount: 2
            }]
        },
        {name: "Pasta 3", collection: [
            {
                id: 1,
                amount: 5
            },
            {
                id: 2,
                amount: 1
            }]
        }        
    ]
};
