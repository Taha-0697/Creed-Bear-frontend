import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header';
import Paragraph from '../../components/Paragraph/Paragraph';

const ProtectedRoute = () => {
  const {data}  = useSelector((state) => state.userlogin)

  // show unauthorized screen if no user is found in redux store
  if (!data) {
    return (
      <div className='unauthorized'>
        <Header>Unauthorized 😌😌</Header>
        <Paragraph>
          <NavLink to='/'>
            <Button>Login</Button>
          </NavLink> to gain access
        </Paragraph>
      </div>
    )
  }

  return <Outlet />
}

export default ProtectedRoute
