import React from 'react';
import { NavLink} from "react-router-dom";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
const Abbout=()=>{
    return(<>
 <div className="container-fluid nav-bg">
    <div className="row d-flex justify-content-center flex-column">
        <div className="col-10 mx-auto my-4 d-flex center justify-content-center flex-column"> 
        <div className="col-12 justify-content-center  center" >
<img src="images/jibi.jpg" className="img-fluid jibi-img animated "   alt="not here" />
</div>
            <h1>JABRAN KHAN</h1>
            <h2>MERN STAK WEB DEVELOPER</h2>
            <div className="py-2">
            
             
          <a className="btn-get-started" href="https://drive.google.com/file/d/1MiyH_NhSC_NfGijXmwV2eLM4310Px1dt/view?usp=sharing">View Resume</a>
              </div>
            
        </div>
         <hr/>
        <div className="center col-12 mt-3 mb-2">
        <h1 className="justify-content-center ">Skills</h1>
        </div>
        <div className="col-10 mx-auto d-flex justify-content-center mb-5 mbl-veiw"> 
        
         <div className="col-md-4 mr-3">
<h7>HTML</h7>
<div className="progress mb-2">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h7>Java Script</h7>
<div className="progress mb-2">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h7>MongoDb</h7>
<div className="progress mb-2">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h7>React-Bootstrap</h7>
<div className="progress mb-2">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
         </div>
         <div className="col-md-4 mr-3">
         <h7>React.js</h7>
<div className="progress mb-2">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h7>Node.js</h7>
<div className="progress mb-2">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h7>Bootstrap</h7>
<div className="progress mb-2">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h7>Mongoose</h7>
<div className="progress mb-2">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
         </div>
         <div className="col-md-4">
        
         <h7>css3</h7>
<div className="progress mb-2">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h7>Express.js</h7>
<div className="progress mb-2">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h7>Metrial-UI</h7>
<div className="progress mb-2">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "69%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h7>Website Design</h7>
<div className="progress mb-2">
  <div className="progress-bar bg-success" role="progressbar" style={{width: "88%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
         </div>
</div>
<div className="col-10 mx-auto center mb-3"> 
<NavLink to=""><WhatsAppIcon className="icon"/></NavLink>
<NavLink to=""><FacebookIcon className="fbIcon"/></NavLink>
<NavLink to=""><TwitterIcon className="twtIcon"/></NavLink>
<NavLink to=""><InstagramIcon className="instaIcon"/></NavLink>
<GitHubIcon className="gitIcon"/>


</div>
    </div>
</div>
    </>
    );

}
export default Abbout;