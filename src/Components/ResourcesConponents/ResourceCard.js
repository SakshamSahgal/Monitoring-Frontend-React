import { Button } from "react-bootstrap"

function ResourceCard({ Heading, textAreaTitle, APIPath}) {

    return (
        <>
            <div className="card shadow my-3 mx-3">
                <div className="card-header text-center">
                    <h5>{Heading}</h5>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h6>Enter Here..</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <textarea className="form-control" rows="3">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <Button> Save ✏️</Button>
                </div>
            </div>
        </>
    )

}

export default ResourceCard;