import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import Button from '../components/Button/Button'
import Header from '../components/Header/Header'
import Paragraph from '../components/Paragraph/Paragraph'

const ProtectedRoute = () => {
  const {data}  = useSelector((state) => state.userlogin)

  // show unauthorized screen if no user is found in redux store
  if (!data) {
    return (
      <div  style={{ display:"flex", alignItems:"center",justifyContent:"center",flexWrap:"wrap",flex:"1",}}>
        <Header>
          Unauthorized 😌😌 Kindly
        </Header>
           <NavLink to='/' style={{margin:"0 1rem"}}>
            <Button fontSize={20}>Login</Button>
          </NavLink>
        <Header>
          to gain access
        </Header>
          
      </div>
    )
  }

  return <Outlet />
}

export default ProtectedRoute
