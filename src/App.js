import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React,{useState} from 'react';


function App() {
  const[dMode,setDMmode]=useState('dark')
  const toggleMode=()=>{
    if(dMode==='dark'){
      setDMmode('light');
    }
    else{
      setDMmode('dark');
    }
  }
  return (
  <>
  <Router>
    <Navbar title="Text Modifier" mode={dMode} toggleMode={toggleMode}/>
    <div className="container">
    <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <TextForm heading="Text Area"/>
        </Route>
    </Switch>
      </div>
  </Router>  
  </>
  );
}

export default App;
