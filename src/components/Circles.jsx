import React from 'react';
import './Circles.css';

const Circles = (props) => {
    return(
        <div className="Circles">
            {props.circles.map((circle, idx) => 
            <div
                key={circle}
                className="Circles div"
                style={{
                    backgroundColor: props.selectedCircleIdx === idx ? 'white' : 'crimson',
                    color: props.selectedCircleIdx === idx ? 'slategray' : 'white',
                    border: props.selectedCircleIdx === idx ? '5px solid slategray' : ' 5px solid crimson'
                }}
            >
                {`${props.circles[idx]}`}
            </div>
            )}
        </div>
    )
}

export default Circles;