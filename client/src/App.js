import React,{useState,useEffect} from 'react';
import Navbr from './components/Navbr'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Bin from './components/Bin';


const Routing = ()=>{

  return(
    <Switch>
      <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/bin">
          <Bin/>
        </Route>
    </Switch>
  )
}



function App() {
  return (
    <BrowserRouter>
        <Navbr />
        <Routing />
    </BrowserRouter>

  );
}

export default App;
