import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PET } from "../../utils/mutations";


const Addpet = (setIsOpen) => {

    const [formState, setFormState] = useState({
        petName: "",
        petType: "",
    });

    const [addPet, { error }] = useMutation(ADD_PET);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
        ...formState,
        [name]: value,
        });
    };

  // add pet submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPet({
        variables: {
          petName: formState.petName,
          petType: formState.petType,
        },
      });

      window.location.reload();

      console.log("Pet data =" + data);

      // clear form values
      setFormState({
        petName: "",
        petType: "",
      });
    } catch (e) {
      console.error(e);
    }
    window.location.reload();
  };

  return (


    <div>            
      <form onSubmit={handleFormSubmit} className="form">
        <div className="form-group">
          <h3>Add a Pet:</h3>
          <label htmlFor="petName">Pet Name:</label>
          <input
            placeholder="Pet Name"
            name="petName"
            type="petName"
            id="petName"
            value={formState.petName}
            onChange={handleChange}
          />
          <label htmlFor="petType">Pet Type:</label>
          <input
            placeholder="Pet Type"
            name="petType"
            type="petType"
            id="petType"
            value={formState.petType}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      {error && <div>Pet add failed</div>}
    </div>
  );
};

export default Addpet;
