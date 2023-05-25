
import "./App.css";
import AxiosMainFn from "./Components/Axios";
import UserAdd from "./Components/UserAdd";


const App = () => {
 
  return (
    <div className="App">
      <h2>IDs List</h2>
      <br></br>
     
      <AxiosMainFn/>
      <UserAdd />
    </div>
  );
};

export default App;
