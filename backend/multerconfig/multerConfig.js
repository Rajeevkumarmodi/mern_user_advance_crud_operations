const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callBack) {
    callBack(null, "./uploadImage");
  },
  filename: function (req, file, callBack) {
    const fileName = Date.now() + "-" + file.originalname;
    callBack(null, fileName);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
