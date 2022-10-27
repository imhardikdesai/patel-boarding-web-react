import React, { useState, useEffect } from 'react';
import './GalleryBox.css'
// import jsonURL from '../../json/images.json'
import ImageBox from './ImageBox'

export default function GalleryBox() {

    const [myArray, setMyArray] = useState([]);
    const fetchImages = async () => {
        const uri = 'https://raw.githubusercontent.com/imhardikdesai/Niru-Patel-Boarding-Hostel/master/json/images.json';
        let data = await fetch(uri);
        let images = await data.json();
        setMyArray(images.image);
    }
    const filterSelection = () => {

    }

    useEffect(() => {
        fetchImages();
    }, []);
    return (
        <>
            <div className="main">
                <h2 id="galleryHeading" className="shadowHeading text-white text-center mb-2">Photo Gallery</h2>
                <div id="myBtnContainer">
                    <button id="1" className="btn btn-outline-primary m-1">All</button>
                    <button id="2" className="btn btn-outline-primary m-1">Campus Experience</button>
                    <button id="3" className="btn btn-outline-primary m-1">Infrastructure</button>
                    <button id="4" className="btn btn-outline-primary m-1">Food</button >
                    <button id="5" className="btn btn-outline-primary m-1">Gym</button>
                    <button id="6" className="btn btn-outline-primary m-1">Sports</button>
                    <button id="7" className="btn btn-outline-primary m-1">Library</button>
                </div >

                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        {myArray.map((element) => {
                            return <div key={element.imgSource} className="col-md-3 m-2">
                                <ImageBox imgSource={element.imgSource} imgCategory={element.imgCateogry} />
                            </div>
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}
