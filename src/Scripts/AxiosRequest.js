import axios from "axios";
import Cookies from "js-cookie";

async function AxiosGET(APIroute, token) {
    try {
        const response = await axios.get(process.env.REACT_APP_SERVER_HOSTED_ON + APIroute, { headers: { 'Authorization': 'Bearer ' + token } });

        console.log(response.data);

        if (response.data.success === false) {
            Cookies.remove('token');
            window.location.href = '/';
        }
        else
            return response.data; // Return the response.data
    } catch (error) {
        console.log(error);
        // throw error;
    }
}


export { AxiosGET }