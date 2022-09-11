import React from 'react'
import './GalleryBox.css'

export default function GalleryBox() {
    return (
        <>
            <div class="main">
                <h2 id="galleryHeading" class="shadowHeading text-white text-center mb-2">Photo Gallery</h2>
                <div id="myBtnContainer">
                    <button id="1" class="btn btn-outline-primary m-1" onclick="byDefault(this.id)">All</button>
                    <button id="2" class="btn btn-outline-primary m-1"
                        onclick="filterSelection('Campus Experience',this.id)">Campus
                        Experience</button>
                    <button id="3" class="btn btn-outline-primary m-1"
                        onclick="filterSelection('Infrastructure',this.id)">Infrastructure</button>
                    <button id="4" class="btn btn-outline-primary m-1" onclick="filterSelection('Food',this.id)">Food</button>
                    <button id="5" class="btn btn-outline-primary m-1" onclick="filterSelection('Gym',this.id)">Gym</button>
                    <button id="6" class="btn btn-outline-primary m-1"
                        onclick="filterSelection('Sports',this.id)">Sports</button>
                    <button id="7" class="btn btn-outline-primary m-1"
                        onclick="filterSelection('Library',this.id)">Library</button>
                </div>

                <div class="container">

                    <div id="gallery" class="row justify-content-center">

                        {/* <div class="col-md-3 m-2">
                                <div class="card">
                                <img class="card-img-top img-thumbnail" src="Assets/Food (2).jpeg" alt="Card image cap">
                                    <div class="card-body">
                                        <p class="card-text">Campus Experience</p>
                                    </div>
                                </div>
                             </div>  */}

                    </div>
                </div>
            </div>
        </>
    )
}
