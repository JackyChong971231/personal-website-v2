import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Cover.css";

import ProPic_Landscape from '../../assets/images/1-cover/ProPic_Landscape_3_downscale.jpg';

import React, { useState, useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CoverContent } from "../../assets/content.js";

gsap.registerPlugin(ScrollTrigger);

export function Cover({setNavbarInUsed}) {
    useEffect(() => {

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
      
      gsap.timeline({scrollTrigger:{
        trigger:'.outerCover',
        start: "bottom bottom", // the default values
        end: "bottom 70%",
        ease: "linear",
        scrub: 1,
      }})
          .fromTo('.outerCover', {opacity: 1}, {opacity: 0}, 0)

      gsap.to('.about-me-img-container', {scrollTrigger: ".about-me-img-container", left: 0, opacity: 1, duration: 2});
      gsap.to('.about-me-text-container', {scrollTrigger: ".about-me-text-container", left: 0, opacity: 1, duration: 2});


      gsap.fromTo(".outerCover", {
        zIndex: 100,
      },
      {
        zIndex: 0,
        ease: "linear",
        scrollTrigger: {
          trigger: ".outerCover",
          start: "bottom 70%", // the default values
          end: "bottom 70%",
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
