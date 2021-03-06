/*
 * Visualization of the features of the physical world.
 */
(function(host) {

  function Display(displayElementSelector, canvasWidth, canvasHeight) {
    this.drawingContext = null;
    this.displayElementSelector = displayElementSelector;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.coordinatesZero = {
      x: canvasWidth / 2,
      y: canvasWidth / 2
    };
  }

  Display.prototype.init = function() {
    var displayElement = document.querySelector(this.displayElementSelector);

    displayElement.width = this.canvasWidth;
    displayElement.height = this.canvasHeight;
    this.drawingContext = displayElement.getContext("2d");
    this.drawingContext.font="22px Arial";
  };

  Display.prototype.clear = function() {
    this.drawingContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  };

  //Subclasses should implement this method
  Display.prototype.draw = function(features) {
  };

  host.Display = Display;
})(this);