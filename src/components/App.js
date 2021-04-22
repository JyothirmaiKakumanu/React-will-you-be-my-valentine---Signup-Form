import React, {useState} from "react";
import '../styles/App.css';

const App = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [gender,setGender] = useState('Male')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [errorMsg,seterrorMsg] = useState('')
  
  const UpdateName = (e)=>{
    setName(e.target.value)
  }

  const UpdateEmail=(e)=>{
    setEmail(e.target.value)
  }

  const UpdateGender=(e)=>{
    setGender(e.target.value)
  }

  const UpdatePhone=(e)=>{
    setPhone(e.target.value);
  }

  const UpdatePassword=(e)=>{
    setPassword(e.target.value)
  }

  const ValidateForm=(e)=>{
    if(!name || !email || !gender || !phone || !password){
      e.preventDefault();
      seterrorMsg("All fields are mandatory");
      return;
    }
    else if(!name.match(/^[0-9a-z]+$/)){
      e.preventDefault();
      seterrorMsg("Name is not alphanumeric");
      return;
    }
    else if(!email.match(/\S+@\S+\.\S+/)){
      e.preventDefault();
      seterrorMsg("Email must contain @")
      return;
    }
    else if(!phone.match(/^\d{10}$/)){
      e.preventDefault();
      seterrorMsg("Phone Number must contain only numbers");
      return;
    }
    else if(password.length<6){
      e.preventDefault();
      seterrorMsg("Password must contain atleast 6 letters");
      return;
    }
    else{
      e.preventDefault();
      var displayName = email.substring(0, email.lastIndexOf("@"));
      seterrorMsg("Hello "+displayName);
    }
  }


  return (
    <div className='container' >
            <h1>Sign-up Form</h1>
          <form onSubmit={ValidateForm} >
            <label htmlFor="name">Name:</label>
            <input type="text" data-testid ='name'  onChange={UpdateName} />
            <br/>
            <label htmlFor="email">Email address:</label>
            <input type="email" data-testid = 'email' onChange={UpdateEmail} />
            <br/>
            <label htmlFor="gender">Gender:</label>
            <select name="gender" data-testid = 'gender' value={gender}  onChange={UpdateGender} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select>
            <br/>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel"  data-testid = 'phoneNumber' onChange={UpdatePhone} />
            <br/>
            <label htmlFor="password">Password:</label>
            <input type="password" data-testid = 'password' onChange={UpdatePassword} />
            <br/>
            <button  data-testid = 'submit'>Submit</button>
            <p>{errorMsg}</p>
          </form>
        </div>
  );
};

export default App;
