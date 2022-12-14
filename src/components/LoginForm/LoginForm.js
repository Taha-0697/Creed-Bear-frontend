import React, { useEffect } from 'react'
import {  Checkbox, Form, Input } from 'antd';
import { loginAsAdmin } from '../../slices/loginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from "./../Button/Button"
import classList from "./LoginForm.module.scss";

const LoginForm = () => {

    let {data,error,loading} = useSelector((state) => state.userlogin)
    const dispatch = useDispatch()
    const navigate = useNavigate()

  
  useEffect(() => {
    if (data) {
      navigate('/allusers')
    }
    
  }, [navigate, data])

    const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(loginAsAdmin(values))
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
  <div className={classList.login_wrapper}>
      <Form
        name="Login"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please input a valid admin email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm