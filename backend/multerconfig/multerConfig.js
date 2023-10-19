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

const fileFilter = (req, file, callBack) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    callBack(null, true);
  } else {
    return callBack(new Error("Only .png , jpg & jpeg formatted Allpwed"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
