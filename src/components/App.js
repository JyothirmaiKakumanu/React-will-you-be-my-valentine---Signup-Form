import React, {Component, useState} from "react";
import '../styles/App.css';
import { useForm } from 'react-hook-form';

const App = () => {
  const { register, handleSubmit } = useForm();
  const [msg,setMsg]=useState("");
  const isAlphaNumeric=(str)=>{ 
    var val = str; 
    var RegEx = /^[a-z0-9]+$/i; 
    var Valid = RegEx.test(val); 
    return Valid 
}
  const onSubmit=(data)=>
  {
      
      //console.log(data.gender)
       if((data.name=="") || (data.email=="") || (data.gender=="") || (data.number=="")||(data.password==""))
       {
         
         setMsg("All fields are mandatory")
         return
       }
       //console.log(isAlphaNumeric(data.name))
       if(isAlphaNumeric(data.name)==false)
       {
         
         setMsg("Name is not alphanumeric")
         return
       }
       if((data.email.indexOf("@"))==-1)
       {
            setMsg("Email must contain @")
            return
       }
       if(isNaN(data.number))
       {
         setMsg("Phone Number must contain only numbers")
         return
       }
       if(data.password.length<6)
       {
         setMsg("Password must contain atleast 6 letters")
         return
       }
       const d=data.email.indexOf("@")
       
       setMsg("Hello"+" "+data.email.substring(0,d))
       return

  }
  
  return (
    <div id="main">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input  name="name" data-testid = 'name' ref={register} placeholder="Name"/><br></br>
            <input  name="email" data-testid= 'email' ref={register} placeholder="email"/><br></br>
            <select name="gender" data-testid= 'gender' ref={register} ><br></br>
              <option >Male</option>
              <option >Female</option>
              <option>Others</option>
            </select>
            <input name="number" data-testid = 'phoneNumber' ref={register} placeholder="Phone"/><br></br>
            <input type="password" name="password" data-testid='password' ref={register}  placeholder="Password"/><br></br>
            <input type="submit" data-testid = 'submit' />
            <p>{msg}</p>

           
          </form>
          
    </div>

  )
}


export default App;