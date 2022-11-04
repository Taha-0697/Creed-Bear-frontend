import { Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paragraph from '../Paragraph/Paragraph';
import { getAllUsers, getAllUsersPaginated, removeUser, updateUser } from './../../slices/UserSlice';
import Button from './../Button/Button';
import { useNavigate } from 'react-router-dom';
const { Column, ColumnGroup } = Table;

const UserList = () => {
     const { userdata,loading,error  } = useSelector((state) => state.userdetails)
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
         
        }
    ]

    const userData =  userdata.data
    


  return (
     <>
     <p>
        Create a New User ?
     </p>

      <button onClick={()=>{
                    navigate('/createuser')
                }}>
                    Create New User
        </button>
     
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