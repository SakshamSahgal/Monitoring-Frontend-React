import { useState } from "react";
import ActivityModal from "../ModalComponents/ActivityModal";
import { AxiosGET } from "../../Scripts/AxiosRequest";
import Cookies from 'js-cookie';

function ViewActivity({Name}) {

    const [isModalVisible, setModalVisibility] = useState(false);
    const [activityArray, setActivityArray] = useState([]);

    const viewActivity = async () => {
        console.log("fetching activity data for " + Name)
        let data = await AxiosGET('/getActivity/' + Name, Cookies.get('token'))
        console.log(data)
        setActivityArray(data.files)
        setModalVisibility(!isModalVisible)
    }

    console.log("rendering ViewActivity")

    const closeModal = () => {
        setModalVisibility(false);
    }

    return (
        <>
            <button className="btn btn-primary w-100" onClick={viewActivity}>👁️ View Activity </button>
            <ActivityModal targetName={Name} isVisible={isModalVisible} closeModal={closeModal} activityArray={activityArray} viewActivity={viewActivity}/>
        </>
    )
}

export default ViewActivity;