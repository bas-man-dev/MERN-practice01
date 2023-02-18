require('dotenv').config()

const express = require('express');
const workoutRoutes = require('./routes/workouts');

// Creates the express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000');
});
