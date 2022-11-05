import React, { useEffect, useState } from 'react'
import {  Checkbox, Form, Input, InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from "./../Button/Button"
import { updateUser } from '../../slices/UserSlice';
import { getUserById } from './../../slices/UserSlice';
import classList from './EditUser.module.scss';

const EditUser = () => {
   
    let {userdata,error,loading} = useSelector((state) => state.userdetails)
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()    
    const {id} = useParams()

    useEffect(() => {
        if (id){
            dispatch(getUserById(id))
            setUser(userdata)
        }
    }, []);
    
    console.log(user);


  const onFinish = (values) => {

    if (values) {
      navigate('/allusers')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
       <div>
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
            Update User
          </Button>
       

           <Button 
            type="reset"
          >
            Reset
          </Button>
          
          <Button 
            onClick={()=>{
                navigate("/allusers")
            }}
          >
            Cancel
          </Button>

        </Form.Item>
      </Form>
    </div>
  )
}

export default EditUser