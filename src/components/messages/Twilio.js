import React from 'react';
import axios from 'axios';
import "./messages.css";





const TwilioSettings = () =>{
  const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
  })
  
  api.get('/twilio').then(function (response){ 
  var twilio_data = response.data;
  console.log(twilio_data);

  });
  
  
 
 
  
 
        return(

          
          

<div className="col-lg-10 col-md-12 col-sm-12 container-fluid row messageSection " align="center">

            

<div className="col-lg-12 col-md-12 col-sm-12 row messageNew">
     <form action="" align="center" className="col-12 newMessage p-2">
  <h2 align="left">Twilio Keys</h2>
  <hr></hr>
  
  <input type="text" className="w-100" placeholder="" /> 
  <br></br>
  <br></br>
  <input type="text" className="w-100" placeholder="Enter: Auth Key" /> 
  <br></br><br></br>
  <input type="text" className="w-100" placeholder="Enter: Join Code" /> 
  <br></br><br></br>
  <input type="tel" className="w-100" placeholder="Enter: Phone" /> 


  

  <br></br>
  <button className="mt-5 mb-2 btn btn-dark w-25"> Save Keys</button> 


</form>
</div>







</div>



)
}

export default TwilioSettings;
