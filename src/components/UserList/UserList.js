import { Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paragraph from '../Paragraph/Paragraph';
import { getAllUsers, removeUserById, updateUser, createUser } from './../../slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import classList  from './UserList.module.scss';


const { Column, ColumnGroup } = Table;

const UserList = () => {
     const { userdata,loading,error  } = useSelector((state) => state.userdetails)
     const [userdetails,setUserdetails] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() =>{
        dispatch(getAllUsers())
    },[])
  
    
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
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: (_, record) => {
                return (
                    <Space size="middle">
                        <button
                            onClick={()=>{
                                setUserdetails({...userdetails , record})
                              navigate("/edituser/" + record.id)
                            }}
                            key = {record.key}
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

    const userData =  userdata.data
    


  return (
     <>
        <Paragraph className={classList.userCreate} style={{marginBottom:"0"}}
            onClick={()=>{
                    navigate('/createuser')
                }}>
            Click Me Create New User 
        </Paragraph>

     
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
            }
        })
     }
     />   

     </>
     
  )
}

export default UserList