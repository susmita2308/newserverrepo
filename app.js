const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 1234;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user',require('./routes/user.routes'));
app.listen(port, () => {
    console.log(`server is listen on ${port}`);
  });