import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import UserList from '../../components/UserList/UserList';

const Users = () => {
  return (
    <>
        <Navbar head="All Users"/>
        <UserList/>
    </>
  )
}

export default Users