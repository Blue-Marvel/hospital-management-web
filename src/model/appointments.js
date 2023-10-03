const { number, date } = require("joi");
const mongoose = require("mongoose");
const { patient_id } = require("./user");

const appointmentSchema = new mongoose.Schema({
  appointment_id: {
    type: number,
    maxLength: 10,
    required: [true, "please provide appointment id "],
  },
  doctor_id: {
    type: number,
    maxLength: 10,
  },
  patient_id: patient_id,
  appointment_date: {
    type: Date,
    required: [true, "enter date in yyyy-mm-dd "],
  },
  timestamps: true,
  appointment_status: {
    type: String,
    enum: ["approved", "declined", "pending"],
    default: "pending",
  },
});

module.exports = appointmentSchema;
