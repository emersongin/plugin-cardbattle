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
    this._background = null;

};

SceneCardBattle.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createBackground();
    this.addChild(this._background);
};

SceneCardBattle.prototype.createBackground = function() {
    this._background = new SpriteBackground({
        filename: 'BackgroundCardBattle',
        move: { x: 'right', y: 'down'}
    });

}

SceneCardBattle.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this._background.show();

};

SceneCardBattle.prototype.update = function() {
    Scene_Base.prototype.update.call(this);
    this._background.update();

};

SceneCardBattle.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);

};

SceneCardBattle.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);

};