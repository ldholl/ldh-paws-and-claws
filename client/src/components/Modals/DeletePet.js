import { React, useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_PET } from '../../utils/mutations';

const DeletePet = ({id, onClose}) => {
    // const [formState, setFormState]= useState({ _id: id});

    const [deletePet] = useMutation(DELETE_PET);

    // const handleChange = (event) => {
    //     const{name, value } = event.target;

    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     })
    // }

    const handleDeletePet = async (event) => {
        console.log('click')
        console.log(id.petId)
        event.preventDefault();
        try{
            await deletePet({
                variables: { _id: id}
            })
        } catch(error){
            console.error(error)
        }
        window.location.reload()
    }

    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
            <p>Are you sure you want to delete this pet?</p>
                <button id='submit-edit' onClick={handleDeletePet}>Yes</button>
                <button id='close-edit' onClick={onClose}>No</button>
            </div>
        </div>
    )
};

export default DeletePet;