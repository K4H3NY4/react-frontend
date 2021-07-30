import React from 'react';
import './App.css';

import MenuBar from '../messages/MenuBar';
import ScheduledMessages from '../messages/ScheduledMessages';
import SideLinks from '../messages/SideLinks';
import AddMessageSide from '../messages/AddMessageSide';


function ScheduledMessagesPage() {
  return (
    <React.Fragment>

    <MenuBar />
    <SideLinks />
    
    <ScheduledMessages /> 
    <AddMessageSide />

    </React.Fragment>
  );
}

export default ScheduledMessagesPage;