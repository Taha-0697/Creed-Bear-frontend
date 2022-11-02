import http from "../http-common";

const getAllusers = () =>{
    return http.get("getallusers");
}

const getUserbyId=(id)=>{
    return http.get(`getuser/${id}`)
}

const getAllusersPaginated = (PageNo, PageSize)=>{
    return http.get(`getallusers/paginate?PageSize=${PageSize}&PageNo=${PageNo}`)
}

const createUser = (data) => {
  return http.post("createuser", data);
};

const updateUser = (id, data) => {
  return http.put(`/updateuser/${id}`, data);
};

const removeUserById = id => {
  return http.delete(`removeuser/${id}`);
};

const removeAllUsers = id => {
  return http.delete(`removeallusers`);
};

const UserServices = {
  getAllusers,
  getUserbyId,
  getAllusersPaginated,
  createUser,
  updateUser,
  removeUserById,
  removeAllUsers,
};

export default UserServices;