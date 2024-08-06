import React from 'react'
import axios from 'axios';

const API_URL ="http://localhost:9000/api";

export const useUsers = () => {

    const getUsers=async()=>{
        try {
            const response  = await axios({
                method:"get",
                url:`${API_URL}/users`,
                withCredentials:true
            });
            return response;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }


  return {getUsers}
}


