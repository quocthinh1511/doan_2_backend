module.exports = app => {
    const ocr = require("../controllers/ocr.controller.js");
    const router = require("express").Router();
    router.post("/ocr_detect", ocr.store);
    app.use('/ocr', router);
  };
  