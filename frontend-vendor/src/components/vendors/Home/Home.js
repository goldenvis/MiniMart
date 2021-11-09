import React,{ useEffect , useState} from 'react';
import { withRouter, Route,Switch,useLocation } from 'react-router-dom';
import PerfectScrollbar from "perfect-scrollbar";
import DemoNavbar from "../../../components/Navbars/DemoNavbar.js";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import FixedPlugin from "../../../components/FixedPlugin/FixedPlugin"; 
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../../constants/apiConstants';
import axios from 'axios';
import styles  from "./Home.css"

import routes from "../../../components/routes.js";

var ps;
function Home(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  const [state , setState] = useState({
    showForm: false
})

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
      
      <div class="sidebar">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      
  
<a href="/Vendortables"><i class="fa fa-fw fa-table"></i> Tables</a>
  <a href="/vendorforms"><i class="fa fa-fw fa-plus-square-o"></i> Vendor forms</a>
  <a href="/login"><i class="fa fa-fw fa-plus-square-o"></i> Login</a>
  <a href="/vendorupdate"><i class="fa fa-user-o"></i> Vendor Update</a>
  <h1>Manage Application</h1>
  <h2>User: {props.match['path']}</h2>
  <button  onClick={() => setState({showForm: true}) }>Add offers</button>
  <button>Change Existing Application</button>
        <button>Remove Application</button>
        {state.showForm ? showForm() : null}
</div>
    
    )
}

export default withRouter(Home);