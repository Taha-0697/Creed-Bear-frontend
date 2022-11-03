import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LoginService from '../services/LoginService';

const initialState={
    loading:false,
    data:null,
    error: null,
};

export const loginAsUser = createAsyncThunk(
    "login/loginAsUser", 
     async ({email,password}) => {
     try {
            const res = await LoginService.login({email,password});
            return res.data;
        } catch (error) {
            console.log(error)
        }
  }
)

export const loginAsAdmin = createAsyncThunk(
    "login/loginAsAdmin", 
     async ({email,password}) => {
     try {     
            const res = await LoginService.adminlogin({email,password});
            return  res.data;
        } catch (error) {
            console.log(error)
        }
  }
)


const loginSlice = createSlice({
    name: "userlogin",
    initialState,
    reducers:{
        logout: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
    },
    extraReducers:{
        [loginAsAdmin.pending]: (state , action)=>{
           state.loading = true;
                    
        },
        [loginAsAdmin.fulfilled]: (state , action)=>{
            state.loading = false;
            state.data = action.payload;          
        },
        [loginAsAdmin.rejected]: (state , action)=>{
          state.loading = false;
          state.error = action.payload;
        },


        [loginAsUser.pending]: (state , action)=>{
           state.loading = true;       
        },
        [loginAsUser.fulfilled]: (state , action)=>{
            state.loading = false;
            state.data = action.payload;          
        },
        [loginAsUser.rejected]: (state , action)=>{
          state.loading = false;
        }

    }
})


export const { logout } = loginSlice.actions

export default loginSlice.reducer