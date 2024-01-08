import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ViewActivity from "./ViewActivity";
import PermissionsSwitch from "./PermissionsSwitch"
import DateTimeActivity from "./DateTimeActivity";
import { AxiosGET } from "../Scripts/AxiosRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
function TargetCards() {

    const [targets, setTargets] = useState([]);

    const fetchTargets = async () => {

        const response = await AxiosGET("/getTargets", Cookies.get('token'))
        setTargets(response.targets)

    }

    useEffect(() => {
        fetchTargets();
    }, []);

    // targets is an array of objects and each object has the following properties:
    // Name, LastContact, FirstContact, EarliestActivityStored, Allowed

    return (
        <>
            <div className="row">
                <Button variant="primary" className="my-3" onClick={fetchTargets}>
                    <FontAwesomeIcon icon={faSync} />
                </Button>
            </div>
            <div className="row">

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
                                    <ViewActivity Name={target.Name} />
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default TargetCards;