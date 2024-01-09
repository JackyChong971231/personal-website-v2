import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Cover.css";
import ProPic_Landscape from './images/ProPic_Landscape_3.jpg';
import LinkedInProPic from './images/ProPic.jpg';

import React, { useState, useEffect } from 'react';

import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Cover() {
    const CoverContent = {
      'Title': 'Software Engineer',
      // 'LittleBio': 'Previously worked in a FinTech Innovation Team in a Financial Institution, my expertise is to adhere to the Software Development Life Cycle to build secure, scalable and efficient applications.'
      'LittleBio': "I'm a tech enthusiast and software engineer with a knack for building secure, scalable applications. From coding to problem-solving, I love diving into the dynamic world of software development, bringing ideas to life!"
    };

    useEffect(() => {
      const handleScroll = () => {
        requestAnimationFrame(() => {
          const cover = document.querySelector('.Cover');
          const scrollValue = window.scrollY;
    
          // Adjust the speed factor to control the parallax effect
          const greetingOffset = -scrollValue * 0.2;
          const coverpropicOffset = -scrollValue * 0.3;
          const coverOffset = -scrollValue * 0.4;
    
          cover.style.transform = `translate3d(0, ${-coverOffset}px, 0)`;
          cover.querySelector('.Greeting').style.transform = `translate3d(0, ${greetingOffset}px, 0)`;
          cover.querySelector('.CoverProPic').style.transform = `translate3d(0, ${coverpropicOffset}px, 0)`;
        })
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <>
          <div className='outerCover'>
            <div class='Cover'>
              <img class="CoverProPic" src={ProPic_Landscape}></img>
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
