import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserServices from '../services/UserService';

const initialState = [];

export const createUser= createAsyncThunk(
    "Users/createUser",
    async({first_name,last_name,avatar,email,id})=>{
       try {
         const res = await UserServices.createUser({
            first_name,
            last_name, 
            avatar,
            email,
            id,  
        });
        return res.data;
       } catch (error) {
           console.log(error)
       }
    }
)

export const getAllUsers = createAsyncThunk(
  "Users/getAllUsers",
  async () => {
    try {
        const res = await UserServices.getAllusers();
        return res.data;
    } catch (error) {
        console.log(error)
    }
  }
);

export const getAllUsersPaginated = createAsyncThunk(
  "Users/getAllUsersPaginated",
  async ({PageNo,PageSize}) => {
     try {
            const res = await UserServices.getAllusersPaginated({PageNo,PageSize});
            return res.data;
        } catch (error) {
            console.log(error)
        }
  }
);


const UserSlice = createSlice({
    name: "Users",
    initialState,
    reducers:{},
    extraReducers:{
        [createUser.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
    }
})

export default UserSlice.reducer