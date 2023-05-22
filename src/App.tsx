import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        const { allUsers } = res.data;
        console.log("res", res.data);
        setUsers(allUsers);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  const Userlog = users.map((usr: any, index) => {
    return (
      <p key={usr.index}>
        User:{index} == {usr.email}
      </p>
    );
  });
  return <div><h2>IDs List</h2> {Userlog}</div>;
};

export default App;
