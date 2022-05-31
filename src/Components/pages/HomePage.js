import React from 'react'
import { Link } from 'react-router-dom'
import PIC4 from './PIC4.png'
import "./HomePageCSS.css"


export default function HomePage() {
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
       
        <button type="button" class="btn btn-secondary my-2 mx-5">Yesterday</button>
       
        <button type="button" class="btn btn-secondary my-2 mx-2">Today</button>
       
       
            

        </div>

        <div className='mapImages my-5'>
            <img src={PIC4} style={{width:"800px"}} alt="hospital" />
        </div>
       

        </div>
        <div className="data">
            <li>Active Cases:- <span>82</span></li>
            <li>Discharge:- <span>16</span></li>
            <li>Death:- <span>6</span></li>
        </div>
        </div>
    )
}