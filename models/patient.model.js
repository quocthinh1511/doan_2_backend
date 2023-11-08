const mongoose = require('mongoose');

const { Schema } = mongoose;

// create table users
const patientSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: String,
    },
    job: {
        type: String,
    },
    address: {
        type: String,
    },
    gender: {
        type: String,
    },
    reason_to_hos: {
        type: String,
    },
    status: {
        type: String,
    },
    symptom: {
        type: String,
    },
    temperature:
    {
        type: String,
    },
    blood_pressure:
    {
        type: String,
    },
    pulse:
    {
        type: String,
    },
    heart_beat:
    {
        type: String,
    },
    diagnose:
    {
        type: String,
    },
    drug:
    {
        type: String,
    },


}, { timestamps: true });


const Patient = mongoose.model('patients', patientSchema);

module.exports = Patient;