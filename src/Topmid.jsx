import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './css/Topmid.css';
const Topmid = () => {
    return (
        <div className="top__mid">
       
           <SearchIcon className="search__icon"/>
    <input type="text" className="search2" placeholder="Enter your fields here.. " />

        

    <button className="filter">SAVE FILTERS</button>
        </div>
    )
}

export default Topmid
