import React, { useState } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
})







   




        const Create = () =>{
            const [first_name, setFirstName] = useState('');
            const [last_name, setLastName] = useState('');
            const [phone, setPhone] = useState('');
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [confirmPassword, setConfirm] = useState('');
        


        const handleSubmit = (e) => {
            e.preventDefault();
            const register ={first_name,last_name,email,phone,password,confirmPassword}

            if(password ===confirmPassword){
                console.log(register);
                api.post('/register', {first_name,last_name,email,phone,password}).then(function (response) {
   
                 console.log(response.data);
    
                   
                 });
            
            }
          
        }








        return(
            <div className="container-fluid row appSection">
        <div className="col-1 socialsTwo">
            <div className="d-none d-lg-block d-md-none d-sm-none socialsTwoDetails">
                <span className="pl-4">Twitter</span>   <span className="pl-4">Instagram</span>    <span className="pl-4">Github</span>   <span className="pl-4">Portfolio</span>
            </div>
        
        </div>
        <div className="col-lg-10 col-md-12 col-sm-12 container-fluid row messageSection " align="center">

            


              <div className="col-lg-12 col-md-12 col-sm-12 row messageNew">
                   <form   className="col-12 newMessage p-2" onSubmit={handleSubmit} >
                <h2 align="left">Register</h2>
                <hr></hr>

                <input type="text" className="w-100"
                 placeholder="First Name"
                 value={first_name}
                 onChange={(e)=>setFirstName(e.target.value)}
                 
                 /> 


                <input type="text" className="w-100" 
                placeholder="Last Name"                 
                value={last_name}
                onChange={(e)=>setLastName(e.target.value)}
                /> 


                <input type="email" className="w-100" 
                placeholder="E-mail"                 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />


                <input type="tel" className="w-100" 
                placeholder="Phone"                 
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                
                /> 

  
                <input type="password" className="w-100" placeholder="Enter password" 
                autoComplete="false"                
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                
                /> 


                <input type="password" className="w-100" placeholder="Confirm password"
                autoComplete="false"               
                value={confirmPassword}
                onChange={(e)=>setConfirm (e.target.value)}
                
                /> 

                

                

                <br></br>
                <button className="mt-4 btn btn-dark w-25" type="submit" >Register</button> 
                <br></br>  <br></br>
              


            </form>
            </div>
           




    

        </div>






    </div>
        )
        }

        export default Create;

