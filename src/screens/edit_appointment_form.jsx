import React from "react";

const EditAppointmentForm = ({
  doctors,
  setSelectOption,
  setSelectDate,
  selectOption,
  selectDate,
  hideAppointmentAndSafe,
}) => {

   const formatDate = (dateString) => {
     const date = new Date(dateString);
     const year = date.getFullYear();
     const month = (date.getMonth() + 1).toString().padStart(2, "0");
     const day = date.getDate().toString().padStart(2, "0");

     return `${year}-${month}-${day}`;
   };


  return (
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
                `${doctor.First_Name} ${doctor.Last_Name}` === selectOption
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
  );
};

export default EditAppointmentForm;
