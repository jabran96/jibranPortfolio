import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
const Common=(props)=>{
    return(
<>
<section id="header" className="d-flex align-items-center" >
<div className="container-fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto set">
<div className="row">
<div className="col-md-6  pt-5 pt-lg-0 order-2 order-md-1 oredr-lg-1 d-flex justify-content-center flex-column"

>
<h1>{props.name} 
    <strong className="brand-name" > Jibran Khan </strong></h1>
<h2 className="my-3">I am a talented developer of making websites</h2>
<div className="mt-3">
    <NavLink to={props.visit} className="btn-get-started" >{props.btnName}</NavLink>
</div>
</div>
<div className="col-md-6  order-1 order-md-2 order-lg-2 justify-content-center header-img" >
<img src={props.imgSrc} className="img-fluid animated img-size "   alt="not here" />
</div>
</div>
</div>
</div>
</div>
</section>
</>
    );
};
export default Common;