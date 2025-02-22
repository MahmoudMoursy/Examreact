import React, { useContext, useEffect } from 'react'
import { usernamecontext } from '../context/usernamecontext';
import { NavLink } from 'react-router-dom'
import img from '../assets/images.png'

function NavBar() {
    const{username,setUsername}=useContext(usernamecontext)
    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("userData"));
      if (storedUser) {
          setUsername(storedUser.name);
      }
  }, []);
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#FFF4EEFF"}}>
  <div className="container-fluid">
 <img src={img} alt="Logo" className="mx-5  " style={{ width: "5%",}} />
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse ms-5 " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold fs-5 ">
        <li className="nav-item ">
          <NavLink className="nav-link" aria-current="page" to="/product">
            product
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">
            cart
          </NavLink>
        </li>
        <li className='text-black mt-2 ms-4' style={{paddingLeft:"450%"}} > {username}</li>
        </ul>
      
    </div>
  </div>
</nav>

</>
  )
}

export default NavBar