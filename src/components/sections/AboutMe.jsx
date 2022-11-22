import React, { useState, useEffect, useRef } from 'react';
import propic from '../images/ProPic.jpg';

// import { f } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './AboutMe.css';

function spliceIntoChunks(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

export function AboutMe() {
    const [imagesComponent, setImagesComponent] = useState([]);

    const AboutMeObject = {
        Birthday: '31 Dec 1997',
        Age: '24 Years Old',
        Phone: '+852 9239 1019'

    }
    const ContactPoint = {
        Instagram:  {icon: faInstagram, url: "https://www.instagram.com/cggyee"},
        LinkedIn:   {icon: faLinkedin,  url: "https://www.linkedin.com/in/jacky-chong-kin-ye"}
    }

    function importAll(r) {
        const imagesChunkedArray = spliceIntoChunks(r.keys(), 3)
        let imagesContainer = [];
        imagesChunkedArray.forEach((chunk) => {
            const tempChunkImages = chunk.map((image, index) => 
                <div class={(index==0)? "col-md-4": "col-md-4 d-none d-md-block"}>
                    <div class="card">
                        <img
                            src={r(image)}
                            class="card-img-top"
                            alt="Waterfall"
                        />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                            </p>
                            <a href="#!" class="btn btn-primary">Button</a>
                        </div>
                    </div>
                </div>
            )
            imagesContainer.push(
                <div class={(imagesContainer.length==0)? "carousel-item active": "carousel-item"}>
                    <div class="container">
                        <div class="row">
                            {tempChunkImages}
                        </div>
                    </div>
                </div>
            )
        });
        r.keys().forEach((item, index) => {
            console.log(item);
        })
        return imagesContainer
        // <img key={index.toString(10)} ref={el => imagesRef.current[index.toString(10)] = el} class="AboutMeImages" src={r(item)} />; 
    }

    useEffect(() => {
        // Note from the docs -> Warning: The arguments passed to require.context must be literals!
        
        setImagesComponent(importAll(require.context("../images/AboutMe", false, /\.(png|jpe?g|svg)$/)));
    },[])

    // useEffect(() => {
    //     setTimeoutTimer(setTimeout(() => {
    //         let setTo = imageIndexCurrent + imageIndexIncrement
    //         if (setTo >= imagesAmount) {setTo = 0}
    //         else if (setTo < 0 ) {setTo = imagesAmount -1}
    //         setImageIndexCurrent(setTo);
    //         // images.unshift(images.pop());
    //         // images.shift();
    //         imagesRef.current[setTo.toString(10)].style.display = "none"
    //     },2000));
    //     return () => {
    //         clearTimeout(timeoutTimer);
    //     }
    // }, [imageIndexCurrent])

    

    return (
        <>
            <div class="container my-3">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="text-sm-start fw-bold">About Me</h1>
                        <p class="text-sm-start">A Software Engineer based in Hong Kong</p>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-sm-5">  {/*d-flex align-items-center*/}
                        <img class="img-thumbnail rounded-circle p-3" src={propic}></img>
                    </div>
                    <div class="col-sm-7">
                        <div class="row my-3 my-sm-0">
                            <div class="d-flex align-items-center">
                                {Object.keys(ContactPoint).map((eachApp)=>(
                                    <a
                                    class="btn btn-dark mx-1"
                                    href={ContactPoint[eachApp].url}
                                    target="_blank"
                                    role="button">
                                        <FontAwesomeIcon icon={ContactPoint[eachApp].icon} />
                                    </a>
                                ))}
                                <a class="btn btn-dark mx-1"> Download CV</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="text-start pt-3">
                                <h3>I'M Jacky Chong</h3>
                                <p>Madison Blackstone is a director of brand marketing, with experience managing global teams and multimillion-dollar campaigns. Her background in brand strategy, visual design, and account management informs her mindful but competitive approach.</p>
                            </div>
                        </div>
                        <div class="row border-2 border-top pt-2">
                            {Object.keys(AboutMeObject).map((fieldName)=>(
                                <div class="col-12 col-md-6">
                                    <div class="row text-start my-1">
                                        <div class="col-4 fw-bold">{fieldName}</div>
                                        <div class="col-8">{AboutMeObject[fieldName]}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5">
                <h1 class="row text-start">Some photos about me</h1>
                {/* <p>{imageIndexCurrent}</p>
                <button onClick={() => {
                    clearTimeout(timeoutTimer);
                    setImageIndexIncrement(-1);
                    setImageIndexCurrent((imageIndexCurrent-1 < 0)? Object.keys(images).length-1: imageIndexCurrent-1)}
                }>previous</button>
                <button onClick={() => {
                    clearTimeout(timeoutTimer);
                    setImageIndexIncrement(1);
                    setImageIndexCurrent((imageIndexCurrent+1 >= Object.keys(images).length)? 0: imageIndexCurrent+1)
                }
                }>next</button>
                <div class="ImagesSlideShow">
                    {images}
                </div> */}
                {/* <!-- Carousel wrapper --> */}
                <div
                id="carouselMultiItemExample"
                class="carousel slide carousel-dark"
                data-bs-ride="carousel"
                >
                {/* <!-- Controls --> */}
                <div class="d-flex justify-content-center mb-4">
                    <button class="btn btn-light mx-2" type="button" data-bs-target="#carouselMultiItemExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="false"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="btn btn-light mx-2" type="button" data-bs-target="#carouselMultiItemExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="false"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                {/* <!-- Inner --> */}
                <div class="carousel-inner py-4">
                    {imagesComponent}
                </div>
                {/* <!-- Inner --> */}
                </div>
                {/* <!-- Carousel wrapper --> */}
            </div>
        </>
    )
}