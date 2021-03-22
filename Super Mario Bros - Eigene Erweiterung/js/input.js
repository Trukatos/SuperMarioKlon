function setupKeyboard(mario) {

    const input = new KeyboardState();

    input.addMapping("KeyP", keyState => {
      if(keyState) {
	mario.jump.start();
      } else {
	mario.jump.cancel();
      }
    });

    input.addMapping("KeyO", keyState => {
      mario.turbo(keyState);
      mario.fire();
    });

    input.addMapping("KeyD", keyState => { 
      mario.go.dir += keyState ? 1 : -1;
    });

    input.addMapping("KeyA", keyState => { 
      mario.go.dir += keyState ? -1 : 1;
    });

    input.addMapping("KeyS", keyState => {
      mario.ducking = keyState > 0;
    });

    input.addMapping("Space", keyState => {
      if(keyState) {
        if(playerEnvHandler.playerController.lives > 0) {
          timerHandler.running = !timerHandler.running;
        } else {
          playerEnvHandler.playerController.resetPlayer(levelHandler);
        }
      }
    });

    return input;
}