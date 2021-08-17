import React, { Component } from 'react';
import "./messages.css";
import axios from 'axios';



sessionStorage.getItem("user_id")

const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
    
 
})






class Settings extends Component {


    constructor(props){
        super(props);
        this.state = {first_name:''};
        this.state = {last_name:''};
        this.state = {password:''};
        this.state = {confirmPassword:''};
    
    
 
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);

        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


 
    }

    handleFirstName(event){
        this.setState({first_name: event.target.value});
    }

    handleLastName(event){
       
        this.setState({last_name: event.target.value});
    }
  
    handlePassword(event){
        this.setState({password: event.target.value});
    }

    handleConfirmPassword(event){
        this.setState({confirmPassword: event.target.value});
    }


    handleReset(event){

        var user_id = sessionStorage.getItem("user_id");
       // new_password, confirm_password
        api.put('/change-password', {new_password: this.state.password, confirm_password: this.state.confirmPassword , user_id: user_id,}).then(function (response) {
   
            console.log(response);
            window.location.href="/login"
              

         });
    
              
           // alert('A name was submited:'');
            event.preventDefault();

    }

    
    handleSubmit(event){

        
        var user_id_session = sessionStorage.getItem("user_id")
      

       api.put('/edit', { first_name: this.state.first_name, last_name: this.state.last_name, user_id: user_id_session}).then(function (response) {
   
        console.log(response);
        window.location.href="/login"
        
       
     });

       // alert('A name was submited:'');
        event.preventDefault();
    

    }

    render(){
        return(

            <div className="col-lg-10 col-md-12 col-sm-12 container-fluid row messageSection " align="center">

            


            <div className="col-lg-12 col-md-12 col-sm-12 row messageNew">
                 <form action="" align="center" className="col-12 newMessage p-2"  onSubmit={this.handleSubmit}>
              <h2 align="left">Edit Profile</h2>
              <hr></hr>

              <input type="text" className="w-100" 
              placeholder={sessionStorage.getItem("user_name")} 
              value={this.state.first_name}
              onChange={this.handleFirstName}
              /> 
              <input type="text" className="w-100" 
              placeholder={sessionStorage.getItem("last_name")} 
              value={this.state.last_name}
              onChange={this.handleLastName}
              /> 
              <input type="email" className="w-100" placeholder="E-mail" value="kahenyaa@gmail.com" disabled /> 
              <input type="tel" className="w-100" placeholder="Phone" value="+254700419377" disabled /> 
              <button className="mt-4 btn btn-dark w-25" type="submit">Save Changes</button> 
              <br></br><br></br>
            


          </form>

          <form action="" align="center" className="col-12 newMessage p-2" onSubmit={this.handleReset}>
              <h4 className="pt-5">Change Password</h4>
              <hr></hr>
              <input type="password" className="w-100" autoComplete="false" 
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handlePassword}
              /> 


              <input type="password" className="w-100" autoComplete="false" 
              placeholder="Confirm password" 
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPassword}
              /> 

              <button className="mt-4 btn btn-dark w-25">Change Password</button> 


              
      </form>
              

              <br></br>
             
          </div>




  

      </div>

  



)
}
}
export default Settings;
