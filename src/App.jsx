import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import AddEmp from "./components/AddEmp";
//import ViewEmp from "./components/ViewEmp";
import ListEmp from "./components/ListEmp";
import "./App.css";
import { useState, createContext } from "react";

const listContext = createContext();


const  App = () => {
  const [employeeList, setEmployeeList] = useState([]);

  return (
    <>
    <listContext.Provider value={{employeeList,setEmployeeList}}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListEmp/>}></Route>
        <Route path="/add" element={<AddEmp/>}></Route>
      </Routes>
    </Router>
    </listContext.Provider>
    </>
  );
};

export {listContext}

export default App;
