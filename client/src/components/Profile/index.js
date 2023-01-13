import {React, useState } from "react";
import {BiEdit}  from "react-icons/bi";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import EmailModal from '../Modals/EmailModal';
import AddressModal from "../Modals/AddressModal";


function Profile() {
  const [isEmailModalOpen, setEmailState] = useState(false);
  const[isAddressModalOpen, setAddressState]= useState(false);
  const { loading, data } = useQuery(QUERY_ME);
  if (loading) return <p>Loading...</p>;
//   console.log(data);



const toggleEditEmail = () => {
  console.log('click')
  if(!isEmailModalOpen){
    setEmailState(true);
  } else {
    setEmailState(false);
  }
};

const toggleEditAddress = () => {
  console.log('click')
  if(!isAddressModalOpen){
    setAddressState(true);
  } else {
    setAddressState(false);
  }
}



  return (

        <article className="service">
        <div className="service__head">
            <h3>Profile</h3>
        </div>
        <ul className='service__list'>
            <li>Name: {data.me.clientName}</li>
            <hr/>
            <li>Username: {data.me.username}</li>
            <hr/>
            <li>Email: {data.me.email}
            
            <div className='edit-div'>
            <a className='edit-email-trigger' onClick={toggleEditEmail}><BiEdit /></a></div>
            {isEmailModalOpen && <EmailModal
                currentEmail = {data.me.email}
                onClose = {toggleEditEmail}
                className="btn btn-primary"
              />}
            </li>
            <hr/>
            <li>Phone number: {data.me.phoneNumber}</li>
            <hr/>
            {isAddressModalOpen && <AddressModal
                  currentHomeAddress= {data.me.homeAddress}
                  currentZipcode= {data.me.zipcode}
                  onClose= {toggleEditAddress}
                  />}
            {!isAddressModalOpen &&
            <li>Address: {data.me.homeAddress}, {data.me.zipcode}
            <div className='edit-div'>
              <a className='edit-address-trigger' onClick={toggleEditAddress}><BiEdit /></a>
              </div>
            </li>
            }
            </ul>
        </article>
    );
}

export default Profile;
