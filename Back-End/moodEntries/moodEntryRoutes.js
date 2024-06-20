const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const moodEntryModel = require("./moodEntrySchema");
const userModel = require("../User/userSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/EntryCreate", authenticate, async (req, res) => {
  try {
    const { Name, Location, Date, Time, MoodSelection, EmotionEcho, userId } =
      req.body;
    //   const userId = req.user.userId; // Ensure userId is extracted from authenticated user

    // Create a new mood entry
    const newMoodEntry = new moodEntryModel({
      Name,
      Location,
      Date,
      Time,
      MoodSelection,
      EmotionEcho,
      userId,
    });

    //   getting existing user
    const existingUser = await userModel.findById(userId).populate("");
    if (!existingUser) {
      res.status(400).send({ msg: "User does not exists." });
    }
    // Save the mood entry to the database
    await newMoodEntry.save();
    existingUser.moodEntry.push(newMoodEntry);
    await existingUser.save();
    res
      .status(201)
      .json({
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
    // const userAllEntry = await userModel.find()
    const token = req.headers.authorization;
    const onlyToken = token.split(" ")[1];
    const { userId } = jwt.verify(onlyToken, process.env.JWT_SECRET);

    // find the user
    const existingUserData = await userModel
      .findById(userId)
      .populate("moodEntry");
    res.send(existingUserData);
  } catch (error) {
    res.status(401).send(error);
  }
});

module.exports = router;
