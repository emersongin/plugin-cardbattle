function WindowTitle() {
    this.initialize.apply(this, arguments);
}

WindowTitle.prototype = Object.create(Window_Base.prototype);
WindowTitle.prototype.constructor = WindowTitle;

WindowTitle.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, Graphics.boxHeight);
    this._text = "";
    this._textAlign = 'center';
    this.padding = 6;
    this.openness = 0;

};

WindowTitle.prototype.addText = function(text) {
    this._text = text || '';
};

WindowTitle.prototype.setTextAlign = function(align) {
    this._textAlign = align || 'left';
};

WindowTitle.prototype.refresh = function() {
    this.contents.clear();
    this.resize(Graphics.boxWidth, 1 * this.contents.fontSize + 24);
    this.drawText(this._text, 0, 0, this.width - 10, this._textAlign);
};

WindowTitle.prototype.resize = function(width, height) {
    this.move(this.x, this.y , width, height);
};

WindowTitle.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this.isOpen() && this.isTriggered()) {
        this.close();

    }

}

WindowTitle.prototype.isTriggered = function() {
    return (
        Input.isRepeated('ok') || 
        Input.isRepeated('cancel') || 
        TouchInput.isRepeated()
    );
};
