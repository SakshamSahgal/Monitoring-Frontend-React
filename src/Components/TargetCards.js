import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ViewActivity from "./ViewActivity";
import { convertIsoToNormalTime, getTimeElapsed } from "../Scripts/TimeFunctions";
import PermissionsSwitch from "./PermissionsSwitch"
import DateTimeActivity from "./DateTimeActivity";

function TargetCards() {

    const [targets, setTargets] = useState([]);

    const fetchTargets = async () => {
        axios.get(process.env.REACT_APP_SERVER_HOSTED_ON + '/getTargets', {
            headers: { 'Authorization': 'Bearer ' + Cookies.get('token') }
        }).then((response) => {
            console.log(response.data);
            if (response.data.success === false) {
                Cookies.remove('token');
                window.location.href = '/';
            }
            else {
                setTargets(response.data.targets);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchTargets();
    }, []);

    // target is an array of objects and each object has the following properties:
    // Name, LastContact, FirstContact, EarliestActivityStored, Allowed

    return (
        <>
            {targets.map((target, index) => {
                return (
                    <div className="col-12 col-md-6 col-lg-4 my-3" key={index}>
                        <div className="card shadow">
                            <div className="card-header text-center">
                                <h5>{target.Name}</h5>
                            </div>
                            <div className="card-body">

                                <DateTimeActivity Heading="Last Contact" ISOTime={target.LastContact} />
                                <DateTimeActivity Heading="First Contact" ISOTime={target.FirstContact} />
                                <DateTimeActivity Heading="Earliest Activity Stored" ISOTime={target.EarliestActivityStored} />

                                <div className="d-flex justify-content-center">
                                    <PermissionsSwitch permissions={target.Allowed} />
                                </div>
                            </div>

                            <div className="card-footer">
                                <ViewActivity Name={target.Name}/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default TargetCards;