import React from 'react';
import './Carousel.scss';

const Carousel = (props) => {
    return (
        <div className="row carousel">
            <div className="col-md-12 ">
                <div className="image-display">
                    <span id="amazing">Amazing</span>
                    <span className="navigators btn btn-default">Prev</span>
                    <img src={props.image} alt="" />
                    <span  className="navigators btn btn-default">Next</span>
                    <span id="store">e-commerce</span>
                </div>
            </div>
        </div>
    )
}

export default Carousel;