import React, { useState } from 'react';
import axios from 'axios';
import { NameToTimeElapsed } from '../../Scripts/TimeFunctions';

function ImageComponent({ activityArray, Name, sliderValue, setSliderValue }) {

    const handleChange = (event) => {
        setSliderValue(parseInt(event.target.value));
    };

    return (
        <>
            <div className="row text-center">
                <hr />
                <p>Frame: {sliderValue + 1} / {activityArray.length}  ({activityArray[sliderValue]}) </p>
                <kbd>{NameToTimeElapsed(activityArray[sliderValue])}</kbd>
                <hr />
            </div>
            <div className="row">
                <div className="img-container" style={{ maxHeight: '80vh', overflow: 'hidden' }}>
                    <img
                        src={axios.defaults.baseURL + '/' + Name + '/' + activityArray[sliderValue]}
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
