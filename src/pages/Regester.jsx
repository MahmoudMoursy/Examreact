import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import {z} from "zod";
import { usernamecontext } from '../context/usernamecontext';
import { useNavigate } from 'react-router-dom';
import background from '../assets/red-light-round-podium-black-background-mock-up.jpg';
import img from '../assets/1.png';
import { zodResolver } from '@hookform/resolvers/zod';

function Register() {
 const{username,setUsername}=useContext(usernamecontext)
    
    const navigat=useNavigate()
    const schema=z.object({
        name: z.string().min(5, "Must be more than 5 characters").max(15, "Must be less than 15 characters"),
        email: z.string().email("Invalid email"),
        pass: z.string().min(9, "Must be more than 9 characters").max(15, "Must be less than 15 characters"),
        Condition: z.string().min(1, "Please select a city")

    })
    const { register,handleSubmit,setValue,formState:{errors}}=useForm({
        resolver:zodResolver(schema)
    })
    const [Condition,setCondition]=useState("");
    function handleCondition(selectCondition){
     setCondition(selectCondition)
     setValue("Condition", selectCondition)
    };
    function save(data){
     console.log(data);
     setUsername(data.name)
     localStorage.setItem("userData", JSON.stringify(data));
    navigat('/Login')
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
      <form onSubmit={handleSubmit(save)} className="bg-white rounded-5 px-5 pb-5"style={{width: "35%"}}>
        <img src={img} alt="Logo" className="mb-3" style={{ width: "70%", display: "block", margin: "0 auto" }} />

        <div className="mb-3">
          <label htmlFor="name" className="text-black fw-bold">Your Name</label>
          <input {...register('name')}   onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your name" id="name" className="form-control mt-2 border border-secondary" />
        <small style={{color:"red"}}>{errors.name?.message}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="text-black fw-bold">Email</label>
          <input {...register('email')} type="email" placeholder="Enter your email" id="email" className="form-control mt-2 border border-secondary" />
        <small style={{color:"red"}}>{errors.email?.message}</small>
        </div>
        <div className="dropdown mb-3">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    {Condition || "The Condition"}
                </button>
                <ul className="dropdown-menu">
                    {["vendor","Buyer"].map((Condition) => (
                        <li key={Condition}>
                            <button type="button" className="dropdown-item" onClick={() => handleCondition(Condition)}>
                                {Condition}
                            </button>
                        </li>
                    ))}
                </ul>
                <small style={{ color: 'red' }}>{errors.Condition?.message}</small>
            </div>
        <div className="mb-3">
          <label htmlFor="password" className="text-black fw-bold">Password</label>
          <input {...register('pass')} type="password" id="password" placeholder="Enter your password" className="form-control mt-2 border border-secondary" />
        <small style={{color:"red"}}>{errors.pass?.message}</small>
        </div>

        <button type="submit" className="btn btn-primary w-100 rounded-4 mt-3">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
