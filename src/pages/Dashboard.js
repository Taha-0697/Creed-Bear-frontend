import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header/Header';
import Paragraph from '../components/Paragraph/Paragraph';
import Button from './../components/Button/Button';
import { NavLink } from 'react-router-dom';
import { logout } from '../slices/loginSlice';

const Dashboard = () => {
 const { data } = useSelector((state) => state.userlogin)
const dispatch = useDispatch()

  return (
  <> {data ? (
            <Button onClick={() => dispatch(logout())}>
              Logout
            </Button>
          ) : (
            <NavLink className='button' to='/'>
              Login 
            </NavLink>
          )}
       <Header> Welcome {data.user.first_name} {data.user.last_name} to Dashboard </Header>
            <Paragraph>
                Create a new User
            </Paragraph>
    </>
  )
}

export default Dashboard