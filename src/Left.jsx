import React from 'react'
import './css/Left.css';
import HomeIcon from '@material-ui/icons/Home';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleIcon from '@material-ui/icons/People';
import StarIcon from '@material-ui/icons/Star';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const Left = () => {
    return (
        <>
        <div className="left">
            <div>
               
<div className="left__items">
    <div className="left__item1">
    <HomeIcon className="icon"/>
<h3 className="h3">Add Keywords</h3>
    </div>
<div className="left__item2">
<PeopleIcon className="icon"/>
<h3 className="h3">Matches</h3>
</div>
<div className="left__item2">
<FileCopyIcon className="icon"/>
<h3 className="h3">Manage sources</h3>
</div>
<div className="left__item2">
<FileCopyIcon className="icon"/>
<h3 className="h3">Integration</h3>
</div>
<div className="left__item2"><FileCopyIcon className="icon"/>
<h3 className="h3">Alerts</h3></div>

</div>
<div className="set"><StarIcon className="icon"/>
<h3 className="h3">Settings</h3>
<ArrowDropDownIcon className="x"/>
</div>


<h5 className="bill">Billings</h5>
            </div>
        </div>
        </>
    )
}

export default Left
