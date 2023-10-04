const express = require("express");
const router = express.Router();

const {
  getAllAppointments,
  getSingleAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../controller/appointments");

router.route("/").get(getAllAppointments).post(createAppointment);
router
  .route("/:id")
  .get(getSingleAppointment)
  .patch(updateAppointment)
  .delete(deleteAppointment);

module.exports = router;
