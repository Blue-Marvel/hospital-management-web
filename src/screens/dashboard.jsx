import React from 'react'
import PatientDashboard from "./patient";
import { useLocation } from 'react-router-dom';
import DoctorDashboard from './doctor';

const Dashboard = () => {
  const location = useLocation();
  const data = location.state.responseData;
  const doctors = location.state.doctorData.doctors.user;
  const isDoctor = data.user.role;

  return (
  isDoctor !== "doctor" ? (<PatientDashboard data={data} doctors={doctors}/>)
  : (<DoctorDashboard data={data}/>)
  )
}

export default Dashboard