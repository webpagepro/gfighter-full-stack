const knex = require('../db/knex');

// This file should only respond with `res.json()`
// Never use `res.redirect` or `res.render`

module.exports = {
  index: function(req, res) {
    res.send('hello world')
  }
}