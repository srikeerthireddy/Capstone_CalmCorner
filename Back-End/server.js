const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const routes=require('./routes');

connectDB();
const port = 5226;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the CalmCorner",
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    })
});
app.use('/api',routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
