module.exports = app => {
    const patient = require("../controllers/patient.controller.js");
    const router = require("express").Router();
    router.get("/index", patient.index);
    router.post("/search", patient.search);
    app.use('/patient', router);
  };
  