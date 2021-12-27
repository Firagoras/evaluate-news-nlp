// Set up empty JS object to act as endpoint for all routes
let projectData = {};

const express = require('express');

const app = express();

/* --- Dependencies --- */
// Middleware
const bodyParser = require('body-parser');
const cors = require('cors');
const read = require('body-parser/lib/read');

// Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'))

const PORT = '8082';
// const PORT = '8080';

app.listen(PORT, listening);

function listening() {
  console.log('Server is running on localhost', PORT);
}

app.get('/', (req, res) => res.sendFile('dist/index.html'));

// Set up a POST route with two arguments: a route name and a callback function
app.post('/postData', postData);

// Function to update the app endpoint in the server side using the data received from the client side.
function postData(req, res) {
  projectData = {
    agreement: req.body.agreement,
    confidence: req.body.confidence,
    irony: req.body.irony,
    score_tag: req.body.score_tag,
    subjectivity: req.body.subjectivity
  };
  console.log(projectData);
  res.send(projectData);
}

const fakeData = {
  "name": "Firagoras",
  "gender": "M"
};

app.get('/test', (req, res) => res.send(fakeData));