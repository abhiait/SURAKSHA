import React from 'react'
import  {Link}  from 'react-router-dom'

function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><strong>Suraksha</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hospitals
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/MaxHospital">Max Super Speciality Hospital</Link></li>
            <li><Link className="dropdown-item" to="/GandhiHospital">Indira Gandhi Hospital</Link></li>
            <li><Link className="dropdown-item" to="/SardarHospital">Sardar Vallabhbhai Patel Hospital</Link></li>
            <li><Link className="dropdown-item" to="/LokNayakHospital">Lok Nayak Hospital</Link></li>
            <li><Link className="dropdown-item" to="/GangaRAmHospital">Sir Ganga Ram Hospital</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/MoreList">Something else here</Link></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled"  href="/">Disabled</a>
        </li> */}
      </ul>
        <Link to="/login"> 
        <button className="btn btn-outline-primary mx-1" >Log In</button>
        </Link>
        <Link to="/register"> 
        <button className="btn btn-outline-success mx-1" >Sign Up</button>
        </Link>

    </div>
  </div>
</nav>
    
  )
}

export default Navbar
