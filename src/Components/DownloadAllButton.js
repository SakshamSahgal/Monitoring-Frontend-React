import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';

function DownloadAllButton() {

  const downloadEntireData = async () => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_SERVER_HOSTED_ON + '/downloadData',
        {
          headers: { Authorization: 'Bearer ' + Cookies.get('token') },
          responseType: 'blob'
        });
      //if token is invalid or expired then redirect to login page
      if (data.success == false) {
        alert(data.message);
        Cookies.remove('token');
        window.location.href = '/';
      }
      else {
        // console.log(data);s
        const blob = new Blob([data], { type: 'application/zip' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'uploads.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

    } catch (error) {
      console.error('Error downloading data:', error);
    }
  };


  return (
    <button className="btn btn-dark w-100" onClick={downloadEntireData}>
      <FontAwesomeIcon icon={faDownload} /> &nbsp; Download Entire Data &nbsp;
    </button>
  );

}

export default DownloadAllButton;

