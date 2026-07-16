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
          status : "Active",
      },
      {
          id: 2,
          name :"James Mwangi",
          course :"Aeronotical Engineer",
          status : "Active"
      },
      {
          id: 3,
          name: "Yasmin Namir",
          course :"Computer Science",
          status : "Active"
      },
      {
          id: 4,
          name :"Ruth Kagia",
          course:"Economics",
          status:"Active"
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
         element={<Students students={students} setStudents={setStudents}/>}
         />
          <Route
           path="/add-students"
            element={<AddStudent students ={students} setStudents={setStudents}/>}/>
           <Route path="/dashboard" element={<Dashboard students={students}/>}/>
           <Route path="/about" element={<About/>}/>

    </Routes>
    
    
    </BrowserRouter>
  );
 }
 export default App;