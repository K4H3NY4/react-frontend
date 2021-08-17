import React, { useState } from 'react';
import axios from 'axios';
import "./messages.css";


function TwilioSettings(){
  const [account_sid, setAccount_sid] = useState(null);
  const [auth_token, setAuth_token] = useState(null);
  const [code, setCode] = useState(null);

const api = axios.create({
  baseURL:'http://127.0.0.1:5000/'
})




 
api.get('/twilio').then(function (response){ 
  var twilio_data = response.data;
 // console.log(twilio_data);
  const account_sid = twilio_data.account_sid;
  setAccount_sid(account_sid);
  const auth_token = twilio_data.auth_token;
  setAuth_token(auth_token);
  const code = twilio_data.code;
  setCode(code);

  return twilio_data;

  });



 
  
 
      return(

          
          

<div className="col-lg-10 col-md-12 col-sm-12 container-fluid row messageSection " align="center">

            

<div className="col-lg-12 col-md-12 col-sm-12 row messageNew">
     <form action="" align="center" className="col-12 newMessage p-2">
  <h2 align="left">Twilio Keys</h2>
  <hr></hr>
  <br></br>
  <input type="text" className="w-100" placeholder={account_sid}  /> 
  <br></br>
  <br></br>
  <input type="text" className="w-100" placeholder={auth_token} /> 
  <br></br><br></br>
  <input type="text" className="w-100" placeholder={code} /> 
  <br></br><br></br>


  

  <br></br>
  <button className="mt-5 mb-2 btn btn-dark w-25"> Save Keys</button> 


</form>
</div>







</div>



)
}

export default TwilioSettings;
