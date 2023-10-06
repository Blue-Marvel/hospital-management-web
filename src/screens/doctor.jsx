import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppointmentCard from "./appointment_card";
import EditAppointmentForm from "./edit_appointment_form";
import {
  APPROVE_APPOINTMENT,
  GET_APPOINTMENT,
} from "../config";

function DoctorDashboard({ data }) {
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


  async function approvalAppointment(doctorId){

    try {
      const response = await fetch(`${APPROVE_APPOINTMENT}/${doctorId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          appointment_status: "approved",
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
    } catch (error) {
      
    }

  }


  async function declineAppointment(doctorId) {
    try {
      const response = await fetch(`${APPROVE_APPOINTMENT}/${doctorId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          appointment_status: "declined",
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
    } catch (error) {}
  }


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
                  title="Approval"
                  data={itemList}
                  onClick1={() => approvalAppointment(itemList._id)}
                  onClick2={() => declineAppointment(itemList._id)}
                  title2="Decline"
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div className=" w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
        <div>
          <h3 className=" py-3 text-2xl font-semibold ">
            Welcome, {`Doctor ${data.user.lastName}`}
          </h3>
          <p className=" pb-10">Here are the list of appointments!</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
