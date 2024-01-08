import { Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ImageComponent from './imageComponent';
import {AxiosGET} from '../Scripts/AxiosRequest';
import FooterUtilityButtons from './footerUtilityButtons';

//this component will be used to display the activity modal when a user clicks on an activity
//it will display the TargetName, Image, Description, and a button to close the modal
//the modal will display only when it is called by the ViewActivity component


//this Components takes in 3 props
//targetName: the name of the target the the modal belongs to
//isVisible: a boolean that determines if the modal is visible or not
//closeModal : a function that closes the modal

function ActivityModal({ targetName, isVisible, closeModal }) {

    const [activityArray, setActivityArray] = useState([]);
    const [sliderValue, setSliderValue] = useState(0); // State to manage slider value

    const viewActivity = async () => {
        console.log("asd")
        let data = await AxiosGET('/getActivity/' + targetName, Cookies.get('token'))
        console.log(data)
        setActivityArray(data.files)
    }
    useEffect(() => {
        viewActivity(); // this will only run once (on mount)
    }, []);

    const downloadImage = (sliderValue) => {
        const imageUrl = process.env.REACT_APP_SERVER_HOSTED_ON + '/' + targetName + '/' + activityArray[sliderValue];
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `Image_${sliderValue}`;
        link.click();
    };

    if (activityArray.length > 0) {

        return (
            <Modal show={isVisible} onHide={closeModal} dialogClassName="modal-lg" className="d-flex align-items-center justify-content-center">
                <Modal.Header closeButton>
                    <Modal.Title>Target : {targetName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ImageComponent ImageArray={activityArray} Name={targetName} sliderValue={sliderValue} setSliderValue={setSliderValue} />
                </Modal.Body>
                <Modal.Footer>
                    <FooterUtilityButtons sliderValue={sliderValue} activityArray={activityArray} targetName={targetName}/>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ActivityModal;