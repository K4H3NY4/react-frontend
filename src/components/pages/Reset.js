import React from 'react';
import './reset.css';
import { Link } from 'react-router-dom';




function ResetPage() {
  return (
  
<div class="container-fluid col-12 loginSection " >
            <form action="" align="center" class="loginForm" >

                <label class="h2 pt-4 pb-2">Email</label><br></br>
                <input type="email" name="" id=""/>
                <br></br>
                
                <button class="mt-5 mb-3 btn btn-dark w-50">Reset Password</button>
                <br></br>

                <span class="text-left mr-5 pr-5"> <Link to="/login"> Login </Link></span> <span class="pl-5 m-0 text-right"><Link to="/register">Register</Link></span>


            </form>

    </div>
 
  );
}

export default ResetPage;
