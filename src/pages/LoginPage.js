import React, { useEffect } from 'react'
import Header from './../components/Header/Header';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import { loginAsAdmin, loginAsUser } from './../slices/loginSlice';
import Error from './../components/Error/Error';


const LoginPage = () => {
  let {data,error,loading} = useSelector((state) => state.userlogin)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  
  useEffect(() => {
    if (data) {
      navigate('/createuser')
    }
    
  }, [navigate, data])

  
     const submitForm = (data) => {
       dispatch(loginAsUser(data))
    }

  return (
   <>
    <Header>Login User</Header>
      <form onSubmit={handleSubmit(submitForm)}>
      {error ? <Error>{error}</Error> : null}
      
      <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-input'
              {...register('email')}
              required
            />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
      <button type='submit' className='button' 
        disabled={data == null ? loading === true : loading === false}
      >
        Login
      </button>
    </form>
    
   </>
  )
}

export default LoginPage