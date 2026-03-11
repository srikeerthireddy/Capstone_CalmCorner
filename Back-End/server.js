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

// Ensure DB is connected before handling API requests
app.use("/api", (req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      message: "Database is connecting. Please try again in a moment.",
    });
  }
  next();
});

app.use("/api/users", userRoute);
app.use("/api/resource", resourceRoute);
app.use("/api/moodEntry", moodEntryRoute);

app.use(GoogleAuth);

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error("Global error handler:", err);
  console.error("Error stack:", err.stack);

  if (res.headersSent) {
    return next(err);
  }

  if (req.path.includes("/auth/google/callback")) {
    return res.redirect(
      "https://calmcorner-red.vercel.app/login?error=server_error"
    );
  }

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

// Validate required env vars before starting
const requiredEnvVars = ["MONGODB_URI", "JWT_SECRET"];
const missingVars = requiredEnvVars.filter((v) => !process.env[v]);
if (missingVars.length > 0) {
  console.error("❌ Missing required environment variables:", missingVars.join(", "));
  process.exit(1);
}

// Connect to database first, then start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();


