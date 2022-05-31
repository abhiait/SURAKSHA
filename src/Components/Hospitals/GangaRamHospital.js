import React from 'react'
import "./Hospital.css"
import GangaRam1 from "./gangaram1.jpg"
import GangaRam2 from "./gangaram2.jpg"
import GangaRam3 from "./gangaram3.jpg"
// import GangaRam2 from ""
// import GangaRam3 from ""
import { Link } from 'react-router-dom'

export default function GangaRamHospital() {
    // const Location = () => {
    //     const [imageClicked, setImageClicked] = useState({
    //       first: false,
    //       second: false,
    //       ground: false
    //     });
    //     const onClickHandler = (order) => {
    //       setImageClicked((prevState) => ({
    //         ...prevState,
    //         [order]: !prevState[order]
    //       }));
    //     };
    
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
                    <li className='btn btn-info' >
                      <Link to="/GangaRAmHospital"> 
                    Sir Ganga Ram Hospital </Link>
                    </li>
                </ul>

            
        </div>
<div className="RightSide">
    

        <div className='datesColumn'>
        <button  type="button" class="btn btn-secondary my-2 mx-2">Day Before Yesterday</button>
        <div className='mapImages my-5'>
            <img src={GangaRam1} style={{width:"800px"}} alt="hospital" />
        </div>
        <button type="button" class="btn btn-secondary my-2 mx-5">Yesterday</button>
        <div className='mapImages my-5'>
            <img src={GangaRam2} style={{width:"800px"}} alt="hospital" />
        </div>
        <button type="button" class="btn btn-secondary my-2 mx-2">Today</button>
        <div className='mapImages my-5'>
            <img src={GangaRam3} style={{width:"800px"}} alt="hospital" />
        </div>
       
            

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
