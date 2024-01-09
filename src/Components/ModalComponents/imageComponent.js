import React, { useState } from 'react';

function ImageComponent({ activityArray, Name, sliderValue, setSliderValue  }) {

    const handleChange = (event) => {
        setSliderValue(parseInt(event.target.value));
    };

    return (
        <>
            <div className="row text-center">
                <p>Frame: {sliderValue + 1} / {activityArray.length}  ({activityArray[sliderValue]}) </p>
            </div>
            <div className="row">
                <div className="img-container" style={{ maxHeight: '80vh', overflow: 'hidden' }}>
                    <img
                        src={process.env.REACT_APP_SERVER_HOSTED_ON + '/' + Name + '/' + activityArray[sliderValue]}
                        alt={`Image ${sliderValue}`}
                        className="img-fluid"
                    />
                </div>
            </div>
            <div className="row my-3">
                <input className='w-100' type="range" min={0} max={activityArray.length - 1} step={1} value={sliderValue} onChange={handleChange} />
            </div>
        </>

    );
}

export default ImageComponent;
