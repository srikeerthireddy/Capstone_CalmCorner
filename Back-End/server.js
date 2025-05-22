// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const cookieParser = require('cookie-parser');
// const GoogleAuth=require('./GoogleAuth/GoogleAuth');
// // const routes=require('./routes');
// const userRoute=require('./User/userRoutes');
// const resourceRoute=require('./resources/resourcesRoutes');
// const moodEntryRoute=require('./moodEntries/moodEntryRoutes');
// connectDB();
// const port = 5226;

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(cookieParser());


// app.get('/', (req, res) => {
//     res.json({
//         message: "Welcome to the CalmCorner",
//         database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
//     })
// });
// // app.use('/api',routes);
// app.use('/api/users',userRoute);
// app.use('/api/resource',resourceRoute);
// app.use('/api/moodEntry',moodEntryRoute);

// app.use(GoogleAuth);
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const cookieParser = require('cookie-parser');
// const GoogleAuth = require('./GoogleAuth/GoogleAuth');
// const userRoute = require('./User/userRoutes');
// const resourceRoute = require('./resources/resourcesRoutes');
// const moodEntryRoute = require('./moodEntries/moodEntryRoutes');

// connectDB();
// const port = 5226;

// const app = express();

// app.use(express.json());

// // Set up CORS with specific origin and credentials
// const corsOptions = {
//   origin: 'http://localhost:5173', // frontend origin
//   credentials: true, // allow credentials (cookies, authorization headers)
// };
// app.use(cors(corsOptions));

// app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.json({
//     message: "Welcome to the CalmCorner",
//     database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
//   });
// });

// app.use('/api/users', userRoute);
// app.use('/api/resource', resourceRoute);
// app.use('/api/moodEntry', moodEntryRoute);

// app.use(GoogleAuth);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
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
// Set up CORS with specific origin and credentials
const corsOptions = {
    origin: ['https://calmcorner-red.vercel.app','http://localhost:5173',], // frontend origin
    credentials: true, // allow credentials (cookies, authorization headers)
  };
  app.use(cors(corsOptions));
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
