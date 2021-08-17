import React from 'react';
import './App.css';

import MenuBar from '../messages/MenuBar';
import AllMessages from '../messages/AllMessages';
import SideLinks from '../messages/SideLinks';
import AddMessageSide from '../messages/AddMessageSide';


function AllMessagesPage() {
  
  return (
    <React.Fragment>

    <MenuBar />
    <SideLinks />
    <AllMessages /> 
    <AddMessageSide />

    </React.Fragment>
  );
}

export default AllMessagesPage;