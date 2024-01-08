import { Modal } from 'react-bootstrap';
import { faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import ImageComponent from './imageComponent';


//this component will be used to display the activity modal when a user clicks on an activity
//it will display the TargetName, Image, Description, and a button to close the modal
//the modal will display only when it is called by the ViewActivity component


//this Components takes in 3 props
//targetName: the name of the target the the modal belongs to
//isVisible: a boolean that determines if the modal is visible or not


function ActivityModal({ targetName, isVisible, closeModal }) {

    const [activityArray, setActivityArray] = useState([]);

    const viewActivity = () => {

        axios.get(process.env.REACT_APP_SERVER_HOSTED_ON + '/getActivity/' + targetName, {
            headers: { 'Authorization': 'Bearer ' + Cookies.get('token') }
        }).then((response) => {
            console.log(response.data);
            if (response.data.success === false) {
                Cookies.remove('token');
                window.location.href = '/';
            } else {
                setActivityArray(response.data.files);
            }
        }).catch((error) => {
            console.log(error);
        });

    }

    useEffect(() => {
        viewActivity();
    }, []);

    if (activityArray.length > 0) {

        return (
            <Modal show={isVisible} onHide={closeModal} dialogClassName="modal-lg" className="d-flex align-items-center justify-content-center">
                <Modal.Header closeButton>
                    <Modal.Title>Target : {targetName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ImageComponent ImageArray={activityArray} Name={targetName} />
                </Modal.Body>
                <Modal.Footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <button type="button" className="btn btn-primary w-100" id="downloadFrameButton" >
                                    <FontAwesomeIcon icon={faDownload} className="me-2" />
                                </button>
                            </div>
                            <div className="col-6">
                                <button type="button" className="btn btn-danger w-100" id="deleteFrameButton" >
                                    <FontAwesomeIcon icon={faTrash} className="me-2" />
                                </button>
                            </div>
                        </div>
                    </div>

                </Modal.Footer>
            </Modal>
        );
    }
}

export default ActivityModal;