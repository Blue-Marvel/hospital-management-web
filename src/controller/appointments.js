const Appointments = require("../model/appointments");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");

const getAllAppointments = async (req, res) => {
  const appointment = await Appointments.find({});
  res
    .status(StatusCodes.OK)
    .json({ appointment, count: appointment.length })
    .sort("createdAt");
};

const getSingleAppointment = async (req, res) => {
  //   const { Id: appointment_id } = req.params;
  //   const appointment = await Appointments.findOne({ _id: appointmentId });

  const {
    // user: { userId },
    params: { id: appointmentId },
  } = req;

  const appointment = await Appointments.findOne({
    _id: appointmentId,
    // createdBy: userId,
  });

  if (!appointment) {
    throw new NotFoundError(
      `appointment with id:${appointment_id} does not exist `
    );
  }

  res.status(StatusCodes.OK).json({ appointment });
};

const createAppointment = async (req, res) => {
  const appointment = await Appointments.create({ ...req.body });
  res
    .status(StatusCodes.CREATED)
    .json({ message: "appointment created", appointment });
};

const updateAppointment = async (req, res) => {
  //   const { userId: appointment_id } = req.params;
  //   const appointment = await Appointments.findOneAndUpdate(
  //     { _id: appointment_id },
  //     req.body
  //   );
  const {
    body: { appointment_date, appointment_id },
    // user: { userId },
    params: { id: appointmentId },
  } = req;

  if (appointment_date === "" || appointment_id === "") {
    throw new BadRequestError("appointment fields cannot be empty");
  }
  const appointment = await Appointments.findByIdAndUpdate(
    { _id: appointmentId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!appointment) {
    throw new NotFoundError(`No appointment with id ${appointment_id}`);
  }

  res.status(StatusCodes.OK).json({ appointment });
};

const deleteAppointment = async (req, res) => {
  //   const { userId: appointment_id } = req.params;
  //   const appointment = await Appointments.findOneAndDelete({
  //     _id: appointment_id,
  //   });
  const {
    // user: { userId },
    params: { id: appointmentId },
  } = req;

  const appointment = await Appointments.findByIdAndRemove({
    _id: appointmentId,
    // createdBy: userId,
  });

  if (!appointment) {
    throw new NotFoundError(`No appointment with id ${appointment_id}`);
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "Appointment deleted successfully" });
};

module.exports = {
  getAllAppointments,
  getSingleAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};


