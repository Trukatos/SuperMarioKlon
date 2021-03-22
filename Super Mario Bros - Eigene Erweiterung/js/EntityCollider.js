function EntityCollider(entities) {

  this.entities = entities;

  this.check = function(subject) {
    this.entities.forEach(candidate => {
      if (subject === candidate) {
	return;
      }

      if(subject.bounds.overlaps(candidate.bounds)) {
	subject.collides(candidate);
	candidate.collides(subject);
      }
    });
  }

}