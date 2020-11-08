const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/teamproject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to database");
});

db.on("disconnected", () => {
  console.log("Disconnected from database");
});

db.on("error", () => {
  console.log("Problem in database connection");
});
