import React from 'react';
import './App.css';

import MenuBar from '../messages/MenuBar';
import CancelledMessages from '../messages/CancelledMessages';
import SideLinks from '../messages/SideLinks';
import AddMessageSide from '../messages/AddMessageSide';


function CancelledMessagesPage() {
  return (
    <React.Fragment>

    <MenuBar />
    <SideLinks />
    <CancelledMessages /> 
    <AddMessageSide />

    </React.Fragment>
  );
}

export default CancelledMessagesPage;