import React, { useState, useEffect } from 'react';
import propic from '../images/ProPic.jpg';

// import { f } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './AboutMe.css';

export function AboutMe() {
    const AboutMeObject = {
        Birthday: '31 Dec 1997',
        Age: '24 Years Old'
    }

    const ContactPoint = {
        Instagram:  {icon: faInstagram, url: "https://www.instagram.com/cggyee"},
        LinkedIn:   {icon: faLinkedin,  url: "https://www.linkedin.com/in/jacky-chong-kin-ye"}
    }


    return (
        <>
            <div class="container my-3">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="text-sm-start text-bold">About Me</h1>
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
                                    <div class="row text-start">
                                        <div class="col-5">{fieldName}</div>
                                        <div class="col-7">{AboutMeObject[fieldName]}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}