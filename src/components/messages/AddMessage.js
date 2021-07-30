import React, { Component } from 'react';

import axios from 'axios';

import "./messages.css";


const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
})

class AddMessages extends Component {
  
    constructor(props){
        super(props);
        this.state = {message:''};
        this.state = {phone:''};
        this.state = {time:''};

        this.handlePhone = this.handlePhone.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePhone(event){
        this.setState({phone: event.target.value});
    }

    handleMessage(event){
       
        this.setState({message: event.target.value});
    }

    handleTime(event){
       
        this.setState({time: event.target.value});
    }

    handleSubmit(event){
        var user_id_session = sessionStorage.getItem("user_id")
      

        api.post('/add-message', {message: this.state.message, receiver_number: this.state.phone, time_scheduled: this.state.time, user_id: user_id_session}).then(function (response) {
    
         console.log(response.data);
      });
      
      

        //alert('A name was submited:' + this.state.email + this.state.password);
        event.preventDefault();
        window.location.href='/all'
    } 






    render(){
        return(


<div className="col-lg-10 col-md-12 col-sm-12  container-fluid row messageSection " align="center">

              <div className="col-lg-12 col-md-12  col-sm-12 row messageNew" align="center">
                   <form action="" align="center" className="col-12 newMessage p-2" onSubmit={this.handleSubmit} >
                <h2 align="left">Add Message</h2>
                <hr></hr>
                <label  className="pt-2 h1" >Receiver's Number </label>
                <br></br>

                <input 
                type="tel" 
                className="w-100" 
                placeholder="+254700419377"
                value={this.state.phone}
                onChange={this.handlePhone}
                />
               

                <br></br>
                <br></br>
                <textarea 
                className="w-100" name="" id="" cols="" rows="2" placeholder="Enter message Here" 
                value={this.state.message}
                onChange={this.handleMessage}
                ></textarea>
                <br></br>
                <label className=" h1">Enter Time</label><br></br>
                <input type="datetime-local" name="" id=""
                value={this.state.time}
                onChange={this.handleTime}
                
                /><br></br>

                <br></br>
                <button className="mt-5 mb-2 btn btn-dark w-25" type="submit"> Add Message</button>



            </form>
            </div>

<style>


    
</style>


    

        </div>


)
}
}
export default AddMessages;
