function loadEntities() {
  const entityFactories = new Object();

  function addAs(name) {
    return factory => entityFactories[name] = factory
  }

  return Promise.all([
    loadMario().then(addAs("mario")),
    loadGoomba().then(addAs("goomba")),
    loadKoopa().then(addAs("koopa")),
    loadPoleFlag().then(addAs("poleFlag")),
    loadCoin().then(addAs("coin")),
    loadMushroom().then(addAs("mushroom")),
    loadFirebloom().then(addAs("firebloom")),
    loadMarioFire().then(addAs("marioFire")),
    loadDebris().then(addAs("debris")),
    loadDarkCoin().then(addAs("darkCoin")),
  ])
  .then(() => entityFactories);
}