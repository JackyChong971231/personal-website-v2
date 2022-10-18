import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProPic_Landscape from './images/ProPic_Landscape.jpg';

import React, { useState, useEffect } from 'react';

import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function HomePage() {
    return (
        <>
            <img class="container-fluid" src={ProPic_Landscape}></img>
        </>
    );
}
