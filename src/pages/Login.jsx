import React, { useState } from 'react'
import img from '../assets/2.png';
import background from '../assets/2231984.jpg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigat=useNavigate();
  const [email,setEmail]=useState("")
  const [password,setpassword]=useState("")
  const[error,sererror]=useState("")
  
  function handlelogin(e){
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (!storedUser) {
      sererror("No user found. Please register first.");
      return;
  }
  if (storedUser.email === email && storedUser.pass === password) {
    sererror("");
    navigat('/home'); 
  } else {
    sererror("Invalid email or password. Try again.");
  }
}

  
  return (
    <div 
          style={{   
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            minHeight: "100vh",
            display: "flex",
            backgroundRepeat: "no-repeat",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
    
        <form onSubmit={handlelogin}  className="bg-white rounded-5 px-5 pb-5"style={{width: "35%"}}>
                <img src={img} alt="Logo" className="mb-3" style={{ width: "70%", display: "block", margin: "0 auto" }} />
        
                <div className="mb-3">
                  <label htmlFor="email" className="text-black fw-bold">Email</label>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="Enter your email" id="email" className="form-control mt-2 border border-secondary" />
               
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="text-black fw-bold">Password</label>
                  <input value={password} onChange={(e)=>setpassword(e.target.value)}  type="password" id="password" placeholder="Enter your password" className="form-control mt-2 border border-secondary" />
        
                </div>
        
                <button type="submit" className="btn btn-primary w-100 rounded-4 mt-3">Login</button>
                {error && <p className='mt-3' style={{ color: "red", textAlign: "center" }}>{error}</p>}

              </form>
              </div>
  )
}

export default Login