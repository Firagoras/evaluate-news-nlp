import express from 'express';

import fetch from 'node-fetch';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

/* --- Dependencies --- */

// Middleware
import bodyParser from 'body-parser';
import cors from 'cors';

// Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'));

// Set up empty JS object to act as endpoint for all routes
let projectData = {};

// Base URL for MeaningCloud Sentiment Analysis API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';


// Personal Key for MeaningCloud Sentiment Analysis API
const apiKey = process.env.API_KEY;

const PORT = '8082';

app.listen(PORT, listening);

function listening() {
  console.log('Server is running on localhost', PORT);
}

app.get('/', (req, res) => res.sendFile('dist/index.html'));

// Set up a POST route
app.post('/postData', postData);

// Function to handle a post request from the client side and update the app endpoint with the data received from the api.
function postData(req, res) {
  const srcUrl = req.body.textUrl;
  const apiUrl = baseURL+apiKey+'&of=json&url='+srcUrl+'&lang=en';

  // Setup options for the API request 
  const requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };

  // a function call to fetch API data 
  fetchApiData(apiUrl, requestOptions)
  // Once the API data is successfully received, store selected data into the app endpoint 
  .then(apiData => {
    projectData = {
      agreement: apiData.agreement,
      confidence: apiData.confidence,
      irony: apiData.irony,
      scoreTag: apiData.score_tag,
      subjectivity: apiData.subjectivity,
      srcUrl: srcUrl
    };
  })
  .then(() => {
    // console.log('postData', projectData);
    res.send(projectData);
  });
}

// Asynchronous function to get API data
const fetchApiData = async (url, options) => {
  const response = await fetch(url, options);

  try {
    const apiData = await response.json();
    return apiData;
  } catch (error) {
    console.log('error', error)
  }
};