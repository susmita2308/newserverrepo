const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 name: { type: String, minlength: 4, maxlength: 45 },
  mobile: { type: String, match: /[0-9]{10}/ },
  email: {
    type: String,
    minlength: 5,
    maxlength: 45,
    required: true,
    unique: true,
  },
  password: { type: String, minlength: 4, required: true },
  address: { type: String, minlength: 4, maxlength: 45 },
  regDate: { type: Date, default: Date.now() },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
