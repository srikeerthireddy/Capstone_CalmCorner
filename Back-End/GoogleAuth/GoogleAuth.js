const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");
const User = require("../User/userSchema");

const Auth = express.Router();

require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "https://s61-srikeerthi-capstone-calmcorner-6.onrender.com/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, displayName, emails, photos } = profile;

        let user = await User.findOne({ googleId: id });

        if (!user) {
          user = await User.create({
            username: displayName,
            emailId: emails[0].value,
            profilePicture: photos?.[0]?.value,
            googleId: id,
          });
          console.log("New user created:", user);
        }

        return done(null, user);
      } catch (err) {
        console.error("Error during Google authentication:", err);
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

Auth.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

Auth.use(passport.initialize());
Auth.use(passport.session());

console.log("✅ Google OAuth middleware initialized successfully");



Auth.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);


Auth.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "https://calmcorner-red.vercel.app/login" }),
  (req, res) => {
    const user = req.user;

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        emailId: user.emailId,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
    });


    return res.redirect("https://calmcorner-red.vercel.app/");

  }
);

module.exports = Auth;
