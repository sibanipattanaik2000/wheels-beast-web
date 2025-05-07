import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
 
const apiToken = 'drwdsrdr-53rvs@3#5%826-hdgdg-12ggsh'
 
 
export const ServerData = 'https://try-developmental-attacks-nowhere.trycloudflare.com'
 
async function getToken(){
    try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
            return token
        }
      } catch (error) {
        console.error("Failed to read token:", error);
      }
}
 
 
const headers: any = {
  'Content-Type': 'application/json',
  'X-API-Token': apiToken,  // Add your API token here
};
 
 
export const postRequest = async (url: string, data: object, url_type?: "userapi" | "vendor") => {
 
    const token = await getToken()
 
  if (token) {
    headers['Authorization'] = `Token ${token}`;
  }
    try {
      const response = await axios.post(
        `${ServerData}/${url_type ? url_type : "userapi"}${url}`,
        data,
        {
          headers: headers,
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error in POST request:', error);
      throw error;  // Handle this in the calling component
    }
  };
 
  export const getRequest = async (url: string, url_type?: "userapi" | "expert") => {
    const token = await getToken();
 
   
    const headers: any = {};
    if (token) {
      headers['Authorization'] = `Token ${token}`;
    }
 
    try {
      const response = await axios.get(
        `${ServerData}/${url_type ? url_type : "userapi"}/${url}`,
        {
          headers: headers,
        }
      );
    // console.log(response.data);
   
      return response.data
 
    } catch (error) {
      console.error('Error in GET request:', error);
      throw error;
    }
  };
 
 