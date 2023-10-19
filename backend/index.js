const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/dbConnection");
const router = require("./router/userRouter");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(cors());
app.use(router);
app.use("/uploadImage", express.static("./uploadImage"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
