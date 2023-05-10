import './App.css';
import NotFound from "./components/Error";

import React, {Fragment} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" ;
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="*" element = {<NotFound/>}/>
        </Routes>
      </Router>
    </Fragment> 
  );
}

export default App;
