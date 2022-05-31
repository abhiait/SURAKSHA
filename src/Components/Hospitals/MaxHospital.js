import React from 'react'
import "./Hospital.css"
import { Link } from 'react-router-dom'
import max1 from "./max1.jpg"
import max2 from "./max2.jpg"
import max3 from "./max3.jpg"

export default function MaxHospital() {
  return (
    <div className='Hospitals'>
        <div className='LeftLists'>
            
                <ul className='Hospital'>
                <li className='btn btn-info' >
                    <Link to="/MaxHospital">
                    Max Super Speciality Hospital</Link>
                    </li>
                    <li >
                      <Link to="/GandhiHospital">
                    Indira Gandhi Hospital</Link>
                    </li>
                    <li>
                      <Link to="/SardarHospital">
                    Sardar Vallabhbhai Patel Hospital</Link>
                    </li>
                    <li>
                      <Link to="/LokNayakHospital">
                    Lok Nayak Hospital </Link>
                    </li>
                    <li >
                      <Link to="/GangaRAmHospital"> 
                    Sir Ganga Ram Hospital </Link>
                    </li>
                </ul>

            
        </div>
<div className="RightSide">
    

        <div className='datesColumn'>
        <button  type="button" class="btn btn-secondary my-2 mx-2">Day Before Yesterday</button>
        <div className='mapImages my-5'>
            <img src={max1} style={{width:"800px"}} alt="hospital" />
        </div>
        <button type="button" class="btn btn-secondary my-2 mx-5">Yesterday</button>
        <div className='mapImages my-5'>
            <img src={max2} style={{width:"800px"}} alt="hospital" />
        </div>
        <button type="button" class="btn btn-secondary my-2 mx-2">Today</button>
        <div className='mapImages my-5'>
            <img src={max3} style={{width:"800px"}} alt="hospital" />
        </div>
       
            

        </div>
        

        </div>
        <div className="data">
            <li>Active Cases:- <span>75</span></li>
            <li>Discharge:- <span>26</span></li>
            <li>Death:- <span> 12</span></li>
        </div>
        </div>
  )
}
