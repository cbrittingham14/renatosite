const db = require("../models");

module.exports = {
  //get all shop items
  findAll: function (req, res){
    db.ShopItem.find({}).then(data => res.json(data))
    .catch(err => res.status(422).json(err));
  },

  //gets shop item by id
  findById: function (req, res){
    db.ShopItem.findById(req.params.id).then(i => res.json(i))
    .catch(err => res.status(422).json(err));
  },

  addNew: function(req, res) {
    db.ShopItem.create(req.body).then(i => res.json(i))
    .catch(err => res.status(422).json(err));
  },
  regexSearch: function (req, res){
    db.ShopItem.find({
      $or: [
        {name: { '$regex': req.params.query, '$options': 'i' }},
        {description: { '$regex': req.params.query, '$options': 'i' }}
      ]
    }).then(i => res.json(i))
    .catch(err => res.status(422).json(err));
  }
};