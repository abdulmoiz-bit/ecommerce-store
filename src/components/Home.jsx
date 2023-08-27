import React from 'react'
import Products from './Products';
import imageone from "../images/image-one.jpg"
import imagetwo from "../images/image-two.jpg"
import imagethree from "../images/image-three.jpg"
//import imagefour from "../assets/image-four.jpg"


const Home = () => {
    return (
        <div className="hero">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item carousel-image active" style={{ backgroundImage: `url(${imageone})` }}>
                        
                    </div>
                    <div className="carousel-item carousel-image" style={{ backgroundImage: `url(${imagetwo})` }}>
                        
                    </div>
                    <div className="carousel-item carousel-image" style={{ backgroundImage: `url(${imagethree})` }}>
                      
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Products />
        </div>
    )
}

export default Home;