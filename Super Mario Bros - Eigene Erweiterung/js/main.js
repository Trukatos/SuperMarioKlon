var levelHandler;
var entityFactoryHandler;
var timerHandler;
var playerEnvHandler;
var fontHandler;
var cameraHandler;
var currentWorld = 1;
var currentLevel = 1;

function createPlayerEnv(playerEntity) {
    const playerEnv = new Entity();
    const playerControl = new PlayerController();
    playerControl.checkpoint.set(42, 192 - playerEntity.size.y);  //standard start at 42, 176
    //playerControl.checkpoint.set(3410, 192 - playerEntity.size.y);  //standard start at 42, 176
    playerControl.setPlayer(playerEntity);
    playerEnv.addTrait(playerControl);
    return playerEnv;
  }

window.onload=function() {
  const canvas = document.getElementById("screen");
  const context = canvas.getContext("2d");

/*
  async/await does not work in ES5
  async function main(canvas) {
    const context = canvas.getContext("2d");
  }
*/
  
  loadEntities()
  .then(entityFactory => Promise.all([
    entityFactory,
    createLevelLoader(entityFactory),
  ]))
  .then(([entityFactory, loadLevel]) => Promise.all([
    entityFactory,
    loadLevel(currentWorld, currentLevel),
    loadFont()
  ]))
  .then(([entityFactory, level, font]) => {
    const camera = new Camera(0, level.width);
    window.camera = camera;
    const mario = entityFactory.mario();

    const playerEnv = createPlayerEnv(mario);
    level.entities.add(playerEnv);

    //level.comp.layers.push(createCollisionLayer(level));
    level.comp.layers.push(createDashboardLayer(font, playerEnv));

    levelHandler = level;
    levelHandler.tileCollider.tiles.matrix.usedTiles = [];
    entityFactoryHandler = entityFactory;
    playerEnvHandler = playerEnv;
    fontHandler = font;
    cameraHandler = camera;
    const input = setupKeyboard(mario);

    input.listenTo(window);

    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
        if(timerHandler.running) {
          levelHandler.update(deltaTime);

          //camera.pos.x = Math.min(Math.max(0, mario.pos.x - 100), levelHandler.width - camera.size.x);
          camera.setX(mario.pos.x);

          if(camera.pos.x < camera.prevX) {
            camera.pos.x = camera.prevX;
          } else {
            camera.prevX = camera.pos.x;
          }

          levelHandler.comp.draw(context, camera);
	}
    }

    timer.start();
    timerHandler = timer;
  });

 
}



