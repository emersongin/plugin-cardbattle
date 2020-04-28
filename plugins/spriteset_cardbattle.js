
function SpritesetCardBattle() {
    this.initialize.apply(this, arguments);
}

SpritesetCardBattle.prototype = Object.create(Spriteset_Base.prototype);
SpritesetCardBattle.prototype.constructor = Spriteset_Battle;

SpritesetCardBattle.prototype.initialize = function() {
    Spriteset_Base.prototype.initialize.call(this);
    this._blackBackground = null;
    this._background = null;
};

SpritesetCardBattle.prototype.createLowerLayer = function() {
    Spriteset_Base.prototype.createLowerLayer.call(this);
    this.createBackgroundSprite();
    this.createBackground();

};

SpritesetCardBattle.prototype.createBackgroundSprite = function() {
    this._blackBackground = new Sprite();
    this._blackBackground.bitmap = SceneManager.backgroundBitmap();
    this._baseSprite.addChild(this._blackBackground);

};

SpritesetCardBattle.prototype.createBackground = function() {
    let bg_data = {
        filename: 'BackgroundCardBattle',
        move: { x: 'right', y: 'down'}
    };

    this._background = new SpriteBackground(bg_data);
    this._baseSprite.addChild(this._background);

}

SpritesetCardBattle.prototype.update = function() {
    Spriteset_Base.prototype.update.call(this);

};
