import React, { Component } from 'react'; 
import { withRouter } from "react-router-dom";
import styles from './Footer.css';
function Footer(props) {
    
    return(
        <div class="footer">
        <p>Footer</p>
      </div>       

    )
}

//<a href="/"> Logout  <span className="h3">{props.title || title}</span>
//{renderLogout()}</a>
export default withRouter(Footer);