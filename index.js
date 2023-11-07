const express = require("express");
require("dotenv").config();
const jobs = require("./routes/jobRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/v1/api/job", jobs);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
