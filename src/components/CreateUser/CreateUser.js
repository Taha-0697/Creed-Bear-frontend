import React from 'react'
import Header from './../Header/Header';
import Button from './../Button/Button';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate() 

    return (
      <>
        <Header>
          User Sucessfully Created 
        </Header>
        
        <Button
          onClick={()=>{
            navigate("/allusers")
          }}
        >
          Go To Users
        </Button>
      </>
  )
}

export default CreateUser