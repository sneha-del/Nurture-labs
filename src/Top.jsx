
import React from 'react'
import './css/Top.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Avatar } from '@material-ui/core';
import Midtop from './Midtop';
import Topmid from './Topmid';
const Top = () => {
    return (
        <>
        <div className="top">
            <div className="search">
                <div className="first"> 
                           <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqOOtsU6CO0CUmIgpBNsTlklBXjrl3d_WxA&usqp=CAU" alt="img1"/>

                <h2>Term<span>Monitor</span></h2></div>

                <h1 className="h1">KEYWORDS</h1>
                <div className="submit">  <input  type="text" className="search" placeholder="SUBMIT " /><ArrowForwardIcon className="arrow"/></div>
              

            <Avatar className="avatar" src='/avatar.jpg'/>
            </div>
        </div>
        {/* <Midtop/> */}
        {/* <Topmid/> */}
        </>
    )
}

export default Top
