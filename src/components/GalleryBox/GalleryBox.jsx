import React from 'react'
import './GalleryBox.css'

export default function GalleryBox() {
    const demo = document.getElementById('1');
    console.log(demo)

    const filterSelection = (id) => {
        console.log(id);

    }
    const byDefault = (id) => {
        console.log(id);
    }
    return (
        <>
            <div className="main">
                <h2 id="galleryHeading" className="shadowHeading text-white text-center mb-2">Photo Gallery</h2>
                <div id="myBtnContainer">
                    <button id='1' className="btn btn-outline-primary m-1" onclick={byDefault(this.id)}>All</button>
                    <button id="2" className="btn btn-outline-primary m-1" onClick={filterSelection('Campus Experience', this.id)}>Campus Experience</button>
                    <button id="3" className="btn btn-outline-primary m-1" onClick={filterSelection('Infrastructure', this.id)}>Infrastructure</button>
                    <button id="4" className="btn btn-outline-primary m-1" onClick={filterSelection('Food', this.id)}>Food</button>
                    <button id="5" className="btn btn-outline-primary m-1" onClick={filterSelection('Gym', this.id)}>Gym</button>
                    <button id="6" className="btn btn-outline-primary m-1" onClick={filterSelection('Sports', this.id)}>Sports</button>
                    <button id="7" className="btn btn-outline-primary m-1" onClick={filterSelection('Library', this.id)}>Library</button>
                </div>

                <div className="container">

                    <div id="gallery" className="row justify-content-center">

                        {/* <div className="col-md-3 m-2">
                                <div className="card">
                                <img className="card-img-top img-thumbnail" src="Assets/Food (2).jpeg" alt="Card image cap">
                                    <div className="card-body">
                                        <p className="card-text">Campus Experience</p>
                                    </div>
                                </div>
                             </div>  */}

                    </div>
                </div>
            </div>
        </>
    )
}
