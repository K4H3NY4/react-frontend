import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const api = axios.create({
    baseURL:'http://127.0.0.1:5000/'
})



class Logout extends Component {
   

    
        constructor(){
            super();
            api.post('/logout').then(res =>{
                console.log(res.data)
            } ); 



        return <Redirect push to="/" />
    
}

}
export default Logout;
