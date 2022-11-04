import React, { useState } from 'react'
import classList from "./Dashboard.module.scss"
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import Paragraph from '../../components/Paragraph/Paragraph';
import Button from '../../components/Button/Button';
import { NavLink } from 'react-router-dom';
import { logout } from '../../slices/loginSlice';
import { useForm } from 'react-hook-form';
import { createUser } from './../../slices/UserSlice';
import Section from '../../components/Section/Section';
import UserList from '../../components/UserList/UserList';

const Dashboard = () => {
 let { data } = useSelector((state) => state.userlogin)
 let { userdata,loading,error  } = useSelector((state) => state.userdetails)

const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const submitForm = (data) => {
        dispatch(createUser(data))
      }
      const [user, setUser] = useState(
      userdata
    )
    return (
  <> 
  <div className={classList.dashboard_wrapper}>
  <Header> Welcome {data.user.first_name} {data.user.last_name} to Dashboard </Header>
    {data ? (
            <Button onClick={() => dispatch(logout())}>
              Logout
            </Button>
          ) : (
            <NavLink className='button' to='/'>
              Login 
            </NavLink>
          )}
  </div>
<Section>
            <div className={classList.dashboard_user}>
            <Header>
                Create a new User
            </Header>
            <div>
               <form className={classList.form} onSubmit={handleSubmit(submitForm)}>
                  <div className={classList.form_group}>
                        <label htmlFor='first_name'>First Name</label>
                        <input
                        type='first_name'
                        className={classList.form_input}
                        {...register('first_name')}
                        required
                        />
                </div>

                <div className={classList.form_group}>
                        <label htmlFor='last_name'>Last Name</label>
                        <input
                        type='last_name'
                        className={classList.form_input}
                        {...register('last_name')}
                        required
                        />
                </div>

                 <div className={classList.form_group}>
                        <label htmlFor='email'>Email</label>
                        <input
                        type='email'
                        className={classList.form_input}
                        {...register('email')}
                        required
                        />
                </div>

                 <div className={classList.form_group}>
                        <label htmlFor='password'>Password</label>
                        <input
                        type='password'
                        className={classList.form_input}
                        {...register('password')}
                        required
                        />
                </div>

                <div className={classList.form_group}>
                        <label htmlFor='avatar'>Avatar</label>
                        <input
                        type='avatar'
                        className={classList.form_input}
                        {...register('avatar')}
                        required
                        />
                </div>

                <div className={classList.form_btn}>
                    <Button type="submit"                   
                    >Create New User</Button>
                </div>
             </form>  
            </div>
          </div>
</Section>
<UserList
/>
    </>
  )
}

export default Dashboard