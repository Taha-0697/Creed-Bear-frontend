
import Header from './../Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import classList from "./Navbar.module.scss"
import Button from './../Button/Button';
import { logout } from '../../slices/loginSlice';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({head}) => {
  let { data } = useSelector((state) => state.userlogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()    
 

 const logoutuser = () =>{
    dispatch(logout());
      navigate('/')   
 }

    return (
    <>
      <div className={classList.Navbar}>
        <Header>{head}</Header>
          {data ? (
                  <Button onClick={logoutuser}>
                    Logout
                  </Button>
                ) : (
                  <NavLink className='button' to='/'>
                    Login 
                  </NavLink>
                )}
        </div>
    </>
  )
}

export default Navbar