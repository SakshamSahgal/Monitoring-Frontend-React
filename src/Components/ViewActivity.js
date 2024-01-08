import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ActivityModal from "./ActivityModal";

function ViewActivity({Name}) {

    const [isModalVisible, setModalVisibility] = useState(false);

    const ViewActivity = () => {
        setModalVisibility(true)
    }

    const closeModal = () => {
        setModalVisibility(false);
    }

    return (
        <>
            <button className="btn btn-primary w-100" onClick={ViewActivity}>👁️ View Activity </button>
            <ActivityModal targetName={Name} isVisible={isModalVisible} closeModal={closeModal} />
        </>
    )
}

export default ViewActivity;