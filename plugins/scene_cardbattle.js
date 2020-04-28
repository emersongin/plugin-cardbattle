function SceneCardBattle() {
    this.initialize.apply(this, arguments);
}

SceneCardBattle.prototype = Object.create(Scene_Base.prototype);
SceneCardBattle.prototype.constructor = SceneCardBattle;

SceneCardBattle.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this._spriteset = null;

};

SceneCardBattle.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createDisplayObjects();

};

SceneCardBattle.prototype.start = function() {
    Scene_Base.prototype.start.call(this);

};

SceneCardBattle.prototype.update = function() {
    Scene_Base.prototype.update.call(this);

};

SceneCardBattle.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);

};

SceneCardBattle.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);

};

SceneCardBattle.prototype.createDisplayObjects = function() {
    this.createSpriteset();
    this.createWindowLayer();
    this.createAllWindows();
    this.tests();

}

SceneCardBattle.prototype.createSpriteset = function() {
    this._spriteset = new SpritesetCardBattle();
    this.addChild(this._spriteset);

}

SceneCardBattle.prototype.createAllWindows = function() {
    this.createTitleWindow();
    this.createTextWindow();
    this.createFolderSelectionWindow();
}

SceneCardBattle.prototype.createTitleWindow = function() {
    this._titleWindow = new WindowTitle();
    this._titleWindow.changeTextColor('#ed9100');
    this._titleWindow.move(0, Graphics.boxHeight / 3);
    this.addWindow(this._titleWindow);
}

SceneCardBattle.prototype.createTextWindow = function() {
    this._textWindow = new WindowText();
    this._textWindow.move(0, Graphics.boxHeight / 2.3);
    this.addWindow(this._textWindow);
}

SceneCardBattle.prototype.createFolderSelectionWindow = function() {
    this._folderSelectionWindow = new WindowFolderSelection($gameCardPlayer.getFolders());
    this._folderSelectionWindow.move(0, Graphics.boxHeight / 2.3);
    this.addWindow(this._folderSelectionWindow);
}

SceneCardBattle.prototype.tests = function() {
    // this._titleWindow.addText("Start");
    // this._titleWindow.refresh();
    // this._titleWindow.open();

    // this._textWindow.addText(['Nome','','']);
    // this._textWindow.refresh();
    // this._textWindow.open();

    this._folderSelectionWindow.setHandler('OPTION_FOLDER_1', this.cmd.bind(this));
    this._folderSelectionWindow.setHandler('OPTION_FOLDER_2', this.cmd.bind(this));
    this._folderSelectionWindow.setHandler('OPTION_FOLDER_3', this.cmd.bind(this));

    this._folderSelectionWindow.activate()
    this._folderSelectionWindow.open();

    console.log(this._folderSelectionWindow.isOpen());
}

SceneCardBattle.prototype.cmd = function() {

}