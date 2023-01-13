import React from "react";
import Profile from "../Profile";
import Addpet from "./addpet";
import Viewpets from "./view-pets";
import Viewappointments from "./View-appointments";
import Calendar from "../Calendar";


function Dashboard() {

  return (
    <div>
    
    <div className="container services__container-2col">
        <Profile />
        <Viewpets />
    </div>
    
    <>
    <div className="container services__container-2col">
        <Addpet />
        <Calendar />
    </div>
    </>

    
    <div className="container services__container-2col">
        <Viewappointments />
    </div>
    </div>
    
  );
};

export default Dashboard;