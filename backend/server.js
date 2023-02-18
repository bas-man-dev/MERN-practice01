require('dotenv').config()

const express = require('express');

// Creates the express app
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'});
});

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000');
});
