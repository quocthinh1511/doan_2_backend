const Patient = require("../models/patient.model.js");


// Create and Save a new users

// create new users
exports.index = async function (req, res) {

    //title

    const patients = await Patient.find({});
    res.status(200).json({ patients  });
};


exports.search = async function (req, res) {

    //title

   
    const {data} = req.body

   const patients = await Patient.find({name: data})

  
  
    if (patients !==null) { 
        res.status(200).json({ patients  });
    }
   
   
};

