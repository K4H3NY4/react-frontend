import React, { Component } from 'react'; 
import {Link } from 'react-router-dom';
import axios from 'axios';



const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
    
 
})



api.get('/profile',{user_id: sessionStorage.getItem('user_id') }).then(res =>{
    
    //var first_name = res.data.first_name
  //  console.log(res.data.first_name);
    
   // console.log(sessionStorage.getItem('user_id'));
    
} )

class MenuBar extends Component {

            
  


    render(){


        if (sessionStorage.getItem('user_id')=== null){
            window.location.href='login'
        }
       
        return(

            
            
        <div className="container-fluid row pt-5 pb-4 menu-bar">
        <div className="col-lg-1 col-md-2 col-sm-2">Logo</div>
        <div className="col-lg-5 col-md-10 col-sm-10 text-center introText pl-5 text-lowercase">Here are some of your messages</div>
        <div className="col-lg-4 col-md-12 col-sm-12 text-center menu-text text-lowercase">
      
        <span className="pr-3"> <Link to="/home" >Home</Link></span>
            <span className="pr-3"> <Link to="/all" >All</Link></span> 
           
          
            <span className="pr-3"><Link to="/sent" > Sent</Link></span> 
               
          
      
            <span className="pr-3"><Link to="/cancelled" > Cancelled </Link></span> 
               
           
            <span className="pr-3"><Link to="/scheduled" > Scheduled</Link></span> 
           
         </div>
        <div className="col-lg-2 col-sm-12  greetings text-center pl-5"><Link to="/home" > hello, {sessionStorage.getItem('user_name')}. </Link></div>
    </div>
  


        )
    }
}
export default MenuBar;
