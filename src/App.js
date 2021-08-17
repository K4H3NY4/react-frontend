import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';


import LoginPage from './components/pages/Login';
import AllMessagesPage from './components/pages/AllMessages';
import SentMessagesPage from './components/pages/SentMessages';
import ScheduledMessagesPage from './components/pages/ScheduledMessages';
import CancelledMessagesPage from './components/pages/CancelledMessages';
import AddMessagesPage from './components/pages/AddMessage';
import TwilioPage from './components/pages/Twilio';
import ResetPage from './components/pages/Reset';
import SettingsPage from './components/pages/Settings';
import ViewMessagePage from './components/pages/ViewMessage';
import HomePage from './components/pages/Home';
import RegisterPage from './components/pages/Register';









//logout

function LandingPage() {
  

  return (
    
    <Router>
 
    <Switch>
    <Route path="/" exact component={LoginPage} />


    <Route path="/login" component={LoginPage} />
    
    <Route path="/add" component={AddMessagesPage} />

    <Route path="/all" component={AllMessagesPage} />
    <Route path="/sent" component={SentMessagesPage} />
    <Route path="/view" component={ViewMessagePage} />
    <Route path="/scheduled" component={ScheduledMessagesPage} />
    <Route path="/cancelled" component={CancelledMessagesPage} />

    <Route path="/twilio" component={TwilioPage} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/reset" component={ResetPage}/>
    <Route path="/home" component={HomePage} />
 
    <Route path="/register" component={RegisterPage} />
    




    </Switch>
    </Router>
  );
}




export default LandingPage;
