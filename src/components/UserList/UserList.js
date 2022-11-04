import { Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers, getAllUsersPaginated, removeUser } from './../../slices/UserSlice';
const { Column, ColumnGroup } = Table;

const UserList = () => {
     const { userdata,loading,error  } = useSelector((state) => state.userdetails)
    const dispatch = useDispatch()
       
    useEffect(() => {
       dispatch(getAllUsers())
    },[])
    
  

    var col = [
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
    render: ( record) => {
        return (
            <Space size="middle">
              <button
                onClick={dispatch(removeUser(record.id))}
              >Delete</button>
      </Space>
        )
     }
  },
    ]
  return (
    <div>
        <Table  
            columns={col}
             dataSource={userdata.data?.map((item) => {
                                return {
                                    key: item.id,
                                    id: item.id,
                                    first_name: item.first_name,
                                    last_name: item.last_name,
                                    email:item.email,
                                                                      
                                };
                            })}
        />
     
    </div>
  )
}

export default UserList