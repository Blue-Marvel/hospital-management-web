import React from 'react'

 const AppointmentCard = ({data, onClick1, onClick2,  title, title2}) => {

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");

      return `${year}-${month}-${day}`;
    };



  return (
    <div className=" bg-white shadow-lg rounded-2xl p-6 mb-4 ">
      <div className=" flex">
        <h1 className=" px-3 text-lg">{data.doctor_name}</h1>
        <p className=" px-3">{`Status: ${data.appointment_status}`}</p>
        <p className=" px-3">{`Date: ${formatDate(data.appointment_date)}`}</p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onClick1}
          className=" rounded-2xl py-2 px-4 border border-green-500 hover:bg-green-500 hover:text-white mx-2"
        >
          {title}
        </button>
        <button
          onClick={onClick2}
          className=" rounded-2xl py-2 px-4 border border-green-500 hover:bg-green-500 hover:text-white "
        >
          {title2}
        </button>
      </div>
    </div>
  );
}

export default AppointmentCard;