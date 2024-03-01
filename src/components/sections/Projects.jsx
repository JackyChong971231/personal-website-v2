import React, { useState, useEffect, useRef } from 'react';

import ikeaCloneImg from '../../assets/images/screenshot-ikea-clone.png';
import personalWebsiteImg from '../../assets/images/screenshot-personal-website.png';
import vscodeBg from '../../assets/images/vscode.jpg';
import vscodeLineRight from '../../assets/images/vscode1.png';
import vscodeLineLeft from '../../assets/images/vscode2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faLock } from "@fortawesome/free-solid-svg-icons";

import './Projects.css';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from '../common/sectionHeader';
gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: 'Personal Website',
        special: 'Responsive',
        url: 'This site',
        image: personalWebsiteImg,
        description: 'This website serves to provide a concise overview of my skills, achievements, and work experience.',
        framework: 'ReactJS, Bootstrap, Jenkins',
        language: 'JavaScript, HTML and CSS'
    },
    {
        title: 'IKEA Clone',
        special: 'Responsive',
        url: 'http://ckyjacky.ca:5001',
        image: ikeaCloneImg,
        description: 'My IKEA clone project demonstrates my full-stack development skills by seamlessly integrating frontend aesthetics with backend functionality.',
        framework: 'ReactJS, Bootstrap, Spring Boot, MySQL, Jenkins',
        language: 'JavaScript, Java, SQL'
    }
]

export function Projects () {
    function expandProject(id) {
        gsap.fromTo('#project'+id, {maxHeight: 0}, {
            duration: 1.25, 
            maxHeight: 1000,
            ease: "expo", 
            overwrite: "auto"
        });

    }

    useEffect(() => {
        gsap.timeline({scrollTrigger:{
            trigger:'#projectsSection',
            start: 'top 40%',
            end: 'bottom 40%',
            scrub: 1
        }})
            .fromTo('.vscodeLeft', {y: -100}, {y: -300}, 0)
            .fromTo('.vscodeRight', {y: -300}, {y: -100}, 0)
    },[])

    return (
        <div id='projectsSection' className='py-4'>
            <div className='project__bg'>
                <img className='vscodeBg' src={vscodeBg}></img>
                <div className='vscodeLeft__container pb-5 ps-3'><img className='vscodeLeft mt-3' src={vscodeLineLeft}></img></div>
                <div className='vscodeRight__container pb-5 ps-3'><img className='vscodeRight mt-3' src={vscodeLineRight}></img></div>
            </div>
            <div className='projects-section__inner-container row py-3'>
                <div className='project__header px-4 pt-4'>
                    <SectionHeader 
                    section='Work'
                    title='My recent projects'
                    description='I have been highly passionate about programming and these are the projects to showcase my skills'/>
                </div>
                <div className='project__content px-3'>
                    <div className='all-projects__container row'>
                        {projectsData.map((eachProjectData, i) => (
                            <div className=' col-md-6 col-12 px-3'>
                                <div className='each-project__container h-md-100'>
                                    <div className='each-project-safari-header'>
                                        <div className='each-project-top-wrap'>
                                            <div className='each-project-url-wrap'>
                                                <FontAwesomeIcon icon={faLock} />
                                                <p>{eachProjectData.url}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='each-project-content'>
                                        <img className='each-project-website' src={eachProjectData.image}/>
                                    </div>
                                
                                    <div className='each-project-hidden-info px-3' id={'project'+i}>
                                        <div className='row py-4'>
                                            <div className='
                                            col-12 order-2 
                                            col-sm-4 order-sm-1 
                                            col-md-12 order-md-2 
                                            col-lg-4 order-lg-1 
                                            text-start'>
                                                <h5>Framework</h5>
                                                <p>{eachProjectData.framework}</p>
                                                <h5>Language</h5>
                                                <p>{eachProjectData.language}</p>
                                                <h5>Live Site</h5>
                                                <p>{eachProjectData.url}</p>
                                            </div>
                                            <div className='
                                            col-12 order-1 
                                            col-sm-8 order-sm-2 
                                            col-md-12 order-md-1 
                                            col-lg-8 order-lg-2 
                                            text-start'>
                                                <h3>
                                                    <span>{eachProjectData.title}</span>
                                                    <p><mark className='gold'><small>{eachProjectData.special}</small></mark></p>
                                                </h3>
                                                <p>{eachProjectData.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='each-project-expand-btn-wrapper'>
                                        <button className='each-project-expand-btn'
                                        onClick={() => {expandProject(i)}}>
                                        </button>
                                        <FontAwesomeIcon className='each-project-expand-arrow' icon={faArrowDown} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}