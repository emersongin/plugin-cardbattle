function WindowFolderSelection() {
    this.initialize.apply(this, arguments);
}

WindowFolderSelection.prototype = Object.create(Window_Command.prototype);
WindowFolderSelection.prototype.constructor = WindowFolderSelection;
    
WindowFolderSelection.prototype.initialize = function (folders) {
    this._folders = folders;
    this._energieFolders = [];
    Window_Command.prototype.initialize.call(this, 0, 0);
    this.openness = 0;
    this.createEnergieFolders();
    this.refresh();
};

WindowFolderSelection.prototype.getSEnergiesFolder = function (index) {
    return this._energieFolders[index];
};

WindowFolderSelection.prototype.windowWidth = function () {
    return 714;
};

WindowFolderSelection.prototype.windowHeight = function () {
    return Graphics.boxHeight / 2;
};


WindowFolderSelection.prototype.numberVisibleRows = function () {
    return 3;
};

WindowFolderSelection.prototype.itemHeight = function () {
    let contentHeight = this.height - (this.padding * 2);
    return Math.floor(contentHeight / this.numberVisibleRows());
};

WindowFolderSelection.prototype.createEnergieFolders = function () {
    this._folders.forEach(folder => {
        this.createSpecialEnergiesFolder(folder.collection);
    });
};

WindowFolderSelection.prototype.createSpecialEnergiesFolder = function (collection) {
    let SEnergies = new GameSpecialEnergies();

    collection.forEach(gameStoredCard => {
        let cardColor = $dataCards[gameStoredCard.id].color;
        SEnergies[cardColor] += gameStoredCard.amount;
    });

    this._energieFolders.push(SEnergies);
};

WindowFolderSelection.prototype.makeCommandList = function () {
    this._folders.forEach((folder, index) => {
        this.addCommand(folder.name, "OPTION_FOLDER_" + index);
    });
};

WindowFolderSelection.prototype.drawItem = function (index) {
    var rect = this.itemRectForText(index);
    this.drawTextEx(this.commandName(index), rect.x, rect.y + 10);
    this.drawTextEx(this.drawSpecialEnergiesIcons(index), rect.x, rect.y + 50);
};

WindowFolderSelection.prototype.drawSpecialEnergiesIcons = function (index) {
    let SEnergies = null;
    let label = "";
    let indexIcon = 20;

    if (this._energieFolders) {
        SEnergies = this.getSEnergiesFolder(index);

        for (let color in SEnergies) {        
            if (SEnergies.hasOwnProperty(color)) {
                label += ` \\I[${indexIcon}] ${SEnergies[color].padZero(2)}`;
                indexIcon++;
            }
        }
    
        return label;
    }

};


// WindowFolderSelection.prototype.update = function() {
//     Window_Command.prototype.update.call(this);

// }