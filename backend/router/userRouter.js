const express = require("express");
const router = express.Router();
const upload = require("../multerconfig/multerConfig");

const {
  userRegistration,
  showAllUsers,
  getSingleUser,
} = require("../controllers/userControllers");

// user registration route
router.post("/user/registration", upload.single("image"), userRegistration);
router.get("/users", showAllUsers);
router.get("/user/:id", getSingleUser);

module.exports = router;
