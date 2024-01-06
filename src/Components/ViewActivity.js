import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function ViewActivity(props) {

    const [Activity, SetActivity] = useState([]);

    const viewActivity = () => {

        axios.get(process.env.REACT_APP_SERVER_HOSTED_ON + '/getActivity/' + props.Name, {
            headers: { 'Authorization': 'Bearer ' + Cookies.get('token') }
        }).then((response) => {
            console.log(response.data);
            if (response.data.success === false) {
                Cookies.remove('token');
                window.location.href = '/';
            } else {
                SetActivity(response.data);
            }
        }).catch((error) => {
            console.log(error);
        });

    }

    return (
        <button className="btn btn-primary w-100" onClick={viewActivity}>👁️ View Activity </button>
    )
}

export default ViewActivity;