window.onload=function() {
  const canvas = document.getElementById("screen");
  const context = canvas.getContext("2d");

/*
  async/await does not work in ES5
  async function main(canvas) {
    const context = canvas.getContext("2d");
  }
*/
  function createPlayerEnv(playerEntity) {
    const playerEnv = new Entity();
    const playerControl = new PlayerController();
    playerControl.checkpoint.set(64, 64);
    playerControl.setPlayer(playerEntity);
    playerEnv.addTrait(playerControl);
    return playerEnv;
  }

  loadEntities()
  .then(entityFactory => Promise.all([
    entityFactory,
    createLevelLoader(entityFactory),
  ]))
  .then(([entityFactory, loadLevel]) => Promise.all([
    entityFactory,
    loadLevel(1, 1),
    loadFont()
  ]))
  .then(([entityFactory, level, font]) => {
    const camera = new Camera();
    window.camera = camera;

    const mario = entityFactory.mario();

    const playerEnv = createPlayerEnv(mario);
    level.entities.add(playerEnv);

    //level.comp.layers.push(createCollisionLayer(level));
    level.comp.layers.push(createDashboardLayer(font, playerEnv));

    const input = setupKeyboard(mario);

    input.listenTo(window);

    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
      level.update(deltaTime);

      camera.pos.x = Math.max(0, mario.pos.x - 100);

      level.comp.draw(context, camera);

    }

    timer.start();
  });

 
}



