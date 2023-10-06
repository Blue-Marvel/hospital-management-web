const { number, date } = require("joi");
const mongoose = require("mongoose");
const { patient_id } = require("./user");

const appointmentSchema = new mongoose.Schema(
  {
    doctor_name: {
      type: String,
      // maxLength: 10,
      required: [true, "please provide doctors name  "],
    },
    patient_id: {
      type: String,
    },
    doctor_id: {
      type: String,
      // maxLength: 10,
    },
    appointment_date: {
      type: Date,
      required: [true, "enter date in yyyy-mm-dd "],
    },
    appointment_status: {
      type: String,
      required: true,
      enum: ["approved", "declined", "pending"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointments", appointmentSchema);
