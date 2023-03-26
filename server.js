
// import Express framework into file
const express = require('express');

// create an Express server
const app = express();

// import Path core module to work with filepaths/directory
const path = require('path');

// variable to reference port number for server
const PORT = process.env.PORT || 4001;

// tell the server which port to run on
app.listen(PORT, () => {

    // code to run once server is up and running
    console.log('Success! Server is now running.');
});

// route to GET request for homepage
app.get('/', (req, res, next) => {

    // code to handle the request and send a response
    console.log(__dirname); // test code for development
    res.sendFile(path.join(__dirname, '/index.html'));
});