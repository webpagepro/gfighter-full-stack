const knex = require('../db/knex');

// This file should only respond with `res.json()`
// Never use `res.redirect` or `res.render`


  module.exports = {
    index: (req, res) => {
        knex(fighters)
        .then(fighter => res.json(fighter))
    },

    individual:(req, res) => {
      knex('fighters')
      .where('id', req.params.id)
      .then(fighter => res.json(fighter[0]))
  },

  list:(req, res) => {
    knex('fighters')
    //.where('expense_sender_id', req.params.id)
    .then(fighter => res.json(fighter))
},


add: (req, res) => {
  knex('fighters')
    .insert(req.body, '*')
    .then(newFighter => res.json(newFghter))
},

update:(req, res) => {
    knex('fighters')
    .where('id', req.params.id)
    .update({
        name:req.body.name,
        bio: req.body.bio,
        image_url: req.body.image_url,
        strength: req.body.strength
        })
    .then(fighter => res.json(fighter))
},


plus:(req, res) => {
  knex('fighters')
  .insert({
      name:req.body.name,
      bio: req.body.bio,
      image_url: req.body.image_url,
      strength: req.body.strength
      }, '*')
  .then(fighter => res.json(fighter[0]))
},

delete: (req, res) => {
    knex('fighters')
    .where('id', req.params.id)
    .del().returning('*')
    .then(fighter => res.json(fighter))
    }   


}