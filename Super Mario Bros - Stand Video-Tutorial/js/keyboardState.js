const PRESSED = 1;
const RELEASED = 0;

function KeyboardState() {
  // Holds the current state of a given key
  this.keyStates = new Map();

  // Holds the callback functions for a given keyCode
  this.keyMap = new Map();

  this.addMapping = function(code, callback) {
    this.keyMap.set(code, callback);
  }
  
  this.handleEvent = function(event) {
    const {code} = event;

    if(!this.keyMap.has(code)) {
      // Did not have key mapped
      return;
    }

    event.preventDefault();

    const keyState = event.type === "keydown" ? PRESSED : RELEASED;

    if(this.keyStates.get(code) === keyState) {
      return;
    }

    this.keyStates.set(code, keyState);

    this.keyMap.get(code)(keyState);
  }

  this.listenTo = function(window) {
    ["keydown", "keyup"].forEach(eventName => {
      window.addEventListener(eventName, event => {
        this.handleEvent(event);
      });
    });
  }
}