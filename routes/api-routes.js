const Todo = require('../models/Todo')

module.exports = function (app) {

  app.get('/api/todos', function(req, res) {
    Todo.find({})
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      })
  })

  app.post('/api/todos', function(req, res) {
    Todo.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.put('/api/todos/:id', function(req,res) {
    Todo.findOneAndUpdate({_id: req.params.id}, ({$set: { completed: req.body.completed }}))
    .then(function(response) {
      res.json(response)
    })
  })

  app.delete('/api/todos/:id', function(req, res) {
    Todo.findOneAndDelete({_id:req.params.id})
    .then(function(){
      res.json(`deleted ${req.params.id}`)
    })
    .catch(function(err) {
      console.log(err)
    })
  })
};