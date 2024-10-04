import { createContext, useEffect, useState } from "react";
import ProductAPI from "./api/ProductAPI";
import axios from "axios";
import UserAPI from "./api/UserAPI";

export const GlobalState= createContext();

export const DataProvider=({children})=>{
    const [token,setToken] = useState(null)

    const refreshToken =async() =>{
        try {
            const res = await axios.post('https://ecommerce-api-nine-woad.vercel.app/user/refresh_token',null, { withCredentials: true });
            setToken(res.data.accesstoken);
        } catch (err) {
            console.error('Failed to refresh token:', err);
            localStorage.removeItem('firstLogin');
            window.location.href = '/login';
        }
    }

    useEffect(()=>{
        
        const firstLogin = localStorage.getItem('firstLogin');
        const savedToken = localStorage.getItem('token');
        if (firstLogin) {
            if (savedToken) {
                setToken(savedToken); 
            } else {
                refreshToken();
            }
        }
    },[])

    const state= {
        token:[token,setToken],
        productAPI:ProductAPI(),
        userAPI:UserAPI(token)
    }

    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}