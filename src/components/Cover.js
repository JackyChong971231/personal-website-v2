import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Cover.css";
import ProPic_Landscape from './images/ProPic_Landscape_3_downscale.jpg';
// import ProPic_Landscape_Me from './images/ProPic_Landscape_3_me.png';
import LinkedInProPic from './images/ProPic.jpg';

import React, { useState, useEffect } from 'react';

import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavBar } from './NavBar';
gsap.registerPlugin(ScrollTrigger);

export function Cover({setNavbarInUsed}) {
    const CoverContent = {
      'Title': 'Software Engineer',
      // 'LittleBio': 'Previously worked in a FinTech Innovation Team in a Financial Institution, my expertise is to adhere to the Software Development Life Cycle to build secure, scalable and efficient applications.'
      // 'LittleBio': "I'm a tech enthusiast and software engineer with a knack for building secure, scalable applications. From coding to problem-solving, I love diving into the dynamic world of software development, bringing ideas to life!"
      'LittleBio': "I develop end-to-end software solutions, handling frontend, backend, database, and deployment within the software development life cycle."
    };

    useEffect(() => {
    //   gsap.timeline({scrollTrigger:{
    //     trigger:'.outerCover',
    //     start: 'top top',
    //     end: 'bottom top',
    //     ease: "linear",
    //     scrub: true,
    //     // markers: true
    // }})
    //     .fromTo('.Greeting', {y: 0}, {y: -200})
    //     .fromTo('.CoverProPic', {yPercent: 0}, {yPercent: 20})
      gsap.to('.greeting--name', {left: '0rem', opacity: '1', duration: 2});
      gsap.to('.greeting--job-title', {left: '0rem', duration: 2});
      gsap.to('.greeting--bio', {left: '0rem', opacity: '1', duration: 2});
      gsap.to('.LearnMore', {top: '0rem', opacity: '1', duration: 1}, 1.5);

      gsap.fromTo(".Greeting", {
        y: 0,
      },
      {
        y: -200,
        ease: "linear",
        scrollTrigger: {
          trigger: ".outerCover",
          start: "top top", // the default values
          end: "bottom top",
          scrub: true,
          // markers: true
        }, 
      });
      
      gsap.fromTo(".CoverProPic", {
        yPercent: 0,
      },
      {
        yPercent: 20,
        ease: "linear",
        scrollTrigger: {
          trigger: ".outerCover",
          start: "top top", // the default values
          end: "bottom top",
          scrub: true,
          // markers: true
        }, 
      });
    }, []);

    return (
        <>
          <div className='outerCover'>
            <div class='Cover'>
              {/* <img class="CoverProPic CoverProPic--Me" src={ProPic_Landscape_Me}></img> */}
              <img class="CoverProPic CoverProPic--Bg" src={ProPic_Landscape}></img>
              <div class="Greeting text-start">
                <h1 className='greeting--name'>Jacky Chong</h1>
                <div className='greeting--job-title-container'>
                  <h1 className='greeting--job-title'>{CoverContent.Title}</h1>
                </div>
                <p className='greeting--bio'>{CoverContent.LittleBio}</p>
                <a class="LearnMore btn rounded-pill mt-2 px-3" href="#NavBar">Learn More</a>
              </div>
            </div>
            {/* <NavBar setNavbarInUsed={setNavbarInUsed}/> */}
          </div>


        </>
    );
}
