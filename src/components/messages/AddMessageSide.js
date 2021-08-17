import React, { Component } from 'react';
import "./messages.css";
import axios from 'axios';



sessionStorage.getItem("user_id")

const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
    
 
})



class AddMessageSide extends Component {
   
   

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
       
        console.log(sessionStorage.getItem('user_id'));

            
       

       
     });

      

       // alert('A name was submited:'');
        event.preventDefault();
  
    } 






    render(){
        return(
            <div className="col-lg-3 col-md-12 col-sm-12 stickyMessage">  
            <form action="" align="center" onSubmit={this.handleSubmit} className="col-12 addMessage p-2">
                <h2 align="center">Add Message</h2>
                <hr></hr>
                <label  className="pt-2 h4">Receiver's Number</label>
                <br></br>
                <input type="tel" placeholder="+254700419377"
                 value={this.state.receiver_number}
                 onChange={this.handlePhone}
                
                />
                <br></br>
               
                <textarea name="" id="" cols="20" rows="5" className="pt-5" placeholder="Enter message Here"
                 value={this.state.message}
                 onChange={this.handleMessage}
                />                <br></br>
                <label  className="pt-1 h4">Enter Day</label> <br></br>
                <input type="datetime-local" name="" id="" 
                 value={this.state.time_scheduled}
                 onChange={this.handleTime}/>
                <br></br>
                <button className="mt-5 mb-2 btn btn-outline-dark" type="submit"> Add Message</button>



            </form>



        </div>




 
        )
    }
}
export default AddMessageSide;
