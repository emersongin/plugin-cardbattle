function SpriteBackground() {
    this.initialize.apply(this, arguments);

}

SpriteBackground.prototype = Object.create(Sprite.prototype);
SpriteBackground.prototype.constructor = SpriteBackground;

SpriteBackground.prototype.initialize = function (background) {
    Sprite.prototype.initialize.call(this);
    this._filename = background.filename;
    this._layers = [];
    this._directionX = 0;
    this._directionY = 0;
    this._speed = 1;
    this._active = true;
    this.createLayers();
    this.movementPosition(background.move);
};

SpriteBackground.prototype.isActive = function () {
    return this._active;
};

SpriteBackground.prototype.isVisible = function () {
    return this.visible;
};

SpriteBackground.prototype.show = function () {
    this.visible = true;
};

SpriteBackground.prototype.hide = function () {
    this.visible = false;
};

SpriteBackground.prototype.enable = function () {
    this._active = true;
};

SpriteBackground.prototype.disable = function () {
    this._active = false;
};

SpriteBackground.prototype.createLayers = function () {
    this.loadImageTiles();
    this.setPositionTiles();
    this.addChildren();

};

SpriteBackground.prototype.loadImageTiles = function () {
    while (this._layers.length < 4) {
        this._layers.push(this.loadImage(this._filename));

    }

};

SpriteBackground.prototype.loadImage = function (filename) {
    return new Sprite(ImageManager.loadParallax(filename));
};

/**
 * layer 0 = center
 * layer 1 = left-center
 * layer 2 = upper
 * layer 3 = left-upper
 */

SpriteBackground.prototype.setPositionTiles = function () {
    this._layers[0].move(0, 0);
    this._layers[1].move(-Graphics.boxWidth, 0);
    this._layers[2].move(0, -Graphics.boxHeight);
    this._layers[3].move(-Graphics.boxWidth, -Graphics.boxHeight);

};

SpriteBackground.prototype.addChildren = function () {
    this._layers.forEach(layer => {
        this.addChild(layer);

    });

};

SpriteBackground.prototype.movementPosition = function (direction) {
    this._directionX = this.switchPositionX(direction.x);
    this._directionY = this.switchPositionY(direction.y);

};

SpriteBackground.prototype.switchPositionX = function (direction) {
    switch (direction) {
        case 'right': 
            return 1;
        case 'left': 
            return -1;
        default: 
            return 0;
    }
}

SpriteBackground.prototype.switchPositionY = function (direction) {
    switch (direction) {
        case 'up': 
            return -1;
        case 'down': 
            return 1;
        default: 
            return 0;
    }
}

SpriteBackground.prototype.update = function () {
    Sprite.prototype.update.call(this);
    if (this.isActive() && this.isVisible()) {
        this.updateMoveTiles();

    }

};

SpriteBackground.prototype.updateMoveTiles = function () {
    this.children.forEach(child => {
        this.moveLimitX(child);
        this.moveLimitY(child);
        this.updateMove(child);

    });
};

SpriteBackground.prototype.moveLimitX = function (child) {
    if (this._directionX) {
        if (child.x >= Graphics.boxWidth) {
            child.x = -Graphics.boxWidth;
        }
    }else{
        if (child.x <= -Graphics.boxWidth) {
            child.x = Graphics.boxWidth;
        }
    }

};

SpriteBackground.prototype.moveLimitY = function (child) {
    if (this._directionY) {
        if (child.y >= Graphics.boxHeight) {
            child.y = -Graphics.boxHeight;
        }
    }else{
        if (child.y <= -Graphics.boxHeight) {
            child.y = Graphics.boxHeight;
        }
    }

};

SpriteBackground.prototype.updateMove = function (child) {
    child.x += (this._speed * this._directionX);
    child.y += (this._speed * this._directionY);

};
