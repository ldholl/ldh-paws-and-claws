import {React, useState} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import DeletePet from '../Modals/DeletePet';


function Viewpets() {
    const [isDeleteModalOpen, setDeleteState] = useState(false);
    const { loading, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>;
  console.log(data.me.pets);



  let petId
  let chosenPet

  const toggleDeletePet = (event) => {
     let chosenPet = event.target.name
     console.log(chosenPet)
     petId =
     parseInt(event.target.petId)

     console.log(petId)
    if(!isDeleteModalOpen){
      setDeleteState(true);
      return petId;
    } else {
      setDeleteState(false);
    }
  };

// const deleteButtons = document.getElementsByClassName('delete-btn');
//     for(let deleteButton of deleteButtons)(
//     deleteButton.addEventListener('click', toggleDeletePet(deleteButton.id))
// )
  

  return (
    <div> 
        <h2>Your Pets</h2>
    {!isDeleteModalOpen &&
    <>
    {data.me.pets.map((item, index) => (
        
        <article  className="service" key={index} >
        
 
        <ul className='service__list'>
            <li><strong>Name:</strong> {item.petName}</li>
            <hr/>
            <li><strong>Type:</strong> {item.petType}</li>
            <hr/>
            <div className='delete-div'>
            <button id={item._id} name={item.petName} className='delete-pet-trigger delete-btn' type='click' onClick={toggleDeletePet}>Remove</button>
            </div>     
            </ul>
           
            
        </article>
        ))}
    </>
     }
    {isDeleteModalOpen && <DeletePet  
            id = {petId}
            onClose = {toggleDeletePet} />}
    </div>
    
    );
}

export default Viewpets;
