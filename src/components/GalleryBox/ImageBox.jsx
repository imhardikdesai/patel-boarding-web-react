import React from 'react'
// import demoUrl from './../../Assets/demo1.jpg'

export default function ImageBox(props) {
    return (
        <>
            <div className="card">
                <img className="card-img-top img-thumbnail" src={props.imgSource} alt="Card cap" />
                <div className="card-body">
                    <p className="card-text">{props.imgCategory}</p>
                </div>
            </div>
        </>
    )
}
