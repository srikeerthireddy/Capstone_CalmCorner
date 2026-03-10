require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const GoogleAuth = require("./GoogleAuth/GoogleAuth");
const userRoute = require("./User/userRoutes");
const resourceRoute = require("./resources/resourcesRoutes");
const moodEntryRoute = require("./moodEntries/moodEntryRoutes");

const port = process.env.PORT || 5226;

// Connect to database before starting server
connectDB()
  .then(() => {
    console.log("✅ Database connection established");
  })
  .catch((error) => {
    console.error("❌ Failed to connect to database. Server will still start but may not function properly.");
    console.error("   Please check your MONGODB_URI in .env file");
  });

const app = express();

app.use(express.json());

const corsOptions = {
  origin: ["https://calmcorner-red.vercel.app", "http://localhost:5173"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(cookieParser());


// Session middleware - must be before passport
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    },
  })
);

// Serve uploaded files statically so the frontend can render images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the CalmCorner",
    database:
      mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

app.use("/api/users", userRoute);
app.use("/api/resource", resourceRoute);
app.use("/api/moodEntry", moodEntryRoute);

app.use(GoogleAuth);

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error("Global error handler:", err);
  console.error("Error stack:", err.stack);
  
  // Don't send response if headers already sent
  if (res.headersSent) {
    return next(err);
  }

  // Handle redirect errors
  if (req.path.includes("/auth/google/callback")) {
    return res.redirect("https://calmcorner-red.vercel.app/login?error=server_error");
  }

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


