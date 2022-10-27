import React from "react"

const CarouselImage = ({ image }) => {
    return (
        <div className="carousel-item active">
            <img src={image} className="d-block w-100" alt="slider image" />
        </div>
    )
}

export default function Carousel({ images }) {
    return (
        <div id="carouselExampleControls" className="carousel slide mb-4" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((image, key) => <CarouselImage {...{ image, key }} /> )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}