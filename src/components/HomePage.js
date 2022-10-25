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
            <div class="Greeting">
              <h1>Hello</h1>
              <h3>My name is Jacky</h3>
            </div>
          </div>
        </>
    );
}
