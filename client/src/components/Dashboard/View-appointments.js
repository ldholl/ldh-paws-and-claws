import React from "react";
// import { toTimestamp } from "../../utils/helpers";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";


function Viewappointments() {
    const { loading, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>;
  console.log(data.me.appointments);
  
  
  // const datePickerDate = [data.me.appointments[0].apptTime];
  //   let timestamp = new Date(datePickerDate).getTime();
  //   let Day = new Date(timestamp).getDate();
  //   let Month = new Date(timestamp).getMonth() + 1;
  //   let Year = new Date(timestamp).getFullYear();
  //   let ourNewDateFormat = `${Month}/${Day}/${Year}`;
  //   console.log("Timestamp:" +timestamp);
  //   console.log("Day" + Day);
  //   console.log("Month" + Month);
  //   console.log("Year" + Year);
  //   console.log("Our New Date Format:" + ourNewDateFormat);



  return (
    <div> 
        <h2>Your Appointments</h2>
    <>
    {data.me.appointments.map((item, index) => (
        <article className="service" key={index} >
        
        <ul className='service__list'>
            <li><strong>Date/Time:</strong> {item.apptTime}</li>
            <hr/>
            <li><strong>Service:</strong> {item.service}</li>
            <hr/>
            
            </ul>
        </article>
        ))}
    </>
    </div>
    
    );
}

export default Viewappointments;
