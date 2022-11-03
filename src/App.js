import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Section from "./components/Section/Section";
import Dashboard from "./pages/Dashboard";
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './pages/routes/ProtectedRoute';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
        <Router>
       <Navbar/>
     <Section>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route element={<ProtectedRoute />}>
            <Route path='/createuser' element={<Dashboard/>} />           
          </Route>
        </Routes>

     </Section>
    </Router>
    );
};

export default App;
