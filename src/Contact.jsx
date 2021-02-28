import React, { useState } from 'react';
const Contact=()=>{
  const[data,setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    msg:''
  });
  const InputEvent=(event)=>{
const{name,value}=event.target;
event.preventDefault();
setData((preValue)=>{
  return{
    ...preValue,
    [name]:value,
  };
}); 
  }
  const formSubmit=(e)=>{
e.preventDefault();
alert(`My name is ${data.fullname},My phone number is ${data.phone},My email eddress is ${data.email} and my mesage is ${data.msg} 
Click on Ok to submit your data`);
  }
    return(
        <>
<div className="my-5">
<h1 className="text-center">Contact us</h1>
</div>
<div className="container mb-5">
<div className="row">
    <div className="col-md-6 col-10 mx-auto">
    <form onSubmit={formSubmit}>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="string" className="form-control" id="exampleFormControlInput1" 
  name="fullname"
  value={data.fullname}
  onChange={InputEvent}
  placeholder="Enter your name"
  id="validationCustom01" required
  />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" 
  name="phone"
  value={data.phone}
  onChange={InputEvent}
  placeholder="Enter your phone number"
  id="validationCustom01" required
  />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" 
  name="email"
  value={data.email}
  onChange={InputEvent}
  placeholder="name@example.com"
   id="validationCustomUsername" required
  />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
  name="msg"
  value={data.msg}
  onChange={InputEvent}
  ></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>
    </div>
</div>
</div>
</>
    );
};
export default Contact;