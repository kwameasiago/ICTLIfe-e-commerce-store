import React from 'react';
import './Carousel.scss';

const Carousel = (props) => {
    return (
        <div className="row carousel">
            <div className="col-md-12 ">
                <div className="image-display">
                    <span id="amazing">Amazing</span>
                    <button className="navigators btn fa fa-arrow-left" onClick={props.carouselPrev}> </button>
                    
                    <img src={props.image} alt="slide image" className={props.animation}/>
                    <button className="navigators btn fa fa-arrow-right" onClick={props.carouselNext}> </button>
                    <span id="store">E-commerce</span>
                </div>
            </div>
        </div>
    )
}

export default Carousel;