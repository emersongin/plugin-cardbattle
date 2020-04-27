
function Spriteset_CardBattle() {
    this.initialize.apply(this, arguments);
}

Spriteset_CardBattle.prototype = Object.create(Spriteset_Base.prototype);
Spriteset_CardBattle.prototype.constructor = Spriteset_Battle;

Spriteset_CardBattle.prototype.initialize = function() {
    Spriteset_Base.prototype.initialize.call(this);
    this._blackBackground = null;
    this._background = null;
};

Spriteset_CardBattle.prototype.createLowerLayer = function() {
    Spriteset_Base.prototype.createLowerLayer.call(this);
    this.createBackgroundSprite();
    this.createBackground();

};

Spriteset_CardBattle.prototype.createBackgroundSprite = function() {
    this._blackBackground = new Sprite();
    this._blackBackground.bitmap = SceneManager.backgroundBitmap();
    this._baseSprite.addChild(this._blackBackground);

};

Spriteset_CardBattle.prototype.createBackground = function() {
    let bg_data = {
        filename: 'BackgroundCardBattle',
        move: { x: 'right', y: 'down'}
    };

    this._background = new SpriteBackground(bg_data);
    this._baseSprite.addChild(this._background);

}

Spriteset_CardBattle.prototype.update = function() {
    Spriteset_Base.prototype.update.call(this);

};
