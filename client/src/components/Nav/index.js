import React from "react";
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";


function Nav({ currentPage, handlePageChange }) {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header>
            <a href='/'><h1>Paws & Claws</h1></a>
            <nav>
                <ul>
                {Auth.loggedIn() ? (
                    <>
                <li>
                    <Link href="#dashboard"
                          to="/dashboard"
                          onClick={() => handlePageChange("Dashboard")}
                          className={currentPage === "Dashboard" ? "navActive" : "nav-link"} >
                    Dashboard</Link></li>
                <li><a href="/" onClick={logout}>Logout</a></li>
                    </>
                ) : (
                    <>
                <li> 
                    <Link href="#about" to="/" 
                          onClick={() => handlePageChange("About")} 
                          className={currentPage === "About" ? "navActive" : "nav-link"} >
                     About</Link> </li>
                <li>
                    <Link href="#services" 
                          to="/services" 
                          onClick={() => handlePageChange("Services")} 
                          className={currentPage === "Services" ? "navActive" : "nav-link"} >
                    Services/Locations</Link>
                </li>
                <li>
                    <Link href="#make-an-appointment"
                          to="/make-an-appointment"
                          onClick={() => handlePageChange("MakeAppointment")}
                          className={currentPage === "MakeAppointment" ? "navActive" : "nav-link"} >
                    Make an Appointment</Link></li>
                    </>
                )}
                </ul>
            </nav>
        </header>
    );
}
export default Nav;