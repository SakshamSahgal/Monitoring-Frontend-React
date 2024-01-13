import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import ImageComponent from './imageComponent';
import FooterUtilityButtons from './footerUtilityButtons';
import { faSync, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { AxiosGETWithCustomHeaders } from '../../Scripts/AxiosRequest';
import Cookies from 'js-cookie';
import TimeModal from './TimeModal';

//this component will be used to display the activity modal when a user clicks on an activity
//it will display the TargetName, Image, Description, and a button to close the modal
//the modal will display only when it is called by the ViewActivity component

function ActivityModal({ targetName, isVisible, closeModal, activityArray, viewActivity }) {

    const [sliderValue, setSliderValue] = useState(0); // State to manage slider value


    if (activityArray.length > 0) {

        return (
            <Modal show={isVisible} onHide={closeModal} dialogClassName="modal-lg" className="d-flex align-items-center justify-content-center">
                <Modal.Header closeButton>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <Modal.Title>Target : {targetName}</Modal.Title>
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <hr />
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Button variant="primary" className="w-100 h-100" onClick={viewActivity}>
                                    <FontAwesomeIcon icon={faSync} />
                                </Button>
                            </div>
                            <div className="col-6 text-center">
                                <TimeModal activityArray={activityArray} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <ImageComponent activityArray={activityArray} Name={targetName} sliderValue={sliderValue} setSliderValue={setSliderValue} />
                </Modal.Body>
                <Modal.Footer>
                    <FooterUtilityButtons sliderValue={sliderValue} activityArray={activityArray} targetName={targetName} viewActivity={viewActivity} setSliderValue={setSliderValue} />
                </Modal.Footer>
            </Modal>
        );
    }
    else {
        //if there are no images in the activity array, display this message
        return (
            <Modal show={isVisible} onHide={closeModal} dialogClassName="modal-lg" className="d-flex align-items-center justify-content-center">
                <Modal.Header closeButton>
                    <Modal.Title>Target : {targetName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>There are no images in this activity</p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ActivityModal;