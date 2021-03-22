function loadEntities() {
  const entityFactories = new Object();

  function addAs(name) {
    return factory => entityFactories[name] = factory
  }

  return Promise.all([
    loadMario().then(addAs("mario")),
    loadGoomba().then(addAs("goomba")),
    loadKoopa().then(addAs("koopa")),
  ])
  .then(() => entityFactories);
}