import React, { useState } from "react";
import { validateAddress } from "../../utils/helpers";
import {BiCheck} from 'react-icons/bi';

function Services () {
    const [formState, setFormState] = useState({
  
        zip: "",
      });
      const { zip } = formState;
      const [errorMessage, setErrorMessage] = useState("");
      
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
      };
    
      const handleChange = (e) => {
        e.preventDefault();

        if (e.target.name === "zip") {
          const isValid = validateAddress(e.target.value);
          if (!isValid) {
            setErrorMessage("We are currently not offering services in your area :(");
          } else {
            setErrorMessage("You are in our service area!");
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
        }
      };
    
    return (
    <section>
      <h5 className="services-h5">What We Offer</h5>
      <h2>Services</h2>

      <div className="container services__container-2col">
        <article className="service">
          <div className="service__head">
            <h3>Nail Trimmed and/or Files</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>$25 for the first pet</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>$15 for each additional dog/cat.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Additional Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>$10 - Paw pads trimmed.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>$15 - Feet tidied (paw pads & toe hair trimmed).</p>
            </li>
          </ul>
        </article>
        </div>
        <div className="container services__container-1col">

        <article className="service">
          <div className="service__head">
            <h3>What to Expect</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We use different strategies and techniques to find the best method for trimming for your dog and cats nails.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We work with your pets wherever they are less stressed and more comfortable, whether that’s inside your home or in my mobile grooming vehicle.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some pets do better when there family is out of the room, thus we may ask you to leave the room until there nails are trimmed.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We will discuss the proper nail care routine for your pet.</p>
            </li>
            
          </ul>
        </article>
          
      </div>
      <br/>

      <h5>Where We Offer</h5>
      <h2>Service Areas</h2>
      <p>We provide services to the Orlando area. Enter you zip below to see if you are within our service area.</p>

     <div className="container location__container">
        <div className="location__map">
        <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8909900422755!2d-81.41708574909354!3d28.512927282379025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77be8e6062883%3A0xa2d15995a8524cc6!2sGulfstream%20Rd%2C%20Orlando%2C%20FL%2032805!5e0!3m2!1sen!2sus!4v1673058415997!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <form className="form" onSubmit={handleChange} >
            <div className="form-group">
            
            <div>
              <label htmlFor="zip">Zip code:</label><br/>
              <input
                name="zip"
                defaultValue={zip}
                onBlur={handleChange}
                rows="5"
                
              />
            </div>
            {errorMessage && (
              <div>
                <p>{errorMessage}</p>
              </div>
            )}
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
      </div>

    </section>
    );
}

export default Services;