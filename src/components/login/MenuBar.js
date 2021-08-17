import React from 'react';
import { Link } from 'react-router-dom';




function MenuBar() {

        return(
            <div className="container-fluid row pt-5 pb-4 menu-bar">
        <div className="col-lg-1 col-md-2 col-sm-2">Logo</div>
        <div className="col-lg-9 col-md-10 col-sm-10 text-center introText pl-5 text-lowercase"> <kbd> welcome to Whatsapp Scheduler | Demo project </kbd></div>
     
        <div className="col-lg-2 col-sm-12  greetings text-center pl-5"><Link to="/register"> Register</Link></div>
    </div>
        )
    }

export default MenuBar;
