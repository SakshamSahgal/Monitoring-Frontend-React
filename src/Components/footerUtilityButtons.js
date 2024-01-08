import { faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterUtilityButtons({sliderValue, activityArray, targetName}) {

    const downloadImage = async () => {
        try {
            const imageUrl = process.env.REACT_APP_SERVER_HOSTED_ON + '/' + targetName + '/' + activityArray[sliderValue];
            const response = await fetch(imageUrl);
            const blob = await response.blob();
    
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `Image_${sliderValue}`;
            link.click();
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <button type="button" className="btn btn-primary w-100" id="downloadFrameButton" onClick={downloadImage}>
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
    )
}

export default FooterUtilityButtons;