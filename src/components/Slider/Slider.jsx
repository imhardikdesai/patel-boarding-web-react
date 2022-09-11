import React from 'react';
import Slider1 from './../../Assets/slider (1).png';
import Slider2 from './../../Assets/slider (2).jpg';
import Slider3 from './../../Assets/slider (3).jpg';

export default function Slider() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Slider1} className="d-block w-100" alt="Images" />
                    </div>
                    <div className="carousel-item">
                        <img src={Slider2} className="d-block w-100" alt="Images" />
                    </div>
                    <div className="carousel-item">
                        <img src={Slider3} className="d-block w-100" alt="Images" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
