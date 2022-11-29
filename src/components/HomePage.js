import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./HomePage.css";
import ProPic_Landscape from './images/ProPic_Landscape_3.jpg';
import LinkedInProPic from './images/ProPic.jpg';

import React, { useState, useEffect } from 'react';

import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function HomePage() {
    return (
        <>
          <div class='Cover'>
            <img class="CoverProPic" src={ProPic_Landscape}></img>
            <div class="Greeting text-start">
              <h1>I'm <span>Software Engineer</span></h1>
              <h1>Jacky Chong</h1>
              <p><small>See all books authored by Ardoth Hardin Wilkerson, including His Mountain Moved Faith, and Chasing the Echoes, and more on ThriftBooks.com.</small></p>
              <a class="LearnMore btn rounded-pill mt-2 px-3" href="#NavBar">Learn More</a>
            </div>
          </div>
        </>
    );
}
