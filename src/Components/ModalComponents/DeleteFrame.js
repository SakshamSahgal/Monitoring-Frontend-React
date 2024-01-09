import { faTrash,faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DeleteFrameButton({deleteList, setDeleteList, activityArray, sliderValue, setSliderValue}) {

    const DeleteImage = async () => {

        if (!deleteList.includes(activityArray[sliderValue])) {
            if (sliderValue != activityArray.length - 1) {
                setSliderValue(sliderValue + 1);
            }
            console.log("adding image to delete list " + activityArray[sliderValue])
            setDeleteList([...deleteList, activityArray[sliderValue]]);
        }
    }

    if(deleteList.includes(activityArray[sliderValue])) {
       return (
            <button type="button" className="btn btn-danger w-100" id="deleteFrameButton" onClick={DeleteImage}>
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> { /* Solid trash icon */}
            </button>
        )
    }
    else
    {
        return (
            <button type="button" className="btn btn-danger w-100" id="deleteFrameButton" onClick={DeleteImage}>
                <FontAwesomeIcon icon={faTrash} className="me-2" /> { /* regular trash icon */}
            </button>
        )
    }
}

export default DeleteFrameButton;