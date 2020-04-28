function WindowText() {
    this.initialize.apply(this, arguments);
}

WindowText.prototype = Object.create(Window_Base.prototype);
WindowText.prototype.constructor = WindowText;

WindowText.prototype.initialize = function () {
    Window_Base.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, Graphics.boxHeight);
    this._textBox = [];
    this.openness = 0;
    this.padding = 12;
};

WindowText.prototype.cleanContent = function () {
    this._textBox = [];
    this.contents.clear();

};

WindowText.prototype.resize = function(width, height) {
    this.move(this.x, this.y , width, height);
};

WindowText.prototype.addText = function (labels) {
    if (Array.isArray(labels) === false) {
        if (labels) {
            labels = [labels];
            
        }else{
            labels = [''];

        }
    }

    labels.forEach(label => {
        return this._textBox.push(label);
    });
};

WindowText.prototype.refresh = function () {
    let contentMaxWidth = 0;
    let lineSpacing = 0;
    let linesAmount = this._textBox.length;
    let labels = this._textBox;
    
    labels.forEach(label => {
        contentMaxWidth < label.length ? label.length : contentMaxWidth;      
    })

    this.contents.clear();
    this.resize(Graphics.boxWidth, linesAmount * this.contents.fontSize + 48);
    
    labels.forEach(label => {
        this.drawText(label, 0, lineSpacing, this.width - 40, 'left');
        lineSpacing += this.contents.fontSize;

    })

};

WindowText.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this.isOpen() && this.isTriggered()) {
        this.close();

    }

}

WindowText.prototype.isTriggered = function() {
    return (
        Input.isRepeated('ok') || 
        Input.isRepeated('cancel') || 
        TouchInput.isRepeated()
    );
};