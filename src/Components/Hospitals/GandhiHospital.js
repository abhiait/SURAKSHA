import React from 'react'
import "./Hospital.css"
// import PIC4 from './PIC4.png'
import gandhi1 from "./gandhi1.jpeg"
import gandhi2 from "./gandhi2.jpeg"
import gandhi3 from "./gandhi3.jpeg"
import { Link } from 'react-router-dom'

export default function GandhiHospital() {
  return (
    <div className='Hospitals'>
        <div className='LeftLists'>
            
                <ul className='Hospital'>
                    <li>
                    <Link to="/MaxHospital">
                    Max Super Speciality Hospital</Link>
                    </li>
                    <li className='btn btn-info' >
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
        <button to="/" type="button" class="btn btn-secondary my-2 mx-2">Day Before Yesterday</button>
        <div className='mapImages my-5'>
            <img src={gandhi1} style={{width:"800px"}} alt="hospital" />
        </div>
        <button type="button" class="btn btn-secondary my-2 mx-5">Yesterday</button>
        <div className='mapImages my-5'>
            <img src={gandhi2} style={{width:"800px"}} alt="hospital" />
        </div>
        <button type="button" class="btn btn-secondary my-2 mx-2">Today</button>
        <div className='mapImages my-5'>
            <img src={gandhi3} style={{width:"800px"}} alt="hospital" />
        </div>
       
            

        </div>
       

        </div>
        <div className="data">
            <li>Active Cases:- 66</li>
            <li>Discharge:- 24</li>
            <li>Death:- 11</li>
        </div>
        </div>
  )
}
