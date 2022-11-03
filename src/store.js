import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./slices/loginSlice"


const store = configureStore({
 reducer:{
    userlogin:loginReducer
 }
})

export default store;