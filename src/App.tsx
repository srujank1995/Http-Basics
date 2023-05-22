import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

const  App = () => {

  useEffect(()=>{
    axios.get("http://localhost:3001/users").then(
      (res) =>{console.log("res", res)}

    ).catch((err) =>{console.log("err", err)} )      
  },[])
  return (
    <div>
      HTTPs
    </div>
  );
}

export default App;
