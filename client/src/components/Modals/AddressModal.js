import { React, useState } from 'react';
import {useMutation } from "@apollo/client";
import { UPDATE_ADDRESS } from '../../utils/mutations';

const AddressModal = ({currentHomeAddress, currentZipcode, onClose}) => {
    const [formState, setFormState] = useState(
        {homeAddress: currentHomeAddress, zipcode: currentZipcode}
    );

    const [updateAddress] = useMutation(UPDATE_ADDRESS);

    const handleChange = (event) => {
        const {name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        })
    };

    const handleAddressEdit = async (event) => {
        event.preventDefault();
        try{
            console.log(formState);
            await updateAddress({
                variables: {
                    homeAddress: formState.homeAddress,
                    zipcode: parseInt(formState.zipcode)
                }
            });
        } catch (error){
            console.error(error)
        } window.location.reload()
    }

    return (
        <div className='modalBackDrop'>
            <div className='modalContainer'>
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
                <button id='submit-edit' onClick={handleAddressEdit}>Submit</button>
                <button id='close-edit' onClick={onClose}>Close</button>
            </div>
        </div>
    )

};

export default AddressModal;