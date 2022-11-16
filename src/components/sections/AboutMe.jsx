import React, { useState, useEffect } from 'react';
import propic from '../images/ProPic.jpg';

// import { f } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './AboutMe.css';

export function AboutMe() {
    const [imageIndexPrevious, setImageIndexPrevious] = useState(0);
    const [imageIndexCurrent, setImageIndexCurrent] = useState(1);
    const [timeoutTimer, setTimeoutTimer] = useState(0);

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
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }

    // Note from the docs -> Warning: The arguments passed to require.context must be literals!
    const images = importAll(require.context("../images/AboutMe", false, /\.(png|jpe?g|svg)$/));
    

    useEffect(() => {
        setTimeoutTimer(setTimeout(() => {
            const tempCurrent = imageIndexCurrent;
            setImageIndexCurrent(imageIndexCurrent + imageIndexCurrent-imageIndexPrevious);
            setImageIndexPrevious(tempCurrent);
            console.log(tempCurrent, imageIndexCurrent)
        },2000));
        return () => {
            clearTimeout(timeoutTimer);
        }
    }, [imageIndexCurrent])

    

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
                        <img class="img-thumbnail" src={propic}></img>
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
                <p>{imageIndexCurrent}</p>
                <button onClick={() => {
                    clearTimeout(timeoutTimer);
                    setImageIndexPrevious(imageIndexCurrent);
                    setImageIndexCurrent(imageIndexCurrent-1)}
                }>previous</button>
                <button onClick={() => {
                    clearTimeout(timeoutTimer);
                    setImageIndexPrevious(imageIndexCurrent);
                    setImageIndexCurrent(imageIndexCurrent+1)
                }
                }>next</button>
                <div class="ImagesSlideShow">
                    {Object.keys(images).map((image) => (
                    <img class="AboutMeImages mx-3" src={images[image]} />
                    ))}
                </div>
                {/* <div id="carouselExampleIndicators" class="row container carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        {Object.keys(images).map((image, index) => (
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index.toString()} class={index==0? "active": null} aria-current={index==0? "true": null} aria-label={"Slide "+ (index+1).toString()}></button>
                        ))}
                    </div>
                    <div class="carousel-inner">
                        {Object.keys(images).map((image, index) => (
                        <div class={index==0 ? "carousel-item active": "carousel-item"} data-bs-interval="2000">
                            <img style={{width: 100}} src={images[image]} class="d-block w-100" alt="..."/>
                        </div>
                        ))}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */}
            </div>
        </>
    )
}