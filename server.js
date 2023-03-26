
// import Express framework into file
const express = require('express');

// create an Express server
const app = express();

// variable to reference port number for server
const PORT = process.env.PORT || 4001;

// tell the server which port to run on
app.listen(PORT, () => {

    // code to run once server is up and running
    console.log('Success! Server is now running.');
});