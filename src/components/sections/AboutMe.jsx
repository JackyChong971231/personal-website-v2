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

    const AboutMeContent = {
        Title: 'Software Engineer',
        Workplace: 'Hong Kong',
        Bio: 'As a member of the FinTech Innovation Team within a Financial Institution, my area of expertise lies in implementing the Software Development Life Cycle to develop secure, scalable, and efficient financial applications. Through my experience and training, I have developed a deep understanding of the complexities of financial technology and the importance of adhering to industry standards. By leveraging cutting-edge tools and techniques, I am able to deliver high-quality solutions that meet the needs of both my clients and stakeholders.',
        Passion: 'To me, coding is like teaching a computer to think like me, so it can do things the way I want them done. What I love most about coding is the sense of accomplishment I feel when I build something from scratch, and then see it come to life and make a positive impact. I take pride in my work and always strive to write high quality code that performs optimally. Its also a constant learning process, which keeps me motivated and engaged. I find great satisfaction in staying up-to-date with the latest trends and technologies, and I enjoy the challenge of improving the system with these concepts to solve real-world problems.',
        AboutMeObject: {
            Birthday: <div class="col-8">31 Dec 1997</div>,
            Age: <div class="col-8">24 Years Old</div>,
            Phone: <a href="tel:+1-437-660-0469" class="col-8">1-437-660-0469</a>,
            Email: <a href="mailto:kinyechong@outlook.com" class="col-8">kinyechong@outlook.com</a>
        }
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
                    <div class="card ratio ratio-4x3">
                        <img
                            src={r(image)}
                            class="card-img-top"
                            alt="Waterfall"
                        />
                        {/* <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                            </p>
                            <a href="#!" class="btn btn-primary">Button</a>
                        </div> */}
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
    }

    useEffect(() => {
        setImagesComponent(importAll(require.context("../images/AboutMe", false, /\.(png|jpe?g|svg)$/)));
    },[])

    return (
        <>
            <div class="container my-3">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="text-sm-start fw-bold">About <span style={{color: 'var(--gold)'}}>Me</span></h1>
                        <p class="aboutMeShortBio text-sm-start">A {AboutMeContent.Title} based in {AboutMeContent.Workplace}</p>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-sm-5 col-md-4 d-flex align-items-center">  {/*d-flex align-items-center*/}
                        <img class="img-thumbnail rounded-circle w-100 t-50" src={propic}></img>
                    </div>
                    <div class="col-sm-7 col-md-8">
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
                                <h3>I'm a passionate Software Engineer</h3>
                                <p>{AboutMeContent.Bio}</p>
                                <p>{AboutMeContent.Passion}</p>
                            </div>
                        </div>
                        <div class="row border-2 border-top pt-2">
                            {Object.keys(AboutMeContent.AboutMeObject).map((fieldName)=>(
                                <div class="col-12 col-md-6">
                                    <div class="row text-start my-1">
                                        <div class="col-4 fw-bold">{fieldName}</div>
                                        {AboutMeContent.AboutMeObject[fieldName]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5">
                <h1 class="row text-start">Some photos about me</h1>
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