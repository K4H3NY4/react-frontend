import React from 'react';
import './App.css';


import MenuBar from '../messages/MenuBar';
import AddMessages from '../messages/AddMessage';
import SideLinks from '../messages/SideLinks';



function AddMessagesPage() {
  return (
    <React.Fragment>

    <MenuBar />
    <SideLinks />
    <AddMessages /> 
 

    </React.Fragment>
  );
}

export default AddMessagesPage;