import axios from "axios";
import Cookies from "js-cookie";

async function AxiosGET(APIroute, token) {
    try {
        const response = await axios.get(process.env.REACT_APP_SERVER_HOSTED_ON + APIroute, { headers: { 'Authorization': 'Bearer ' + token } });

        // console.log(response.data);

        if (response.data.success === false) {
            Cookies.remove('token');
            window.location.href = '/';
        }
        else
            return response.data; // Return the response.data
    } catch (error) {
        console.log(error);
        return;
    }
}

async function AxiosPOST(APIroute, token) {
    try {
        const response = await axios.post(process.env.REACT_APP_SERVER_HOSTED_ON + APIroute, {}, { headers: { 'Authorization': 'Bearer ' + token } });

        // console.log(response.data);

        if (response.data.success === false && (response.data.message === "Invalid token" || response.data.message === "No token provided")) {
            Cookies.remove('token');
            window.location.href = '/';
        }
        else
            return response.data; // Return the response.data
    } catch (error) {
        console.log(error);
        return;
    }
}

async function AxiosPUT(APIroute, data, token) {
    try {
        const response = await axios.put(process.env.REACT_APP_SERVER_HOSTED_ON + APIroute, data, { headers: { 'Authorization': 'Bearer ' + token } });

        // console.log(response.data);

        if (response.data.success === false && (response.data.message === "Invalid token" || response.data.message === "No token provided")) {
            Cookies.remove('token');
            window.location.href = '/';
        }
        else
            return response.data; // Return the response.data
    } catch (error) {
        console.log(error);
        return;
    }
}

async function AxiosDELETE(APIroute, data, token) {
    try {
        const response = await axios.delete(process.env.REACT_APP_SERVER_HOSTED_ON + APIroute, { headers: { 'Authorization': 'Bearer ' + token }, data: data })
        
        // console.log(response.data);

        if (response.data.success === false && (response.data.message === "Invalid token" || response.data.message === "No token provided")) {
            Cookies.remove('token');
            window.location.href = '/';
        }
        else
            return response.data; // Return the response.data

    } catch (error) {
        console.log(error);
        return;
    }
}

export { AxiosGET, AxiosPOST, AxiosDELETE, AxiosPUT }