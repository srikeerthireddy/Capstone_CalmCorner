const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  moodEntry: [{ type: mongoose.Schema.Types.ObjectId, ref: "moodentries" }],
});
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
