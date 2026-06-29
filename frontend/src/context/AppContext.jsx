import axios from "axios";
import { createContext, useEffect, useState } from "react";
import axiosInstance from "../api/axios";

export const AppContext = createContext();


export const AppContextProvider = ({ children }) => {



  axios.defaults.withCredentials = true;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [matchMaking, setMatchMaking] = useState(false);

  const getUserData = async () => {
    try {
      const { data } = await axiosInstance.get("/api/user/data",);
      console.log(data);

      if (data.success) {
        setUserData(data.data);
      }
    } catch (error) {
      console.log("Get User Error:", error);
      console.log("Response:", error.response);
      console.log("Data:", error.response?.data);
      console.log("Status:", error.response?.status);
    }
  };

  const getAuthState = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/auth/is-auth`
      );

      if (data.success) {
        setIsLoggedIn(true);
        await getUserData();
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
      console.log("Auth Error:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  const value = {
    backendUrl,

    isLoggedIn,
    setIsLoggedIn,

    userData,
    setUserData,

    loading,

    getUserData,
    getAuthState,

    matchMaking,
    setMatchMaking
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};