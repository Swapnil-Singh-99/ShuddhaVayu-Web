import React ,{useContext} from "react"
import HomePage from "./components/homePage/homePage"
import AdminLoginPage from "./components/adminLoginPage/adminLoginPage"
import Dashboard from './components/dashboard/dashboard'
import UserContext from './ContextApi/User'
import Report from './components/SpecificDetails/Report'
import { Routes , Route } from "react-router-dom"


const App = () => {



  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/adminlogin" element={<AdminLoginPage />} />
    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/Report" element={<Report/>} />

   

  </Routes>
   
  );
};



export default App;