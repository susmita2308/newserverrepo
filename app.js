const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./models/db");
const app = express();
const port = process.env.PORT ||1234;
 app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Headers", "Authorization");
//   res.header("Access-Control-Expose-Headers", "x-token");
//   next();
// });
//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user", require("./routes/user.routes"));
// app.use("/api/task", require("./routes/task.route"));
// app.use("/api/auth", require("./routes/auth.route"));
//  starting server

app.listen(port, () => {
  console.log(`server is listen on ${port}`);
});
