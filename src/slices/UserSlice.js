import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserServices from '../services/UserService';

const initialState={
    loading:false,
    userdata:{},
    error: null,
};


export const createUser= createAsyncThunk(
    "userdetails/createUser",
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
  "userdetails/getAllUsers",
  async () => {
    try {
        const res = await UserServices.getAllusers();
        return res.data;
    } catch (error) {
        console.log(error)
    }
  }
);

export const getUserById = createAsyncThunk(
  "userdetails/getUserById",
  async (payload) => {
    try {
        const res = await UserServices.getUserbyId(payload);
        return res.data;
    } catch (error) {
        console.log(error)
    }
  }
);

export const removeUserById = createAsyncThunk(
  "removeUserById",
  async (payload) => {
    try {
        const res = await UserServices.removeUserById(payload);
        return res.data;
    } catch (error) {
        console.log(error)
    }
  }
);

export const updateUser = createAsyncThunk(
  "userdetails/updateUser",
  async ({first_name,last_name,avatar,email,id}) => {
    try {
        const res = await UserServices.updateUser(id,{
          first_name,last_name,avatar,email,id
        });
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
    name: "userdetails",
    initialState,
    reducers:{
        editUser: (state, action) => {
                debugger
                state.userdata = action.payload
        },
    },
    extraReducers:{
        [createUser.fulfilled]: (state, action) => {
            state.userdata =action.payload;
        },

        [getAllUsers.fulfilled]: (state, action) => {
            state.userdata =action.payload;
        },

        [removeUserById.fulfilled]: (state, action) => {
           state.userdata = action.payload
        },

        [getUserById.fulfilled]: (state, action) => {
           state.userdata = action.payload
        },
    }
})

export const {editUser} = UserSlice.actions
export default UserSlice.reducer