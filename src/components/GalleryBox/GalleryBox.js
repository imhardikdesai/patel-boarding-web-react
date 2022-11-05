import React, { useState, useEffect } from 'react';
import './GalleryBox.css'
// import jsonURL from '../../json/images.json'
import ImageBox from './ImageBox'

export default function GalleryBox() {

    const [myArray, setMyArray] = useState([]);
    const [filterArr, setFilterArr] = useState([]);
    const fetchImages = async () => {
        const uri = 'https://raw.githubusercontent.com/imhardikdesai/Niru-Patel-Boarding-Hostel/master/json/images.json';
        let data = await fetch(uri);
        let images = await data.json();
        setMyArray(images.image);
        setFilterArr(images.image);
    }
    const filterSelection = (str) => {
        if (str === 'All') {
            setFilterArr(myArray);
        } else {
            setFilterArr(myArray.filter((a) => { if (a.imgCateogry === str) { return a } else { return false } }));
        }
    }

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <>
            <div className="main">
                <h2 id="galleryHeading" className="shadowHeading text-white text-center mb-2">Photo Gallery</h2>
                <div id="myBtnContainer">
                    <button id="1" onClick={() => filterSelection('All')} className="btn btn-outline-primary m-1">All</button>
                    <button id="2" onClick={() => filterSelection('Campus Experience')} className="btn btn-outline-primary m-1">Campus Experience</button>
                    <button id="3" onClick={() => filterSelection('Infrastructure')} className="btn btn-outline-primary m-1">Infrastructure</button>
                    <button id="4" onClick={() => filterSelection('Food')} className="btn btn-outline-primary m-1">Food</button >
                    <button id="5" onClick={() => filterSelection('Gym')} className="btn btn-outline-primary m-1">Gym</button>
                    <button id="6" onClick={() => filterSelection('Sports')} className="btn btn-outline-primary m-1">Sports</button>
                    <button id="7" onClick={() => filterSelection('Library')} className="btn btn-outline-primary m-1">Library</button>
                    <button id="8" onClick={() => filterSelection('Event')} className="btn btn-outline-primary m-1">Event</button>
                </div >

                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        {filterArr.map((element) => {
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
