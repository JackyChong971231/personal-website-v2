import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Cover.css";
import ProPic_Landscape from './images/ProPic_Landscape_3.jpg';
import ProPic_Landscape_Me from './images/ProPic_Landscape_3_me.png';
import LinkedInProPic from './images/ProPic.jpg';

import React, { useState, useEffect } from 'react';

import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Cover() {
    const CoverContent = {
      'Title': 'Software Engineer',
      // 'LittleBio': 'Previously worked in a FinTech Innovation Team in a Financial Institution, my expertise is to adhere to the Software Development Life Cycle to build secure, scalable and efficient applications.'
      'LittleBio': "I'm a tech enthusiast and software engineer with a knack for building secure, scalable applications. From coding to problem-solving, I love diving into the dynamic world of software development, bringing ideas to life!"
    };

    useEffect(() => {
      gsap.timeline({scrollTrigger:{
        trigger:'.outerCover',
        start: 'top top',
        end: 'bottom top',
        ease: "none",
        scrub: 1,
        // markers: true
    }})
        .fromTo('.Greeting', {y: 0}, {y: 400}, 0)
        .fromTo('.CoverProPic--Bg', {y: 0}, {y: 300}, 0)
        .fromTo('.CoverProPic--Me', {y: 0}, {y: 300}, 0)
    }, []);

    return (
        <>
          <div className='outerCover'>
            <div class='Cover'>
              {/* <img class="CoverProPic CoverProPic--Me" src={ProPic_Landscape_Me}></img> */}
              <img class="CoverProPic CoverProPic--Bg" src={ProPic_Landscape}></img>
              <div class="Greeting text-start">
                <h1>I'm a <span>{CoverContent.Title}</span></h1>
                <h1><big>Jacky Chong</big></h1>
                <p>{CoverContent.LittleBio}</p>
                <a class="LearnMore btn rounded-pill mt-2 px-3" href="#NavBar">Learn More</a>
              </div>
            </div>
          </div>


        </>
    );
}
