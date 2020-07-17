import React from 'react';
import './CircleSelector.css'

const CircleSelctor = (props) => {
    return(
        <div className="CircleSelector">
            {props.circles.map((circle, idx) => 
            <button
                key={circle}
                className="CircleSelector button"
                style={{
                    backgroundColor: props.selectedCircleIdx === idx ? 'white' : 'slateGray',
                    color: props.selectedCircleIdx === idx ? 'crimson' : 'white',
                    border: props.selectedCircleIdx === idx ? 'none' : 'slateGray'
                }}
                onClick={() => props.handleSelection(idx)}
            >
                {props.selectedCircleIdx === idx ? `CIRCLE ${props.circles[idx]} SELECTED` : `SELECT CIRCLE ${props.circles[idx]}`}
            </button>
            )}
        </div>
    )
}

export default CircleSelctor;