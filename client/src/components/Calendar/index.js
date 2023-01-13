import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../../utils/mutations";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";


function Calendar() {

  const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT);

  const [date, setDate] = useState(
    setHours(setMinutes(new Date(), 0), 0)
  );
  const locale = 'en-US';
  const [time, setTime] = useState('');
  const [service, setService] = useState('');


    
  const handleSubmit = async (event) => {
      event.preventDefault();
      
    try {
      const { data } = await addAppointment({
        variables: {
          apptDate: date,
          apptTime: time,
          service: service },
        });

        window.location.reload();

      console.log('Here is the appointment data =' + data);

    } catch (error) {
      console.error(error);
      }
    };

    

  return (
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
            <h3>Schedule your Appointment</h3>  
              <label htmlFor="date">Date:</label>
              <DatePicker
                selected={date}
                onChange={(date) => {
                  console.log('user selected:', date)
                  setDate(date)}}
                showWeekNumbers

                formatDay ={
                    (date) => new Intl.DateTimeFormat(
                      locale, 
                      {
                        year: "numeric", 
                        month: "2-digit", 
                        day: "2-digit"
                      }).format(date)
                    }
              />
            <label htmlFor="time">Time:</label>
            <DatePicker
            placeholderText="Select a time"
              selected={date}
              onChange={(time) => {
                console.log('user selected:', time)
                setTime(time)
              }}
                showTimeSelect
                includeTimes={[
                  setHours(setMinutes(new Date(), 0), 8),
                  setHours(setMinutes(new Date(), 30), 9),
                  setHours(setMinutes(new Date(), 30), 11),
                  setHours(setMinutes(new Date(), 30), 13),
                  setHours(setMinutes(new Date(), 0), 17),
                  setHours(setMinutes(new Date(), 30), 18),
                  setHours(setMinutes(new Date(), 30), 19),
                  setHours(setMinutes(new Date(), 30), 17),
                ]}
                formatDay ={
                  (date) => new Intl.DateTimeFormat(
                    locale, 
                    {
                      hour: "numeric", 
                      minute: "2-digit", 
                    }).format(date)
                  }
              />
            <label htmlFor="service">Service:</label>
                <select 
                onChange={(service) => { 
                  console.log('user selected:', service.target.value);
                  setService(service.target.value);
                }} 
                name="service">
                    <option value="placeholder"> Select a service </option>
                    <option value="Nail Trimmed"> Nail Trimmed </option>
                    <option value="Paw Pads Trimmed"> Paw Pads Trimmed </option>
                    <option value="Feet Tidied"> Feet Tidied </option>
                </select>

            <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
          </form>
    
  );
}

export default Calendar;
