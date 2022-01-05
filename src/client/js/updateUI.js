// A function to update the user UI with data received from API

function updateUI(data) {
  document.getElementById('resultsHeadline').innerHTML = '<h2>Analysis Results</h2>'
  document.getElementById('srcUrl').innerHTML = `Source: <a href="${data.srcUrl}" target="_blank">${data.srcUrl}</a>`;
  document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
  document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
  document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
  document.getElementById('scoreTag').innerHTML = `Score Tag: ${data.scoreTag}`;
  document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
}

export { updateUI };