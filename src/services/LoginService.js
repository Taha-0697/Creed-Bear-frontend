import http from "../http-common";

const login = (data)=> {
    return http.post('login',data)
}

const adminlogin =(data)=>{
    return http.post("admin",data)
}

const LoginService = {
  login,
  adminlogin,
};

export default LoginService