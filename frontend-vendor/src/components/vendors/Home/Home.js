import React,{ useEffect , useState} from 'react';
import { BrowserRouter as Router, withRouter, Route,Switch,useLocation } from 'react-router-dom';
import PerfectScrollbar from "perfect-scrollbar";
import DemoNavbar from "../../../components/Navbars/DemoNavbar.js";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import FixedPlugin from "../../../components/FixedPlugin/FixedPlugin"; 
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../../constants/apiConstants';
import Navbar from '../../../components/Sidebar/Navbar';
import axios from 'axios';
import styles  from "./Home.css"
import PrivateRoute from '../../../components/utils/PrivateRoute';

import routes from "../../../components/routes.js";

//import { HiMenu } from 'react-icons/hi'
//import {BrowserRouter as Router ,  Routes } from 'react-router-dom';
import Contact from '../../../components/pages/Contact';
import About from '../../../components/pages/About';
import Additems from '../../../components/pages/Additems';
import { HiMenu } from 'react-icons/hi'

var ps;
function Home(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  const [state , setState] = useState({
    showForm: false
})

function renderLogout() {
  if(props.location.pathname === '/home'){
      return(
         
              <button className="btn btn-danger button2" style={{
                position: 'absolute',
                top: '20px',
                right: '60px',
              }} onClick={() => handleLogout()}>Logout</button>
          
      )
  }
}

function handleLogout() {
  localStorage.removeItem(ACCESS_TOKEN_NAME)
  props.history.push('/login')
}

const [showNav , SetshowNav] = useState(false)

  console.log(props);
  console.log(props.email);
    useEffect(() => {
        axios.get('/user/login', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }
        })
        .catch(function (error) {
          redirectToLogin()
        });
      })
    function redirectToLogin() {
    props.history.push('/login');

    }
  /*React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
*/

  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };


  const showForm = () => {
    return (
      <div> 
     <form id= "add-app">
 
          <label>Application Name : </label>
          <input type="text"> </input>
 
          <label> id : </label>
          <input type="text" ></input>
 
          <label>Server details : </label>
          <input ></input>
 
          <button>Create</button>
       </form>
       </div>
      );
  };
    
    return(
      

      <>
      <Router>
      
        <header>
          <HiMenu color="white" style={{
      position: 'absolute',
      top: '20px',
      right: '10px',
    }} onClick={() => SetshowNav(!showNav)}/>
          <a href="/"> {renderLogout()}</a>
        </header>

        <Navbar show={showNav}/>

        <div className="main">
          <Switch>
          <PrivateRoute path="/about">
              <About/>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact/>
            </PrivateRoute>
            <PrivateRoute path="/additemsform">
              <Additems/>
            </PrivateRoute>
          </Switch>
        </div>
      
      </Router>
      
    </>
    
    )
}

export default withRouter(Home);