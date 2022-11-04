import React, { useEffect, useState } from 'react'
import classList from "./LoginForm.module.scss"
import Header from './../Header/Header';

const LoginForm = ({loginastxt}) => {
    
  return (
        <div className={classList.wrapper}>
           <Header>{loginastxt}</Header>               
        </div>
  )
}

export default LoginForm