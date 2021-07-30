import React from 'react';
import './App.css';


import MenuBar from '../messages/MenuBar';
import Settings from '../messages/Settings';
import SideLinks from '../messages/SideLinks';



function SettingsPage() {
  return (
    <React.Fragment>

    <MenuBar />
    <SideLinks />
    <Settings /> 
 

    </React.Fragment>
  );
}

export default SettingsPage;