import { updateUI } from './updateUI.js';

// Asynchronous function to make a POST request to the server
const postData = async (e) => {
  e.preventDefault();
  const srcUrl = document.getElementById('urlInput');
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
    updateUI(serverData);
    return serverData;
  } catch (error) {
    console.log('error', error);
  }
}

export { postData };