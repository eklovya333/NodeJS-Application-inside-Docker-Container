const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hi User!! Successfully running a NodeJS application inside a Docker container!!');
});
 
app.listen(8080, () => {
  console.log('Listening on port 8080');
});
