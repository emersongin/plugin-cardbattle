/**
 * @class
 * 
 */

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

    this.tests();

}

SceneCardBattle.prototype.createSpriteset = function() {
    this._spriteset = new Spriteset_CardBattle();
    this.addChild(this._spriteset);

}

SceneCardBattle.prototype.tests  =function() {
    this._win = new WindowTitle();
    this.addWindow(this._win);
    
    this._win.addText("TEST");
    this._win.refresh();
    this._win.open();
}