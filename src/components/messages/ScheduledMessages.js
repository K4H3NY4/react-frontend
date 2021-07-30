import React, { Component } from 'react';
import Messages from './Message';
import "./messages.css";





class ScheduledMessages extends Component {
    render(){
        return(
        
    <div className="container-fluid row appSection">

    <div className="col-lg-8 col-md-12 col-sm-12 container-fluid row messageSection " align="center">
        
       <Messages />
       <Messages /> 

    </div>

</div>


        )
    }
}
export default ScheduledMessages;
