import React from 'react'
import './css/Mid.css';

import Midmid from './Midmid';
import Midtop from './Midtop';
import Topmid from './Topmid';
const Mid = () => {
    return (
        <div className="mid">
            
            {/* top mid section */}
            <Midtop/>
            {/* mid top */}
            <Topmid/>
            <div className="text"> 
            <h3>The terms you are tracking</h3>
             <p>The data will refresh every 5 minutes</p>
            </div>
           
            {/* last sec */}
            <Midmid/>
            
            <button className="res">VIEW RESULTS</button>
        </div>
    )
}

export default Mid
