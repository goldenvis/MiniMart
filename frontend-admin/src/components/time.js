import React, { useState, useEffect, Component } from 'react';
import axios from 'axios'

const Time = () =>{
    const [currentTime, setCurrentTime] = useState(0);
    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
          setCurrentTime(data.time);
        });
      }, []);
    return (
        <div>
       
  
          ... no changes in this part ...
  
          <p>The current time is {currentTime}.</p>
    
      </div>
    );
  }
export default Time