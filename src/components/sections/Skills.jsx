import React, { useState, useEffect, useRef } from 'react';
import propic from '../images/ProPic.jpg';

// import { f } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hkust from '../images/Skills/HKUST.jpeg'
import projectManagement from '../images/Skills/projectManagement.png'
import firmware from '../images/Skills/cpu.png'
import solutionDesign from '../images/Skills/innovation.png'
import systemDeveloper from '../images/Skills/systemDeveloper.png'

import './Skills.css';


export function Skills() {
    const [expertiseComponent, setExpertiseComponent] = useState([]);

    const expertise = {
        'Project Management': projectManagement,
        'Embedded System Design': firmware,
        'System Analysis & Solution Design': solutionDesign,
        'System Developer': systemDeveloper
    }

    useEffect(() => {
        let tempExpertiseComponent = [];
        for (var key in expertise) {
            tempExpertiseComponent.push(
                <div class="col-6 col-sm-3 col-lg-2 p-2">
                        <div class="border border-white rounded p-2 pb-0 h-100">
                            <img class="expertiseIcon p-3" src={expertise[key]}></img>
                            <p class="">{key}</p>
                        </div>
                </div>
            )
        }


        setExpertiseComponent(tempExpertiseComponent);
    },[])

    return (
        <>
            <div class="container-fluid">
                <div class="row skills out no-gutters mt-3">
                    <h4 class="px-4 pt-4" >“You can't connect the dots looking forward; you can only connect them looking backwards"</h4>
                    <h4 class="text-end pt-2 px-4 pb-4" >Steve Jobs</h4>
                </div>
                <div class="row skills in no-gutters">
                    <h1 class="text-start px-4 py-4">Expertise</h1>
                    <div class="container px-4">
                        <div class="row justify-content-center">
                            {expertiseComponent}
                            <div class="col-12 col-lg-8  mt-4">
                                <h4>Description</h4>
                                <p>While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs. </p>
                            </div>
                        </div>
                    </div>
                    <h1 class="text-start px-4 py-4">Education</h1>
                    <div class="container px-4">
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