import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");

  const setEmailFunc=(e)=>{
    setEmail(e.target.value);
  }
  const setPasswordFunc=(e)=>{
    setPassword(e.target.value);
  }
  const formSubmit=async(e)=>{
    e.preventDefault();
    const formData={
      "email":email,
      "password":password
    }
    
    try {
        const result=await axios.post("http://localhost:8080/login", formData);
        console.log('result', result);
        if(result.data==true){
          navigate("/home");
        }else{
          alert("please enter correct details");
        }
         
    } catch (error) {
      
    }

  }

  return (
    <div>
      <h1>LogiN Form</h1>
      <div>
        <form onSubmit={formSubmit}>
          <div>
            <label for="email"
            >
              EMAIL
            </label>
            <input type='email' 
            id='email' 
            placeholder='write email here'
            onChange={setEmailFunc}
            />
          </div>
          <div>
            <label for="password"
            >
              PASSWORD
            </label>
            <input type='password' 
            id='password' 
            placeholder='write password here'
            onChange={setPasswordFunc}
            />
          </div>
          <div>
           <input type='submit' />
          </div>
        </form>
      </div>
      <div>
        <button>Registration</button>
      </div>
    </div>
  )
}

export default Login