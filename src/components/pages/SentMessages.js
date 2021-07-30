import React from 'react';
import './App.css';

import MenuBar from '../messages/MenuBar';
import SentMessages from '../messages/SentMessages';
import SideLinks from '../messages/SideLinks';
import AddMessageSide from '../messages/AddMessageSide';


function SentMessagesPage() {
  return (
    <React.Fragment>

    <MenuBar />
    <SideLinks />
    <SentMessages /> 
    <AddMessageSide />

    </React.Fragment>
  );
}

export default SentMessagesPage;