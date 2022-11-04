import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Section from "./components/Section/Section";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from './pages/Login/LoginPage';
import Navbar from './components/Navbar/Navbar';
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
    return (
       <div>
         <Router>
       <Navbar/>
     <Section background={"Green"}>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route element={<ProtectedRoute />}>
            <Route path='/createuser' element={<Dashboard/>} />           
          </Route>
        </Routes>
     </Section>
    </Router>
       </div>
    );
};

export default App;
