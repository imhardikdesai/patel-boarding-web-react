import React from 'react'
import './Facilities.css'
import homeImage from './../../Assets/home.ico';
import booksImage from './../../Assets/books.ico';
import kitchenimage from './../../Assets/chopping-board-and-knife.ico';
import gymImage from './../../Assets/fitness-gym.ico';
import wifiImage from './../../Assets/wifi.ico';
import gamesImage from './../../Assets/games.ico';

export default function Facilities() {
    return (
        <>
            <section className="container d-flex flex-column justify-content-center align-content-center">
                <div className="container text-center mt-4 ">
                    <h1 className="shadowHeading fw-semibold text-white">
                        FACILITIES AT NIRU PATEL BOARDING
                    </h1>
                </div>

                <div className="row p-3">
                    <div className="col-md-4 my-1">
                        <div className="card">
                            <div className="card-body">
                                <img className="subIcons" src={homeImage} alt="content" />
                                <h2 className="text-lg text-gray-900 font-medium title-font mx-1 mb-2 my-2">LARGE ROOMS</h2>
                                <p className="leading-relaxed text-base">4 Bed Along With Cupboard and Table in Each Room - Total 150+ Rooms Available.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-1">
                        <div className="card">
                            <div className="card-body">
                                <img className="subIcons" src={booksImage} alt="content" />
                                <h2 className="text-lg text-gray-900 font-medium title-font mx-1 mb-2 my-2">LIBRARY</h2>
                                <p className="leading-relaxed text-base">200+ Books Available like Novels, General Knowladge, Literary also
                                    Computer Lab Available</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-1">
                        <div className="card">
                            <div className="card-body">
                                <img className="subIcons" src={kitchenimage} alt="content" />
                                <h2 className="text-lg text-gray-900 font-medium title-font mx-1 mb-2 my-2">KITCHEN</h2>
                                <p className="leading-relaxed text-base">Serving Hygienic Food To Each Student. Taking Care of Health.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row p-3">

                    <div className="col-md-4 my-1">
                        <div className="card">
                            <div className="card-body">
                                <img className="subIcons" src={gymImage} alt="content" />
                                <h2 className="text-lg text-gray-900 font-medium title-font mx-1 mb-2 my-2">GYM</h2>
                                <p className="leading-relaxed text-base">We understand that high quality gym equipment and accessories are a
                                    must!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-1">
                        <div className="card">
                            <div className="card-body">
                                <img className="subIcons" src={wifiImage} alt="content" />
                                <h2 className="text-lg text-gray-900 font-medium title-font mx-1 mb-2 my-2">Wi-Fi</h2>
                                <p className="leading-relaxed text-base">High Speed Internet Connection Available in Campus for Each Student</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-1">
                        <div className="card">
                            <div className="card-body">
                                <img className="subIcons" src={gamesImage} alt="content" />
                                <h2 className="text-lg text-gray-900 font-medium title-font mx-1 mb-2 my-2">GAMES</h2>
                                <p className="leading-relaxed text-base">Indoor and Outdoor Games Available Like Carrom, Chess, Vollyball,
                                    Cricket etc.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
