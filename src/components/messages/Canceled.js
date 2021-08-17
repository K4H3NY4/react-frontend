import React from 'react';
import axios from 'axios';
import { useState } from 'react';


function Message () {


const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
    
 
})




const [messages, setMessages] = useState([])

api.post('/canceled-messages',{user_id: sessionStorage.getItem('user_id') }).then(res =>{
    //console.log(res.data.user_messages);
    setMessages(res.data.user_messages);

   return "complete";


} );




        return(

    <div className="pageDesign">
    {messages.map((message)=>(
    <div className="col-lg-6 col-md-12 col-sm-12 row message" key={message.id}>                   
    <div className="col-12 m-0 p-0">
    <p className="messageContent">{message.message}</p>
    <p className="pt-5 pb-3 phone"> <kbd>{message.receiver_number}</kbd></p>
    </div>
    <div className="container text-left col-6 m-0 pb-3 date">{message.time_scheduled}</div>
    <div className="container text-right col-6 m-0 pb-3 status">{message.status}</div>
    </div>
))}

        
    </div>

)
    }    
  
  

         

export default Message;
