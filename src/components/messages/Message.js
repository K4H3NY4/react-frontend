import React, { Component } from 'react';
import axios from 'axios';





const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
    
 
})


api.post('/messages',{user_id: sessionStorage.getItem('user_id') }).then(res =>{
    console.log(res.data.user_messages);
    //const messages_data = res.data.user_messages
    //console.log(messages_data);
    //var first_name = res.data.first_name
   // console.log(sessionStorage.getItem('user_id'));
   return res.data.user_messages


   
    
} );

class Message extends Component {
    
  

    render(){
        return(




        <div className="col-lg-6 col-md-12 col-sm-12 row message" >
                    
                    <div className="col-12 m-0 p-0">
                    <p className="messageContent">This message is a dummy test placeholder, it will change automatically</p>
                    
                    <p className="pt-5 pb-3 phone"> <kbd>+254700419377</kbd></p>
                
                    </div>
                    <div className="container text-left col-6 m-0 pb-3 date">today </div>
                
                    <div className="container text-right col-6 m-0 pb-3 status"> cancelled</div>
                </div>




        
  
   

            )
        }
        }

export default Message;
