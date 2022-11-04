import classList from "./Login.module.scss";
import React, { useEffect } from 'react'
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import LoginForm from "../../components/LoginForm/LoginForm";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import { loginAsAdmin, loginAsUser } from '../../slices/loginSlice';
import Error from '../../components/Error/Error';


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


   const submitAdmin = (data) => {
       dispatch(loginAsAdmin(data))
    }

     const submitUser = (data) => {
       dispatch(loginAsUser(data))
    }

  return (
     <Section background="lightblue"  style={{textAlign:"center"}}>
        <div >
          <div className={classList.login_wrapper}>
           <div>
             <form className={classList.form} onSubmit={handleSubmit(submitAdmin)}>
                <LoginForm loginastxt={"Creeds And Bear"}/>
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

                <div className={classList.form_btn}>
                    <Button type="submit"
                       disabled={data == null ? loading === true : loading === false}
                    >Login</Button>
                </div>
             </form>            
           </div>

            {/* <div className={classList.line}>
                <div className={classList.vertical_line}></div> OR
                <div className={classList.vertical_line}></div> 
            </div>
            
            <div>
             <form className={classList.form} onSubmit={handleSubmit(submitUser)}>
                <LoginForm loginastxt={"Login As User"} />
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

                <div className={classList.form_btn}>
                    <Button type="submit">Login</Button>
                </div>
             </form>
            </div> */}
          </div>
        </div>
      </Section>
  )
}

export default LoginPage