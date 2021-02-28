import React from 'react';
import { NavLink } from 'react-router-dom';
const Card=(props)=>{
    return(
        <>
        <div className="col-md-4 col-12  mx-center">
        <div className="card" >
  <img className="card-img-top" src={props.imgSrc} alt="Card image cap" height="200px"/>
  <div className="card-body">
    <h5 className="card-title">{props.tittle}</h5>
    <p className="card-text">{props.comment}</p>
    <NavLink to="/contact" className="btn btn-primary">{props.btnName}</NavLink>
  </div>
</div>
</div>
        </>
    );
}
export default Card;