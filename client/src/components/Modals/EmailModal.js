import {React, useState} from 'react';
import {useMutation } from "@apollo/client";
import {UPDATE_EMAIL} from '../../utils/mutations';

const EmailModal= ({currentEmail, onClose}) => {
    const [formState, setFormState] = useState({email: currentEmail});

    const [updateEmail] = useMutation(UPDATE_EMAIL);

    const handleChange = (event) => {
        const {name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        })
    };

 const handleEmailEdit = async (event) => {
    event.preventDefault();
    try{
        console.log(formState);
        await updateEmail({
          variables: { email: formState.email}
        });
    } catch (error){
        console.error(error)
    }
    window.location.reload();
 }   


    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
            <label htmlFor="email">Email:</label>
                    <input 
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange} />
                <button id='submit-edit' onClick={handleEmailEdit}>Submit</button>
                <button id='close-edit' onClick={onClose}>Close</button>
            </div>
        </div>
    )
};

export default EmailModal;