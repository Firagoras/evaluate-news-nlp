import './styles/base.scss'

const urlInput = document.getElementById('url');
const generateBtn = document.getElementById('generate');

// Asynchronous function to make a POST request to the server
const postData = async () => {
  const data = {
    "textUrl": urlInput.value
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
    return serverData;
  } catch (error) {
    console.log('error', error);
  }
}

generateBtn.addEventListener('click', postData);