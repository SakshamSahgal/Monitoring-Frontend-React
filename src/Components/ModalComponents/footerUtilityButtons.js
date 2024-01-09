import { faDownload, faTrash, faAngleLeft, faAngleRight,faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DeleteFrameButton from "./DeleteFrame";
import DownloadFrameButton from "./DownloadFrame";

function FooterUtilityButtons({ sliderValue, activityArray, targetName, viewActivity, setSliderValue }) {

    const [deleteList, setDeleteList] = useState([]); // state to manage delete list

    const ShiftSliderLeft = async () => {
        console.log("clicked left")
        if (sliderValue != 0) {
            setSliderValue(sliderValue - 1);
        }
    }

    const ShiftSliderRight = async () => {
        console.log("clicked right")
        if (sliderValue != activityArray.length - 1) {
            setSliderValue(sliderValue + 1);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <button type="button" className="btn btn-primary w-100" onClick={ShiftSliderLeft}>
                        <FontAwesomeIcon icon={faAngleLeft} className="me-2" />
                    </button>
                </div>
                <div className="col-4">
                    <DownloadFrameButton targetName={targetName} activityArray={activityArray} sliderValue={sliderValue} />
                </div>
                <div className="col-4">
                    <DeleteFrameButton deleteList={deleteList} setDeleteList={setDeleteList} activityArray={activityArray} sliderValue={sliderValue} setSliderValue={setSliderValue}/>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-primary w-100" onClick={ShiftSliderRight}>
                        <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    </button>
                </div>
            </div>
            <div className="row text-center my-3">
                {deleteList.map((image, index) => {
                    return (
                        <div className="col-12" key={index}>
                            <p>{image}</p>
                        </div>
                    )
                })}
            </div>
            <div className="row">
                <div className="col-12">

                </div>
            </div>
        </div>
    )
}

export default FooterUtilityButtons;