module.exports = (app) => {
  const buildings = require('../controllers/building.controller.js');

  var router = require('express').Router();

  // Create a new Buildings
  router.post('/buildings', buildings.create);

  // Retrieve all Buildings
  router.get('/buildings', buildings.findAll);

  // Retrieve a single Buildings with id
  router.get('/buildings/:id', buildings.findOne);

  // Update a Buildings with id
  router.put('/buildings/:id', buildings.update);

  // Delete a Buildings with id
  router.delete('/buildings/:id', buildings.delete);

  // delete all Buildings
  router.delete('/buildings', buildings.deleteAll);

  app.use('/buildings', router);
};
