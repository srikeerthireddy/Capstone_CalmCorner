const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;


const Auth = express.Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "https://s61-srikeerthi-capstone-calmcorner-5.onrender.com/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      return done(null, profile);
    }
  )
);



passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

Auth.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

Auth.use(passport.initialize());
Auth.use(passport.session());

Auth.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"], prompt: "select_account" })
);

Auth.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://s61-srikeerthi-capstone-calmcorner-5.onrender.com/api/users/signin",
  }),
  (req, res) => {
    res.redirect("https://s61-srikeerthi-capstone-calmcorner-5.onrender.com");
  }
);


module.exports = Auth;