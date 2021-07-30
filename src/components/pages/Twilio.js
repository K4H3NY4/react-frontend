import React from 'react';
import './App.css';


import MenuBar from '../messages/MenuBar';
import TwilioSettings from '../messages/Twilio';
import SideLinks from '../messages/SideLinks';



function TwilioPage() {
  return (
    <React.Fragment>

    <MenuBar />
    <SideLinks />
    <TwilioSettings /> 
 

    </React.Fragment>
  );
}

export default TwilioPage;