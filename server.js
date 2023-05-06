// Initialize our app by requiring express & creating an instance 

const express = require('express');
const app = express();
const router = express.Router();

const port = 3000;

// We will need our skills
const skills = require('./models/skills');

// We also need to seto ur view engine to EJS
app.set('view engine', 'ejs');


// Creating our root directory
app.get('/', (req, res) => {
    res.send('This is my Skills Lab');
  });

app.listen(port, () => {
    console.log('Server is listening on port 3000')
})

// Creating our skills irectory
app.get('/skills', (req, res) => {
    res.render('skills', { skills });
  });

// Creating our index page
app.get('/', (req, res) => {
    res.render('index', { skills });
  });
  
  
  



