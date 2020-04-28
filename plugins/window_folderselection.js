function WindowFolderSelection() {
    this.initialize.apply(this, arguments);
}

WindowFolderSelection.prototype = Object.create(Window_Command.prototype);
WindowFolderSelection.prototype.constructor = WindowFolderSelection;
    
WindowFolderSelection.prototype.initialize = function(folders) {
    this._folders = folders;
    this._energieFolders = [];
    this.createEnergieFolders();
    Window_Command.prototype.initialize.call(this, 0, 0);
    this.openness = 0;
    this.move(Graphics.boxWidth / 16, Graphics.boxHeight / 3.5, 
                this.windowWidth(), this.windowHeight());
};

WindowFolderSelection.prototype.windowWidth = function() {
    return 714;
};

WindowFolderSelection.prototype.windowHeight = function() {
    return Graphics.boxHeight / 2;
};

WindowFolderSelection.prototype.numVisibleRows = function() {
    return 3;
};

WindowFolderSelection.prototype.itemHeight = function() {
    return 92;
    let contentHeight = this.height - this.padding * 2;
    return Math.floor(contentHeight / this.numVisibleRows());
};

WindowFolderSelection.prototype.createEnergieFolders = function() {
    this._folders.forEach(folder => {
        this.createSpecialEnergiesFolder(folder.collection);
    });
};

WindowFolderSelection.prototype.createSpecialEnergiesFolder = function(collection) {
    let SEnergies = new GameSpecialEnergies();

    collection.forEach(gameStoredCard => {
        let cardColor = $dataCards[gameStoredCard.id].color;
        SEnergies[cardColor] += gameStoredCard.amount;
    });

    this._energieFolders.push(SEnergies);
};

WindowFolderSelection.prototype.getSEnergiesFolder = function(index) {
    return this._energieFolders[index];
};

WindowFolderSelection.prototype.makeCommandList = function() {
    this.addCommand(this._folders[0].name, "FIRST_FOLDER");
    this.addCommand(this._folders[1].name, "SECOND_FOLDER");
    this.addCommand(this._folders[2].name, "THIRD_FOLDER");
};

WindowFolderSelection.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    this.drawTextEx(this.commandName(index), rect.x, rect.y + 10);
    this.drawTextEx(this.drawSpecialEnergiesIcons(index), rect.x, rect.y + 50);
};

WindowFolderSelection.prototype.drawSpecialEnergiesIcons = function(index) {
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
