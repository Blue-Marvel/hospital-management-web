const express = require("express");
const router = express.Router();

const {
  getAllAppointments,
  getSingleAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  updateAppointmentStatus,
} = require("../controller/appointments");

router.route("/").get(getAllAppointments).post(createAppointment);
router
  .route("/:id")
  .get(getSingleAppointment)
  .patch(updateAppointment, updateAppointmentStatus)
  .delete(deleteAppointment);

module.exports = router;

// {gobal_key}/appointment/userid get
