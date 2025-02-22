import React from 'react'
import NavBar from '../component/NavBar'
import img2 from "../assets/3.jpg"
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigat=useNavigate()
  function go(){
    navigat("/product")
  }
  return (
    <div>
        <NavBar/>
        <div className='mt-4 d-flex justify-content-center'>
       <img src={img2} alt="" className='rounded-4' style={{width:"40%"}} />
       </div>
       <div className='mt-4 d-flex justify-content-center'>
       <button onClick={go} className="btn btn-primary  w-25 rounded-3 mt-3" >Get Proudact</button>
       </div>
       </div>
  )
}

export default Home