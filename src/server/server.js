const express = require('express');

const app = express();

app.use(express.static('dist'))

const PORT = '3000';

app.listen(PORT, listening);

function listening() {
  console.log('Server is running on localhost', PORT);
}

app.get('/', (req, res) => res.sendFile('dist/index.html'));