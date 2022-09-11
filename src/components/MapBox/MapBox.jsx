import React from 'react'
import './MapBox.css'

export default function MapBox() {
    return (
        <>
            <div className="main">
                <h2 id="galleryHeading" className="shadowHeading text-white text-center mb-2">Contact Us</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe title='map' width="100%" height="500" id="gmap_canvas"
                                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=G.M.%20Vanani%20'niru'%20PATEL%20BOARDING+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="phoneNumber bg-black bg-opacity-25 p-2 mb-2">
                                <h3 className="text-white text-center">Phone Number</h3>
                                <p className="text-white text-center"> 0278-256-8139</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
