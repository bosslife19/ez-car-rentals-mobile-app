import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: `https://e2e.adapter.2hire.io`,
    
})
let token;

AsyncStorage.getItem('accessToken').then(res=>token = res);

axiosClient.interceptors.request.use((config)=>{
    
    
    config.headers.Authorization = `Bearer ${token}`
   
    return config;
})

axiosClient.interceptors.response.use((response)=>{
return response;
}, (error)=>{
    try {
        const {response} = error;
        if(response.status ===401){
            AsyncStorage.removeItem("accessToken")
        } 
    } catch (error) {
        console.error(error)
    }
    

    throw error
})

export default axiosClient