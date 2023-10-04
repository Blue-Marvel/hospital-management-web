import React from "react";
import { useLocation } from 'react-router-dom'

function Dashboard(){
  const location = useLocation();
  const data = location.state;
  console.log(data);
    return (
      <div className=" w-full bg-green-100 h-full flex shadow-2xl rounded-2xl">
        <div className=" w-3/5 px-12 py-60 rounded-bl-2xl rounded-tl-2xl">
        {/* <p>{data.user.firstName}</p> */}

        </div>
        <div className=" w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-60 px-12">
  
       
      </div>
      </div>
    );
}

export default Dashboard; 