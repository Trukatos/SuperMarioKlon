function Timer(deltaTime = 1/60) {
  this.running = true;

  var accumulatedTime = 0;
  var lastTime = 0;

  this.updateProxy = (time) => {
    accumulatedTime += (time - lastTime) / 1000;
     
    if(accumulatedTime > 1) {
      accumulatedTime = 1;
    }
    while(accumulatedTime > deltaTime) {
      this.update(deltaTime);
      accumulatedTime -= deltaTime;
    }

      lastTime = time;
        this.enqueue();
  }

  this.enqueue = function() {
    requestAnimationFrame(this.updateProxy);
  }

  this.start = function() {
    this.enqueue();
  }

}