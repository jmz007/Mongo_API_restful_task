// get the model instance we are using
// getter
const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    // this would contain the restfull routing
    index: (req, res)=>{
     Task.find({}, function(err, Tasks){
        res.json({Tasks});
     })
      },
    show: (req, res)=>{
        Task.findOne({_id : req.params.id}, function(err, Tasks){
           res.json({Tasks});
        })
         },
    
    create: (req, res)=>{
        let task = new Task({title: req.body.title, description: req.body.desciption, completed: req.body.completed})
        task.save()
        .then((success)=>{
          res.json({task});
        })
        .catch((err)=>{
          console.log(err);
          console.log('-'.repeat(90));

        })
      },
      getAll: (req, res)=>{
        Task.find({}, (err, tasks)=>{
            if (err){
                res.json({status:false,data:err})
            }
            else {
                res.json({status:true, data:tasks})
          }
        })
      },
      update: (req, res)=>{
        Task.findOne({_id: req.params.id}, (err, task)=>{
          task.title = req.body.title;
          task.save(function(err,tasks){
              if (err){
                  res.json({status:false,data:err})
              }
              else {
                res.json({status:true})
            }
          })
        })
      },
      destroy: (req, res)=>{
        Task.remove({_id: req.params.id}, function(err){
            if (err){
                res.json({status:false,data:err})
            }
            else {
              res.json({status:true})
          }
        })
         }
}