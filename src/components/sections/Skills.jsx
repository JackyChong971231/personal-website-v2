import React, { useState, useEffect, useRef } from 'react';
import propic from '../images/ProPic.jpg';

// import { f } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hkust from '../images/Skills/HKUST.jpeg'

import './Skills.css';

function spliceIntoChunks(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

export function Skills() {

    return (
        <>
            <div class="container-fluid">
                <div class="row skills out no-gutters mt-3">
                    <h4 class="px-4 pt-4" >“You can't connect the dots looking forward; you can only connect them looking backwards"</h4>
                    <h4 class="text-end pt-2 px-4 pb-4" >Steve Jobs</h4>
                </div>
                <div class="row skills in no-gutters">
                    <h1 class="text-start px-5 py-3">Skills</h1>
                    <div class="container">
                        <button class="btn btn-primary col-6 col-sm-3">Soft Skill</button>
                        <button class="btn btn-primary col-6 col-sm-3">Hard Skill</button>
                        <button class="btn btn-primary col-6 col-sm-3">Programming Skill</button>
                        <button class="btn btn-primary col-6 col-sm-3"></button>
                    </div>
                    <h1 class="text-start px-5 py-3">Education</h1>
                    <div class="container px-5">
                        <div class="row">
                            <div class="hkustImage col-12 col-md-5">
                                <img src={hkust}></img>
                            </div>
                            <div class="text-start col-12 col-md-7">
                                <h5>Bachelor of Engineering in Electronic Engineering</h5>
                                <p>The Hong Kong University of Science and Technology</p>
                                <p>Sep 2016 - Nov 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}