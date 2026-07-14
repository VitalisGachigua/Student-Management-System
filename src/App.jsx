import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
 function App(){
  return(
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/students" element={<Students/>}/>
          <Route path="/add-students" element={<AddStudent/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/about" element={<About/>}/>

    </Routes>
    
    
    </BrowserRouter>
  );
 }
 export default App;