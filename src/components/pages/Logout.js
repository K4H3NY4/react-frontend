import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const api = axios.create({
    baseURL:'https://account-rest.herokuapp.com/'
})



function Logout () {
   

            api.post('/logout').then(res =>{
                console.log(res.data)
            } ); 



        return <Redirect push to="/" />
    
}


export default Logout;
