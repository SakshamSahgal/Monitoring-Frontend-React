import React, { useState } from 'react';

function ImageComponent({ ImageArray, Name, sliderValue, setSliderValue  }) {

    const handleChange = (event) => {
        setSliderValue(parseInt(event.target.value, 10));
    };

    return (
        <>
            <div className="row text-center">
                <p>Frame: {sliderValue + 1} / {ImageArray.length}</p>
            </div>
            <div className="row">
                <div className="img-container" style={{ maxHeight: '80vh', overflow: 'hidden' }}>
                    <img
                        src={process.env.REACT_APP_SERVER_HOSTED_ON + '/' + Name + '/' + ImageArray[sliderValue]}
                        alt={`Image ${sliderValue}`}
                        className="img-fluid"
                    />
                </div>
            </div>
            <div className="row my-3">
                <input className='w-100' type="range" min={0} max={ImageArray.length - 1} step={1} value={sliderValue} onChange={handleChange} />
            </div>
        </>

    );
}

export default ImageComponent;
