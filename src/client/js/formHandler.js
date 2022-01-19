import { validateInput, resetMode, setAlertMode } from './formValidator.js';
import { decodePolarity } from './polarityDecoder.js';

// Function to update the user interface with data received from API

function updateUI(apiData) {
  document.getElementById('resultsHeadline').innerHTML = '<h2>Last Analysis Results</h2>';

  document.getElementById('srcUrl').innerHTML = `<span class='label'>Source: </span><a href="${apiData.srcUrl}" target="_blank">${apiData.srcUrl}</a>`;

  document.getElementById('scoreTag').innerHTML = `<span class='label'>Polarity: </span><span class='data'>${decodePolarity(apiData.scoreTag)}</span> `;

  document.getElementById('agreement').innerHTML = `<span class='label'>Agreement: </span><span class='data'>${apiData.agreement.toLowerCase()}</span>`;

  document.getElementById('confidence').innerHTML = `<span class='label'>Confidence: </span><span class='data'>${apiData.confidence.toLowerCase()}</span>`;
  
  document.getElementById('subjectivity').innerHTML = `<span class='label'>Subjectivity: </span><span class='data'>${apiData.subjectivity.toLowerCase()}</span>`;
  
  document.getElementById('irony').innerHTML = `<span class='label'>Irony: </span><span class='data'>${apiData.irony.toLowerCase()}</span>`;
}

// Asynchronous function to make a POST request to the server
const postData = async (data) => {
  const response = await fetch('http://localhost:8082/postData', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const serverData = await response.json();
    updateUI(serverData);
    return serverData;
  } catch (error) {
    console.log('error', error);
  }
}

// Function to handle the form submit event. It mainly validates input, set relevant mode and then process the request when valid input
function handleSubmit(e) {
  e.preventDefault();
  const urlInput = document.getElementById('urlInput');
  const data = {
    "textUrl": urlInput.value
  };
  // Check if URL input is valid
  if (validateInput(urlInput)) {
    resetMode(urlInput);
    postData(data);
  } else {
    setAlertMode(urlInput);
  }
}

export { handleSubmit, postData };