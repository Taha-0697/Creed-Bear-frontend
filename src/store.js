import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./slices/loginSlice"
import userReducer from "./slices/UserSlice"

const store = configureStore({
 reducer:{
    userlogin:loginReducer,
    userdetails: userReducer,
 }
})

export default store;