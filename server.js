const express = require('express');
const bodyParser = require('body-parser');
const initDB = require('./config/db');
const app = express()
const port = process.env.PORT || 3001;
const userRouters = require('./app/rutas/user');
const tweetsRouters = require('./app/rutas/tweets');



const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', (req, res) =>{
  res.send({
    data:'Hola Mundo'
  })
})*/
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json({
  })
)

app.use(userRouters)
app.use(tweetsRouters)

app.listen(port, () => {
  console.log('la app esta en uso');
})

initDB();
