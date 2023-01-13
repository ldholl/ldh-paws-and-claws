import React from "react";
import { Link } from "react-router-dom";
import dana from '../../assets/images/dana.jpg';
import {FaAward} from 'react-icons/fa';
import {ImLocation} from 'react-icons/im';
import Testimonials from "../Testimonials";

function About({ currentPage, handlePageChange }) {
    return (
    <div>
    <div className="wrapper__about">
          <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={dana} alt="About" />
            </div>
          </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>10+ Years Grooming</small>
            </article>

            <article className='about__card'>
              <ImLocation className='about__icon'/>
              <h5>Location</h5>
              <small>Orlando, FL</small>
            </article>

          </div>
          <p>Tired of struggling to keep your pet's nails trimmed and healthy? Dread trying to squeeze in a trip to the groomer? Look no further! Our mobile nail trimming service brings the grooming salon to you.</p>
          <p>
          Our professional groomers will come to your home to provide your furry friend with a stress-free nail trimming experience. No need to worry about the hassle of transporting your pet or fitting a grooming appointment into your busy schedule.</p>
          <p>
          Schedule a mobile nail trimming appointment today! Your pet (and your furniture) will thank you. </p>

          <Link href="#service" 
                to="/services" 
                onClick={() => handlePageChange("Services")} 
                className="btn">Services</Link>
          <Link href="#make-an-appointment"
                to="/make-an-appointment"
                onClick={() => handlePageChange("Login")} 
                className='btn btn-primary'>Make an Appointment</Link>
        </div>
      </div>
    </div>

    <Testimonials />
    
</div>
    );
}

export default About;