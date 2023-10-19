const express = require("express");
const router = express.Router();
const upload = require("../multerconfig/multerConfig");

const { userRegistration } = require("../controllers/userControllers");

// user registration route
router.post("/user/registration", upload.single("image"), userRegistration);

module.exports = router;
