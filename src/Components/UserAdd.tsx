import React, { useState } from "react";

const UserAdd = () => {
  const  [email, setEmail] = useState('')
  const  [password, setPassword] = useState('')

  const SubBtn=() =>{
    
  }
  return (
    <div className="login-page" >
      <form >
      <div>
        <input 
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
          setEmail(e.target.value);
          }}
          placeholder="username"
        />
      </div>
      <div>
        <input 
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
          setPassword(e.target.value);
          }}
          placeholder="password"
          autoComplete="yes"
        />
      </div>
      <button  type="button" onClick={SubBtn}>Submit</button>
      </form>
    </div>
  );
};

export default UserAdd;
