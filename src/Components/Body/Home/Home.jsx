import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div className="navstdhome">
        <div className="navfirst">
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <h5>ACADEMICS</h5>
        </div>
        <div className="navmid">
          <Link to={'/home'}><h6 id='homeactive'>HOME</h6></Link>
          <h6>PAGES</h6>
          <h6>COURSES</h6>
          <h6>RESEARCH</h6>
          <h6>NEWS</h6>
          <h6>GALLERY</h6>
          <h6>CONTACT</h6>
        </div>
        <div className="navlast">
          <Link to='/studentlogin'><button>LOGIN</button></Link>
        </div>
    </div>
    <div className="home-main">
      <div className="home-main-left">
       <div className="clg-name">
       <h1>UNIVERSITY OF CALICUT</h1><div className='head'>Tirur-Calicut Rd,Thenhipalam</div>
        <Link className='home-contctus-btn'>Contact Us</Link>
        <Link className='home-aboutus-btn'>About Us</Link>
       </div>
        
      </div>
      <div className="home-main-right">
        <div className="home-actype-main-card">
          <h3></h3>
          <div className='home-btns'><Link className="home-admin-btn" to='/adminlogin'>Admin</Link></div>
          <div className='home-btns'><Link className="home-staff-btn" to='/stafflogin'>Staff</Link></div>
          <div><Link className="home-student-btn" to='/studentreg'>Student</Link></div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Home
