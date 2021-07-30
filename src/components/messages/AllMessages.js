import React, { useState } from 'react';
import axios from 'axios';

import Messages from './Message';
import "./messages.css";




const AllMessages = () => {

const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
    
 
})

/*
api.post('/messages',{user_id: sessionStorage.getItem('user_id') }).then(res =>{
    //console.log(res.data.user_messages);
    //messages = res.data.user_messages
    //var first_name = res.data.first_name
   // console.log(sessionStorage.getItem('user_id'));
    
} )

*/

/*

class AllMessages extends Component {


    render(){*/


        const [messages, setMessages ] = useState ([
            {id: '1' , messages:'hello',status: 'scheduled', receiver_number: '+254700419377', time_scheduled: 'today'}
    
        ])

        return(

            
          
        
    <div className="container-fluid row appSection">

    <div className="col-lg-8 col-md-12 col-sm-12 container-fluid row messageSection " align="center">
       <Messages />


     
      

    </div>

</div>



        )
    }

export default AllMessages;
