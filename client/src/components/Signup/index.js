import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Signup = () => {
const [formState, setFormState] = useState({
    clientName: "",
    username: "",
    email: "",
    phoneNumber: "", 
    password: "",
    homeAddress: "",
    zipcode: "",
 });

 const [addUser, { error }] = useMutation(ADD_USER);

 // update state based on form input changes
 const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

 // signup submit form
 const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formState);
      const { data } = await addUser({
        variables: {
          clientName: formState.username,
          username: formState.username,
          email: formState.email, 
          phoneNumber: parseInt(formState.phoneNumber),
          password: formState.password,
          homeAddress: formState.homeAddress,
          zipcode: parseInt(formState.zipcode) },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

  };
    return (
    <section>
        <h2 className="login-h2">Login/Create an Account</h2>
        <div className="container login__container">
        <form onSubmit={handleFormSubmit} className="form">
            <div className="form-group">
                <h3>Create an Account:</h3>
                    <label htmlFor="name">Name:</label>
                    <input 
                    placeholder="Your name"
                    name="clientName"
                    type="clientName"
                    id="clientName"
                    value={formState.clientName}
                    onChange={handleChange}
                    />
                    <label htmlFor="username">Username:</label>
                    <input
                    placeholder="Your username"
                    name="username"
                    type="username"
                    id="username"
                    value={formState.username}
                    onChange={handleChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                    placeholder="Your email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                    <label htmlFor="homeAddress">Address (Street & City):</label>
                    <input 
                    placeholder="Your Address"
                    name="homeAddress"
                    type="address"
                    id="homeAddress"
                    value={formState.homeAddress}
                    onChange={handleChange}
                  />
                    <label htmlFor="zip">Zip code:</label>
                    <input 
                    placeholder="Your Zip Code"
                    name="zipcode"
                    type="zipcode"
                    id="zipcode"
                    value={formState.zipcode}
                    onChange={handleChange}
                    />

                    <label htmlFor="password">Password:</label>
                    <input 
                    placeholder="Your password"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                    />

            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {error && <div>Sign up failed</div>}


        {/* <Login /> */}
        </div>
    </section>
)
};

export default Signup;