import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function HomePage() {
  return (
   <React.Fragment>

<div className="container-fluid row pt-5 pb-5">
        <div className="col-1">Logo</div>
        <div className="col-lg-9 col-sm-12 col-md-12 text-right introText "><kbd> Send join syllable-connected to   +1-415-523-8886 </kbd> </div>
        <div className="col-lg-2 col-sm-12 col-md-12 greetings text-center pl-5">hello, {sessionStorage.getItem('user_name')}.</div>

    </div>
    <div className="container-fluid row tall" >
        <div className="col-lg-5 d-sm-none d-md-none d-lg-block  p-5">
            <img src="" alt="" height="100%" width="100%"/>

        </div>
        <div className="col-lg-6 col-sm-12 col-md-12">
            <div className="col-12 menu">
              
                <li> <Link to="/add">Add Message.</Link></li>
                <li> <Link to="/all">Messages. </Link></li>
                <li><Link to="/settings">Edit Profile.</Link></li>
                <li><Link to="/twilio">Twilio.</Link></li>
                <li><Link to="/logout">Logout.</Link></li>

            </div>
            
            
            </div>
        <div className="col-1">
            <div className="socials">
                <span className="pr-2">Twitter</span>
                <span className="pr-2">Instagram</span>
                <span className="pr-2">Github</span>
                <span className="pr-2">Portfolio</span>
            </div>
        </div>
    </div>
      
    </React.Fragment>
  );
}

export default HomePage;
