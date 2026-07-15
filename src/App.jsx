import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import { useState } from "react";
 function App(){
  const [students, setStudents]=useState([
      {
          id: 1,
          name: "Vitalis Matheri",
          course: "Medicine",
          Status : "Active",
      },
      {
          id: 2,
          name :"James Mwangi",
          course :"Aeronotical Engineer",
          Status : "Active"
      },
      {
          id: 3,
          name "Yasmin Namir",
          course :"Computer Science",
          Status : "Active"
      },
      {
          id: 3,
          name :"Ruth Kagia",
          course:"Economics",
          Status:"Active"
      }
  
      ]);
  return(
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route
         path="/" 
         element={<Home/>}
         />
         <Route 
         path="/students" 
         element={<Students students={students}/>}
         />
          <Route
           path="/add-students"
            element={<AddStudent students ={students} setStudents={setStudents}/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/about" element={<About/>}/>

    </Routes>
    
    
    </BrowserRouter>
  );
 }
 export default App;