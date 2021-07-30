import React from 'react';
import './App.css';


import MenuBar from '../messages/MenuBar';

import SideLinks from '../messages/SideLinks';



function ViewMessagePage() {
  return (
    <React.Fragment>

    <MenuBar />
    <SideLinks />
    <div class="col-lg-10 col-md-12 col-sm-12 container-fluid row messageSection " align="center">

            


              <div class="col-lg-12 col-md-12 col-sm-12 row messageNew">
                   <form action="" align="center" class="col-12 newMessage p-2">
                <h2 align="left">View Message</h2>
                <hr></hr>
                <label for="" class="pt-2 h1">Receiver's Number</label>
                <br></br>
                <input type="tel" class="w-100" placeholder="+254700419377" value="+254711123456"/> 
                <br></br>
                <br></br>
                <textarea class="w-100" name="" id="" cols="" rows="3" placeholder="Enter message Here" value="">text added</textarea>
                
                <label for="" class="h1">Set Time</label><br></br>
                <input type="datetime-local" name="" id="" value="11/30/2021, 12:58 AM"/><br></br>

                <br></br>
                <button class="mt-5 mb-2 btn btn-dark w-25"> Save Changes</button> <button class="btn btn-outline-danger mt-5 mb-2 w-25"> Cancel Message </button>



            </form>
            </div>
    

        </div>




    

    </React.Fragment>
  );
}

export default ViewMessagePage;