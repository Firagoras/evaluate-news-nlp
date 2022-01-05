import './styles/base.scss'

const srcUrl = document.getElementById('urlInput');
const form = document.getElementById('form');

function updateUI(data) {
  document.getElementById('resultsHeadline').innerHTML = '<h2>Analysis Results</h2>'
  document.getElementById('srcUrl').innerHTML = `Source: <a href="${data.srcUrl}" target="_blank">${data.srcUrl}</a>`;
  document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
  document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
  document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
  document.getElementById('scoreTag').innerHTML = `Score Tag: ${data.scoreTag}`;
  document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
}

// Asynchronous function to make a POST request to the server
const postData = async (e) => {
  e.preventDefault();
  const data = {
    "textUrl": srcUrl.value
  };

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
    console.log(serverData);
    updateUI(serverData);
    return serverData;
  } catch (error) {
    console.log('error', error);
  }
}

// generateBtn.addEventListener('click', postData);
form.addEventListener('submit', postData);