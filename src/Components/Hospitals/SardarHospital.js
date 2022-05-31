import React from 'react'
import "./Hospital.css"
import { Link } from 'react-router-dom'
import sardar1 from "./sardar1.jpg"
import sardar2 from "./sardar3.jpg"


export default function SardarHospital() {
  return (
    <div className='Hospitals'>
    <div className='LeftLists'>
        
            <ul className='Hospital'>
            <li>
                    <Link to="/MaxHospital">
                    Max Super Speciality Hospital</Link>
                    </li>
                    <li  >
                      <Link to="/GandhiHospital">
                    Indira Gandhi Hospital</Link>
                    </li>
                    <li className='btn btn-info'>
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
    <button to="/" type="button" class="btn btn-secondary my-2 mx-2">Day Before Yesterday</button>
    <div className='mapImages my-5'>
        <img src={sardar1} style={{width:"800px"}} alt="hospital" />
    </div>

    <button type="button" class="btn btn-secondary my-2 mx-5">Yesterday</button>
    <div className='mapImages my-5'>
        <img src={sardar1} style={{width:"800px"}} alt="hospital" />
    </div>

    <button type="button" class="btn btn-secondary my-2 mx-2">Today</button>
    <div className='mapImages my-5'>
        <img src={sardar2} style={{width:"800px"}} alt="hospital" />
    </div>

   
        

    </div>
    
    </div>
    <div className="data">
        <li>Active Cases:- <span>78</span></li>
        <li>Discharge:- <span>26</span></li>
        <li>Death:- <span>15</span></li>
    </div>
    </div>
  )
}
