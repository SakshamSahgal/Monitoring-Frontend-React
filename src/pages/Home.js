

import DownloadAllButton from "../Components/DownloadAllButton"
import Navbar from "../Components/navbar";
import SizeBar from "../Components/Size";

function Home() {

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
            </div>
        </>
    )
}

export default Home;