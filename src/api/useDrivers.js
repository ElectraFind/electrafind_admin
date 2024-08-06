import { Error } from "@mui/icons-material";
import axios  from "axios";

const API_URL = "http://localhost:9000/api";

export const useDrivers =()=>{
    const getDriverDetails=async()=>{
        try {
            const response = await axios({
                method:"get",
                url:`${API_URL}/drivers`,
                withCredentials:true
            });
            return response;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    return{getDriverDetails}
}