const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const GoogleAuth=require('./GoogleAuth/GoogleAuth');
// const routes=require('./routes');
const userRoute=require('./User/userRoutes');
const resourceRoute=require('./resources/resourcesRoutes');
const moodEntryRoute=require('./moodEntries/moodEntryRoutes');
connectDB();
const port = 5226;

const app = express();

app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the CalmCorner",
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    })
});
// app.use('/api',routes);
app.use('/api/users',userRoute);
app.use('/api/resource',resourceRoute);
app.use('/api/moodEntry',moodEntryRoute);

app.use(GoogleAuth);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
