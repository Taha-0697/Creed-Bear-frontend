import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Section from "./components/Section/Section";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from './pages/Login/LoginPage';
import ProtectedRoute from "./routes/ProtectedRoute";
import Users from './pages/User/Users';
import Edit from './pages/Edit/Edit';

const App = () => {
    return (
       <div>
     <Section>
        <Router>
          <Routes>
              <Route path='/' element={<LoginPage/>} />
              <Route path='/login' element={<LoginPage/>} />
              <Route element={<ProtectedRoute />}>
                <Route path='/createuser' element={<Dashboard/>} />           
                <Route path='/edituser/:id' element={<Edit/>} />           
                <Route path='/allusers' element={<Users />} />           
              </Route>
            </Routes>
        </Router>
     </Section>
       </div>
    );
};

export default App;
