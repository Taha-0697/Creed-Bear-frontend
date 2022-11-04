import React, { useEffect } from 'react'
import {  Checkbox, Form, Input, InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classList from "./CreateUser.module.scss";
import { createUser } from './../../slices/UserSlice';
import Button from "./../Button/Button"


const CreateUser = () => {
    let {userdata,error,loading} = useSelector((state) => state.userdetails)
    const dispatch = useDispatch()
    const navigate = useNavigate()    

  const onFinish = (values) => {
    dispatch(createUser(values));
    if (values) {
      navigate('/allusers')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
     <div className={classList.login_wrapper}>
      <Form
        name="User"
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
          label="First Name"
          name="first_name"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

             <Form.Item
          label="Last Name"
          name="last_name"
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please input a valid email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item
          label="Avatar"
          name="avatar"
          
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="submit">
            Create New User
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CreateUser