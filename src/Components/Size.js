import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';



function SizeBar() {
    const [size, setSize] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get(process.env.REACT_APP_SERVER_HOSTED_ON + "/getUploadsSizeOnDisk", { headers: { Authorization: 'Bearer ' + Cookies.get('token') } });

            if (data.success === false) {
                alert(data.message);
                Cookies.remove('token');
                window.location.href = '/';
            } else {
                console.log(data);
                setSize(data);
            }
        } catch (error) {
            console.error('Error Fetching size:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const totalSize = size.TotalSizeInBytes;
    const filledSize = size.AlreadyFilledSizeinBytes;
    const uploadSize = size.uploadSizeInBytes;
    const availableSize = size.availableSizeInBytes;

    const filledPercentage = (filledSize / totalSize) * 100;
    const uploadPercentage = (uploadSize / totalSize) * 100;
    const availablePercentage = (availableSize / totalSize) * 100;

    const formatSize = (bytes) => {
        if (bytes < 1024) {
            return `${bytes} B`;
        } else if (bytes < 1024 * 1024) {
            return `${(bytes / 1024).toFixed(2)} KB`;
        } else if (bytes < 1024 * 1024 * 1024) {
            return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
        } else {
            return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
        }
    };

    return (
        <div>
            <div className="container bg-success bg-opacity-25">
                <div className="py-3">
                    <ProgressBar className="my-3">
                        <ProgressBar
                            variant="primary"
                            now={filledPercentage}
                            label={`Filled: ${filledPercentage.toFixed(2)}%`}
                            key={1}
                        />
                        <ProgressBar
                            variant="danger"
                            now={uploadPercentage}
                            label={`Uploads: ${uploadPercentage.toFixed(2)}%`}
                            key={2}
                        />
                        <ProgressBar
                            variant="light"
                            now={availablePercentage}
                            label={`Available: ${availablePercentage.toFixed(2)}%`}
                            key={3}
                        />
                    </ProgressBar>
                </div>
                <div className="row mx-1">
                    <Button variant="primary" className="my-3" onClick={fetchData}>
                        <FontAwesomeIcon icon={faSync} />
                    </Button>
                </div>
                <div className="row d-flex align-items-center rounded-lg">
                    <div className="col">
                        <p>Total Size: {formatSize(totalSize)}</p>
                    </div>
                    <div className="col">
                        <p>Filled Size: {formatSize(filledSize)}</p>
                    </div>
                    <div className="col">
                        <p>Upload Size: {formatSize(uploadSize)}</p>
                    </div>
                    <div className="col">
                        <p>Available Size: {formatSize(availableSize)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SizeBar;
