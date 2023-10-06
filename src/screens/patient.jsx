import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppointmentCard from "./appointment_card";
import EditAppointmentForm from "./edit_appointment_form";
import {
  CREATE_APPOINTMENT,
  EDIT_APPOINTMENT,
  GET_APPOINTMENT,
  DELETE_APPOINTMENT
} from "../config";

function PatientDashboard({ data, doctors }) {
  // const [appointmentData, setAppointmentData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [appoitmentList, setAppoitmentList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(GET_APPOINTMENT, {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${data.token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setAppoitmentList(responseData.appointment);
      } catch (error) {
        console.error(`An error occurred: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const [showForm, setShowform] = useState(false);
  const [selectOption, setSelectOption] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [doctorId, setDoctorId] = useState("");

  const showAppointment = () => {
    setShowform(true);
    setIsEditing(false);
  };

  const editAppointment = async () => {
    try {
      const response = await fetch(`${EDIT_APPOINTMENT}/${doctorId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          doctor_name: selectOption,
          appointment_date: selectDate,
        }),
      });
      if (!response.ok) {
        alert(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
    } catch (err) {
      alert(`An error occured: ${err}`);
    } finally {
      setShowform(false);
    }
  };

  const deleteAppointment = async (doctorId) => {
    try {
      const response = await fetch(`${DELETE_APPOINTMENT}/${doctorId}`, {
        method: "DELETE",
        headers: { 
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${data.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

          const deletedAppointmentId = await response.json();

           setIsLoading(true);
           try {
             const response = await fetch(GET_APPOINTMENT, {
               method: "GET",
               headers: {
                 "Content-type": "application/json; charset=UTF-8",
                 Authorization: `Bearer ${data.token}`,
               },
             });

             if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
             }

             const responseData = await response.json();
             setAppoitmentList(responseData.appointment);
           } catch (error) {
             console.error(`An error occurred: ${error}`);
           } finally {
             setIsLoading(false);
           };

          // Update the state to remove the deleted appointment
          // setAppoitmentList((prevList) =>
          //   prevList.filter(
          //     (appointment) => appointment._id !== deletedAppointmentId
          //   )
          // );
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
  };
// 

  const hideAppointmentAndSafe = async () => {
    setShowform(false);
    console.log(selectOption);
    try {
      const response = await fetch(CREATE_APPOINTMENT, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          doctor_name: selectOption,
          appointment_date: selectDate,
        }),
      });

      if (!response.ok) {
        alert(`HTTP error! Status: ${response.status}`);
      }
      setIsLoading(true);
      try {
        const response = await fetch(GET_APPOINTMENT, {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${data.token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setAppoitmentList(responseData.appointment);
      } catch (error) {
        console.error(`An error occurred: ${error}`);
      } finally {
        setIsLoading(false);
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      alert(`An error occurred: ${error}`);
    }
  };

  function handleEdit(id) {
    setShowform(true);
    setIsEditing(true);
    setDoctorId(id);
  }

  console.log(data);
  return (
    <div className=" w-full bg-green-100 h-full flex shadow-2xl rounded-2xl">
      <div className=" w-3/5 px-12 rounded-bl-2xl rounded-tl-2xl flex ">
        <div className=" rounded-tr-2xl  px-6">
          <div>
            <h1 className=" text-black font-semibold text-2xl py-3">
              Booked Appointments
            </h1>
          </div>
          <div className=" overflow-y-scroll no-scrollbar h-96 w-full">
            {isLoading ? (
              <center>
                <p>Loading</p>
              </center>
            ) : appoitmentList.length === 0 ? (
              <center>
                <p>No Appointments</p>
              </center>
            ) : (
              appoitmentList.map((itemList) => (
                <AppointmentCard
                  title="Edit"
                  data={itemList}
                  title2="Delete"
                  onClick1={() => handleEdit(itemList._id)}
                  onClick2={() => deleteAppointment(itemList._id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div className=" w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
        <div className={`${!showForm ? "block" : "hidden"} `}>
          <h3 className=" py-3 text-2xl font-semibold ">
            Welcome, {data.user.lastName}
          </h3>
          <p className=" pb-10">Click below to book an appointment!</p>
          <button
            onClick={showAppointment}
            className=" rounded-full py-2 px-4 border border-white hover:bg-white hover:text-green-600"
          >
            Book Appointment
          </button>
        </div>
        <div className={`${showForm ? "block" : "hidden"} px-16`}>
          {!isEditing ? (
            <div>
              <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
                <select
                  value={selectOption}
                  onChange={(e) => setSelectOption(e.target.value)}
                  className=" bg-gray-100 flex-1 outline-none text-black"
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((doctor) => (
                    <option
                      key={doctor._id}
                      value={doctor.First_Name + " " + doctor.Last_Name}
                      selected={
                        `${doctor.First_Name} ${doctor.Last_Name}` ===
                        selectOption
                      }
                    >
                      {`${doctor.First_Name} ${doctor.Last_Name}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
                <input
                  type="date"
                  value={formatDate(selectDate)}
                  onChange={(e) => setSelectDate(e.target.value)}
                  className=" bg-gray-100 flex-1 outline-none text-black"
                />
              </div>
              <button
                onClick={hideAppointmentAndSafe}
                className=" rounded-full py-2 px-10 border border-white hover:bg-white hover:text-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            <EditAppointmentForm
              doctors={doctors}
              selectOption={selectOption}
              selectDate={selectDate}
              setSelectDate={setSelectDate}
              setSelectOption={setSelectOption}
              hideAppointmentAndSafe={editAppointment}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
