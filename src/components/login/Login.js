import React, { Component } from 'react';
import axios from 'axios';


const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
    
})



class Login extends Component {
       
        constructor(props){
            super(props);
            this.state = {email:''};
            this.state = {password:''};

            this.handleChange = this.handleChange.bind(this);
            this.handlePassword = this.handlePassword.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event){
            this.setState({email: event.target.value});
        }

        handlePassword(event){
           
            this.setState({password: event.target.value});
        }

         handleSubmit(event){
          api.post('/login', {email: this.state.email, password: this.state.password}).then(function (response){ 

            const successStatus = response.data.success
            console.log(response.data); 
            if( successStatus === 1){
                console.log('hapo sawa');
                sessionStorage.setItem("user_id",response.data.id);
                sessionStorage.setItem("user_name",response.data.first_name);
                sessionStorage.setItem("last_name",response.data.last_name);
                sessionStorage.getItem('user_id');



                window.location.href='/home'
            }else{      }          
        
        });
            event.preventDefault();
           
        }

    render(){
        return(

       
           <div className="container-fluid row appSection">
        <div className="col-1 socialsTwo">
            <div className="d-none d-lg-block d-md-none d-sm-none socialsTwoDetails">
                <span className="pl-4">Twitter</span>   <span className="pl-4">Instagram</span>    <span className="pl-4">Github</span>   <span className="pl-4">Portfolio</span>
            </div>
        
        </div>
        <div className="col-lg-10 col-md-12 col-sm-12 container-fluid row messageSection " align="center">

            


              <div className="col-lg-12 col-md-12 col-sm-12 row messageNew">
                   <form action="" align="center" onSubmit={this.handleSubmit} className="col-12 newMessage p-2 text-center">
                <h2 align="left">Login</h2>
                <hr></hr>
                <br></br> <br></br>

                <input
                type="email"
                id="email" 
                className="w-100"
                value={this.state.value}
                onChange={this.handleChange}
               
                placeholder="Enter email" /> 

                <br></br>
                <br></br>

                <input 
                type="password"  
                id="password"  
                className="w-100" 
                value={this.state.password}
                onChange={this.handlePassword}
                autoComplete="false"
            
                placeholder="Enter password" /> 
                

                

                <br></br>
                <button className="mt-5 mb-2 btn btn-dark w-25"  onClick={this.handleSubmit} >Login</button> 
                <br></br>
                <p id="p"></p><br></br>
                <span>Forgot Password</span>


            </form>
            </div>
           
           </div>
           </div>
          

        )
    }
}
export default Login;




