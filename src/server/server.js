// Set up empty JS object to act as endpoint for all routes
let projectData = {};

// Base URL for MeaningCloud Sentiment Analysis API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';


// Personal API Key for MeaningCloud Sentiment Analysis API
const apiKey = '?key=9412f417d988d658173c94cdeb016f0c';

// const express = require('express');

import express from 'express';

import fetch from 'node-fetch';

const app = express();

/* --- Dependencies --- */
// Middleware
// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
// const cors = require('cors');
import cors from 'cors';
// const read = require('body-parser/lib/read');
// import read from 'body-parser/lib/read';

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

// Function to update the app endpoint in the server side using the data received from the api.
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
      score_tag: apiData.score_tag,
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