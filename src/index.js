import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter} from "react-router-dom";
import './index.css';
ReactDom.render(
<>
<BrowserRouter>
<App/>
</BrowserRouter>

</>
    ,
    document.getElementById("root")
);