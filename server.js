const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/static')));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// loads in the mongoose config and connection to db
require('./server/config/mongoose');
// loads the routes and sends the express instances to the function
require('./server/config/routes')(app);
// or 
// const routes = require('./server/config/routes');
// routes(app);

app.listen(8080, ()=>{
  console.log('listening on port 8080');
})
