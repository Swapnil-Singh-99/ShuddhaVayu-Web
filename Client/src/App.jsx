import React ,{useContext} from "react"
import LandPage from "./components/homePage/homePage"
import AdminLoginPage from "./components/adminLoginPage/adminLoginPage"
import Login from "./components/Login/Login"
import Dashboard from './components/dashboard/dashboard'
import UserContext from './ContextApi/User'
import Report from './components/SpecificDetails/Report'
import { Routes , Route } from "react-router-dom"


const App = () => {



  return (
    <Routes>
    <Route path="/" element={<LandPage />} />
    <Route path="/adminlogin" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/Report" element={<Report/>} />

   

  </Routes>
   
  );
};



export default App;