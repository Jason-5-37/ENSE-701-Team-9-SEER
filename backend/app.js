// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const articles = require('./routes/api/articles');
const NotSubmitArticles = require('./routes/api/NotSubmitArticles');
const Manager = require('./routes/api/managers');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


app.get('/', (req, res) => res.send('Welcome to SPEED!'));

// use Routes
app.use('/api/articles', articles);
app.use('/api/NotSubmitArticles', NotSubmitArticles);
app.use('/api/manager', Manager);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));