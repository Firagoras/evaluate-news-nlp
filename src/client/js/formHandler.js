import { validateInput, resetMode, setAlertMode } from './formValidator.js';

// Function to update the user interface with data received from API

function updateUI(apiData) {
  document.getElementById('resultsHeadline').innerHTML = '<h2>Last Analysis Results</h2>'
  document.getElementById('srcUrl').innerHTML = `Source: <a href="${apiData.srcUrl}" target="_blank">${apiData.srcUrl}</a>`;
  document.getElementById('agreement').innerHTML = `Agreement: ${apiData.agreement}`;
  document.getElementById('confidence').innerHTML = `Confidence: ${apiData.confidence}`;
  document.getElementById('irony').innerHTML = `Irony: ${apiData.irony}`;
  document.getElementById('scoreTag').innerHTML = `Score Tag: ${apiData.scoreTag}`;
  document.getElementById('subjectivity').innerHTML = `Subjectivity: ${apiData.subjectivity}`;
}

// Asynchronous function to make a POST request to the server
const postData = async (data) => {
  const response = await fetch('/postData', {
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

export { handleSubmit };