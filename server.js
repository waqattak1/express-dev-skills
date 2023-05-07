// Initialize our app by requiring express & creating an instance 

const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

// Creating the body parser variable
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


// We will need our skills, so we'll require them here
const skills = require('./models/skills');

// We also need to set our view engine to EJS
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Creating our root directory here
app.get('/', (req, res) => {
    res.send('This is my Skills Lab');
  });

  //Listening on port 3000
app.listen(port, () => {
    console.log('Server is listening on port 3000')
})

// Creating our skills directory
app.get('/skills', (req, res) => {
    res.render('skills', { skills });
  });

// Creating our index page
app.get('/', (req, res) => {
    res.render('index', { skills });
  });

// Creating a new route for 'add skill' form 
app.get('/skills/new', (req, res) => {
res.render('newSkill');
});

app.post('/skills', (req, res) => {
    // Extract the skillName and info values from the request body
    const { skillName, info } = req.body;
  
    // Add the new skill to the skills array (or database)
    skills.push({ skillName, info });
  
    // Redirect to the skills index page
    res.redirect('/skills');
  });
  
  
  
  
  



