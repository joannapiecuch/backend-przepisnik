const Dish = require('../models/dish');
const restifyMongoose = require('restify-mongoose');

const dish = restifyMongoose(Dish);

module.exports = (server) => {
  server.get('/dish');
};

module.exports = (server) => {
  server.post('/dish', dish.insert());
};
