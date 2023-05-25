import axios from "axios";
import { useState, useEffect } from "react";

const AxiosMainFn = () =>{
    const [users, setUsers] = useState([]);

    const  Axiosfn:any =() =>{
      axios.get("http://localhost:3001/users")
      .then((res) => {
        const { allUsers } = res.data;
        console.log("res", res.data);
        setUsers(allUsers);
      })
      .catch((err) => {
        console.log("err", err);
      });
    }
    useEffect(() => {
      Axiosfn();
    },[]);
    const Userlog = users.map((usr: any, index) => {
      return (
        <p key={usr.id}>
          User:{index} == {usr.email}
        </p>
      );
    });
    return (
        <div> {Userlog}</div>
    )
}
export default AxiosMainFn;