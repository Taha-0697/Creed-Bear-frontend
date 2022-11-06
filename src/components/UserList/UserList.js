import React, { useEffect, useState } from 'react'
import { Table, Space, Collapse, Form, Input } from 'antd';
import { getAllUsers, removeUserById } from '../../slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from './../Button/Button';
import { createUser, updateUser } from './../../slices/UserSlice';
import { useNavigate, useParams } from 'react-router-dom';

const UserList = () => {
    const { Panel } = Collapse;
    let [flag,setFlag]= useState({
        status: false,
        data: null
    });
    const { userdata,loading,error  } = useSelector((state) => state.userdetails)
    const userData =  userdata.data
    const dispatch = useDispatch()
    const navigate = useNavigate()   
    const [form] = Form.useForm();
    const {id} = useParams()

    useEffect(() =>{
        dispatch(getAllUsers())
    },[])

    const onFinish = (values) => {
//        console.log(values)
        if(flag.status === false){
            setFlag({...flag , status:true})
            dispatch(createUser(values));
            if (values) {
                navigate('/createUser')
            }
        }else if(flag.status=== true){

            dispatch(updateUser(values));
             if (values) {
                navigate('/editUser')
            }
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
  
    const col = [
            {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            }, {
                title: 'First Name',
                dataIndex: 'first_name',
                key: 'first_name',
            },
            {
            title: 'Last Name',
                dataIndex: 'last_name',
                key: 'last_name',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
               {
                title: 'Avatar',
                dataIndex: 'avatar',
                key: 'avatar',
            },
            {
                title: 'Action',
                dataIndex: 'Action',
                key: 'Action',
                render: (_, record) => {
                    return (
                        <Space size="middle">                   
                            <button
                             onClick={() => {             
                                            setFlag({...flag , status: true , data: record})
                                            form.setFieldsValue({
                                                id: record.id,
                                                first_name: record.first_name,
                                                last_name: record.last_name,
                                                email: record.email,
                                                avatar: record.avatar
                                            });
                                        }}
                            >Edit</button>
                            
                            <button
                                onClick={()=>{
                                    const id = record.id 
                                    dispatch(removeUserById(id))
                                }}
                                key = {record.key}
                            >Delete</button>
                        </Space>
                    )
                }
            }
        ]

    return (
        <>
        <Collapse defaultActiveKey={["1"]}>
            <Panel key='1' header='Creeds And Bear'>
                <Form
                    form={form}
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
                    name="id"
                    hidden
                    >
                    <Input />
                    </Form.Item>

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
                        {flag.status === false ? 'Create' : 'Update'}
                    </Button>

                    </Form.Item>
                </Form>
            </Panel>
        </Collapse>

                <Table  
                    loading={loading}
                    columns={col} 
                    dataSource= {
                    userData?.map((a,item)=>{    
                            return {
                                key:item,
                                id:a.id,
                                first_name: a.first_name,
                                last_name: a.last_name,
                                email: a.email,         
                                avatar:a.avatar    
                            }
                        })
                    }
                />  
    </>
  )
}

export default UserList