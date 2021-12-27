import './styles/base.scss'

// Base URL for MeaningCloud Sentiment Analysis API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';


// Personal API Key for MeaningCloud Sentiment Analysis API
const apiKey = '9412f417d988d658173c94cdeb016f0c';


const urlInput = document.getElementById('url');
const generateBtn = document.getElementById('generate');

// Asynchronous function to make a POST request to the server
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const serverData = await response.json();
    return serverData;
  } catch (error) {
    console.log('error', error);
  }
}

// Asynchronous function to get API data
const fetchApiData = async (url, options) => {
  const response = await fetch(url, options);

  try {
    const apiData = await response.json();
    // console.log(apiData);
    return apiData;
  } catch (error) {
    console.log('error', error)
  }
};

// Function to set up the main app logic: 1) get API data 2) post data to the server side 3) update the UI
function getSentimentData() {
  const url = urlInput.value;

  // Setup options for the API request 
  const formdata = new FormData();
  formdata.append("key", apiKey);
  formdata.append("url", url);
  formdata.append("lang", "en");  // 2-letter code, like en es fr ...

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  // a function call to fetch API data 
  fetchApiData(baseURL, requestOptions)
  // Once the API data is successfully returned, call an async function to POST selected data to the server 
  .then(apiData => {
    return postData('/postData', {'agreement': apiData.agreement, 'confidence': apiData.confidence, 'irony': apiData.irony, 'score_tag': apiData.score_tag, 'subjectivity': apiData.subjectivity});
  })
  // Once data is successfully stored in the server side, execute updateUI function
  .then(serverData => console.log(serverData));
}

generateBtn.addEventListener('click', getSentimentData);