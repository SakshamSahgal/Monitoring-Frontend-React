

import Cookies from "js-cookie";
import DownloadAllButton from "../Components/DownloadAllButton"
import Navbar from "../Components/navbar";
import SizeBar from "../Components/Size";
import axios from "axios";
import TargetCards from "../Components/TargetCards";

function Home() {

    axios.get(process.env.REACT_APP_SERVER_HOSTED_ON + '/validateToken', {
        headers: { 'Authorization': 'Bearer ' + Cookies.get('token') }
    }).then((response) => {
        console.log(response.data);
        if (response.data.success === false)
        {
            Cookies.remove('token');
            window.location.href = '/';
        }
    }).catch((error) => {
        console.log(error);
    });

    return (
        <>
            <Navbar />
            <div className="container my-3">
                <div className="row my-3 px-3">
                    <div className="col">
                        <DownloadAllButton />
                    </div>
                </div>
                <div className="row">
                    <SizeBar />
                </div>
                <div className="row">
                    <TargetCards />
                </div>
            </div>
        </>
    )
}

export default Home;