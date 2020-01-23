const db = require('../data/cars-config');

//Above the fold
module.exports = {
    get,
    findByid,
    insert,
    update
}

function get() {
    return db('cars');
  }

  function findByid() {
      return db('cars').where({ id: carid })
  }

  function insert(car) {
    return db('cars').insert(car)
    .then(ids => (ids[0]));
}

function update() {
    return db('cars').where({ id }).update(changes)
}