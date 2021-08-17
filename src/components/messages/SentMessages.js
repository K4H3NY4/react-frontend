import React from 'react';
import Messages from './Sent';
import "./messages.css";





function SentMessages () {
   
        return(
        
    <div className="container-fluid row appSection">

    <div className="col-lg-8 col-md-12 col-sm-12 container-fluid row messageSection " align="center">
            
       <Messages />
     
    
    </div>

</div>
       )
    }

export default SentMessages;
