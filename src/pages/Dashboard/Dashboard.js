import React from 'react'
import CreateUser from '../../components/CreateUser/CreateUser';
import Navbar from './../../components/Navbar/Navbar';

const Dashboard = () => {
   
    return (
      <> 
        <Navbar head="Create New User"/>
        <CreateUser/>
        </>
  )
}

export default Dashboard