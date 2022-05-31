// import Login from "./Components/pages/LoginPage";
// import Navbar from "./Components/Common/Navbar";
import Starter from "./Components/Starter";
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import LandingPage from './Components/pages/LandingPage'
import Login from './Components/pages/LoginPage'
import RegisterPage from './Components/pages/RegisterPage'
import ForgetPasswordPage from './Components/pages/ForgetPasswordPage'
import HomePage from './Components/pages/HomePage'
import GandhiHospital from "./Components/Hospitals/GandhiHospital";
import GangaRamHospital from "./Components/Hospitals/GangaRamHospital";
import LokNayakHospital from "./Components/Hospitals/LokNayakHospital";
import SardarHospital from "./Components/Hospitals/SardarHospital";
import MaxHospital from "./Components/Hospitals/MaxHospital";


// const HeaderStyle = {
//   width: "100%",
//   height: "100vh",
//   background: URL ('https://etimg.etb2bimg.com/photo/82272260.cms'),
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover"
// }



function App() {
  return (
    
    
     
    <Router>
            
            
                <Switch>
                    {/* <Route exact path="/" component={ LandingPage } /> */}
                    {/* <Route exact path="/" component={ Navbar } /> */}
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Starter} />
                    
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/forget-password" component={ForgetPasswordPage} />
                </Switch>
                    <Route exact path="/Homepage" component={HomePage} />
                    <Route exact path="/GandhiHospital" component={GandhiHospital} />
                    <Route exact path="/GangaRamHospital" component={GangaRamHospital} />
                    <Route exact path="/LokNayakHospital" component={LokNayakHospital} />
                    <Route exact path="/SardarHospital" component={SardarHospital} />
                    <Route exact path="/MaxHospital" component={MaxHospital} />

            
        </Router>  
       
        
    
  );
}

export default App;
