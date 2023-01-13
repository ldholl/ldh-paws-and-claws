import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

function Login() {
const [formState, setFormState] = useState({
    email: "",
    password: "",
    });
const [login, { error }] = useMutation(LOGIN_USER);

// update state based on form input changes
const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
        email: "",
        password: "",
      });
    };

    return (
    <section>
        <h2 className="login-h2">Login/Create an Account</h2>
        <div className="container login__container">

        <form onSubmit={handleFormSubmit} className="form">
            <div className="form-group">
                <h3>Sign into your Account:</h3>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    placeholder="Your email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {error && <div>Login failed</div>}


        </div>
    </section>
)
};

export default Login;