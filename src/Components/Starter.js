import React from 'react'
import pic1 from './PIC1.png'
import pic2 from './PIC2.png'
import pic3 from './PIC3.png'
import "./Starter.css"
import { NavLink } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
import Layout from './Common/Layout'

function Starter() {
  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = `/login`; 
  //   navigate(path);
  // }
  return (
      <Layout>
    <div className='carouselExampleCaptions' >
      <div id="carouselExampleCaptions" className="carousel slide my-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic1} className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item">
      <img src={pic2} className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item">
      <img src={pic3} className="d-block w-100" alt="..."/>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>


    <div className="d-grid gap-2 col-6 mx-auto">
      
  <NavLink to="/login"  className="btn btn-success" type="button">WELCOME TO SURAKSHA</NavLink>
  
</div>

    </Layout>
  )
}

export default Starter
