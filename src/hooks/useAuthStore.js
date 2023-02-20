import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { authSlice } from "state";
// import {
//   clearErrorMessage,
//   onChecking,
//   onLogin,
//   onLogout,
//   onLogoutCalendar,
// } from "../store";
import { socialMediaApi } from "../api";
import { setLogin } from "../state";
import { useState } from "react";


export const useAuthStore = () => {
  const [pageType, setPageType] = useState("login");
  
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  // const { status, user, errorMessage } = useSelector( state => state.auth );
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const startLogin = async ({email, password}) => {
  const startLogin = async (values) => {
    try {
      // const {data} = await socialMediaApi.post("/auth", { email, password });
      const {data} = await socialMediaApi.post("/auth", {values});
      console.log(data.user)
      console.log(data.token)

      dispatch(
        setLogin({
          user: data.user,
          token: data.token,
        })
      );
      if (data.user) {
        setPageType("login");
      }
      navigate("/home");
    } catch (error) {
      console.log('mi error',error);
    }
  };

  // const startRegister = async({ userName, lastName, location,ocupation,email,password }) => {
  const startRegister = async(values) => {
      try {
          // const  resp = await socialMediaApi.post('/auth/register',{userName,lastName,location,ocupation,email,password});
          const  resp = await socialMediaApi.post('/auth/register',values);
          console.log(resp)
          
          // // localStorage.setItem('token', data.token );
          // localStorage.setItem('token-init-date', new Date().getTime() );
          // dispatch( onLogin({ name: data.name, uid: data.uid }) );

      } catch (error) {
       
      }
  }

  // const checkAuthToken = async() => {
  //     const token = localStorage.getItem('token');
  //     if ( !token ) return dispatch( onLogout() );

  //     try {
  //         const { data } = await calendarApi.get('auth/renew');
  //         localStorage.setItem('token', data.token );
  //         localStorage.setItem('token-init-date', new Date().getTime() );
  //         dispatch( onLogin({ name: data.name, uid: data.uid }) );
  //     } catch (error) {
  //         localStorage.clear();
  //         dispatch( onLogout() );
  //     }
  // }

  // const startLogout = () => {
  //     localStorage.clear();
  //     dispatch( onLogoutCalendar() );
  //     dispatch( onLogout() );
  // }

  return {
    //* Propiedades

    isLogin,
    isRegister,
    user,
    startLogin,
    setPageType,
    startRegister,

    //* Métodos
  };
};
