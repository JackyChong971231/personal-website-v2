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
      'LittleBio': 'As a former member of the FinTech Innovation Team in a Financial Institution, my expertise is to adhere to the Software Development Life Cycle to build secure, scalable and efficient financial applications.'
    };
    return (
        <>
          <div class='Cover'>
            <img class="CoverProPic" src={ProPic_Landscape}></img>
            <div class="Greeting text-start">
              <h1>I'm a <span>{CoverContent.Title}</span></h1>
              <h1><big>Jacky Chong</big></h1>
              <p>{CoverContent.LittleBio}</p>
              <a class="LearnMore btn rounded-pill mt-2 px-3" href="#NavBar">Learn More</a>
            </div>
          </div>
        </>
    );
}
