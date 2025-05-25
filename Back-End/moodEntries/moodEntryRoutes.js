const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const moodEntryModel = require("./moodEntrySchema");
const userModel = require("../User/userSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/EntryCreate", authenticate, async (req, res) => {
  try {
    const { Name, Location, Date, Time, MoodSelection, EmotionEcho } = req.body;
    const userId = req.user.userId;

    const newMoodEntry = new moodEntryModel({
      Name,
      Location,
      Date,
      Time,
      MoodSelection,
      EmotionEcho,
      userId,
    });

    const existingUser = await userModel.findById(userId);
    if (!existingUser) {
      return res.status(400).send({ msg: "User does not exist." });
    }

    await newMoodEntry.save();
    existingUser.moodEntry.push(newMoodEntry);
    await existingUser.save();

    res.status(201).json({
      message: "Mood entry created successfully",
      moodEntry: newMoodEntry,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/EntryRead", async (req, res) => {
  try {
    const moodEntries = await moodEntryModel.find();
    res
      .status(201)
      .json({ message: "MoodEntries retrieved successfully", moodEntries });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.put("/EntryUpdate/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateMoodEntry = await moodEntryModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updateMoodEntry) {
      return res.status(404).json({ message: "Mood Entry not found" });
    }
    res
      .status(200)
      .json({
        message: "Mood entry updated succeessfully",
        moodEntry: updateMoodEntry,
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.delete("/EntryDelete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMoodEntry = await moodEntryModel.findByIdAndDelete(id);
    if (!deleteMoodEntry) {
      return res.status(404).json({ message: "Mood entry not found" });
    }
    res
      .status(200)
      .json({
        message: "Mood entry deleted successfully",
        moodEntry: deleteMoodEntry,
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/userEntry", authenticate, async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "No token found in cookies" });
    }

    const { userId } = jwt.verify(token, process.env.JWT_SECRET);

    const existingUserData = await userModel
      .findById(userId)
      .populate("moodEntry");
    res.send(existingUserData);
  } catch (error) {
    res.status(401).send(error);
  }
});

module.exports = router;
