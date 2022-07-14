import React from 'react'

export default function Card({image, date, heading, mainHeading, paragraph}) {
    return (
        <div className="card margazine-card ">
        <img src={image} alt="" className="large-img small-img" />
        <div className="inner-date d-flex ">
            <a href="">{date}</a>
            <a href="" className="link">{heading}</a>
        </div>  
        <h2>{mainHeading}</h2>
        <p>{paragraph}</p>
        </div>
    )
}