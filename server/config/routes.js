// get Task controller
const Task = require('./../controllers/tasks')
// access a url, and calls the callback
module.exports = (app) => {
    app.get('/', Task.index)
    app.get('/tasks', Task.getAll)
    app.post('/tasks', Task.create)
    app.put('/tasks/update/:id', Task.update)
    app.get('/tasks/:id', Task.show)
    app.delete('/delete/:id', Task.destroy)
}