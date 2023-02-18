const express = require('express');

// Creates the express app
const app = express();

// routes
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'});
});

// Listen for requests
app.listen(4000, () => {
    console.log('listening on port 4000');
});
