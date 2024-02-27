import React, { useState, useEffect, useRef } from 'react';

import ikeaCloneImg from '../../assets/images/screenshot-ikea-clone.png';
import personalWebsiteImg from '../../assets/images/screenshot-personal-website.png';
import vscodeBg from '../../assets/images/vscode.jpg';
import vscodeLineRight from '../../assets/images/vscode1.png';
import vscodeLineLeft from '../../assets/images/vscode2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from "@fortawesome/free-solid-svg-icons";

import './Projects.css';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from '../common/sectionHeader';
gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: 'Personal Website',
        url: 'This site',
        image: personalWebsiteImg,
        description: 'This website serves to provide a concise overview of my skills, achievements, and work experience.',
        framework: 'ReactJS, Bootstrap',
        language: 'JavaScript, HTML and CSS'
    },
    {
        title: 'IKEA Clone',
        url: 'http://ckyjacky.ca:5001',
        image: ikeaCloneImg,
        description: 'My IKEA clone project demonstrates my full-stack development skills by seamlessly integrating frontend aesthetics with backend functionality.',
        framework: 'ReactJS, Bootstrap, Spring Boot, MySQL',
        language: 'JavaScript, Java, SQL'
    }
]

export function Projects () {
    function animateFrom(elem) {
        gsap.fromTo(elem, {maxHeight: 0}, {
            duration: 1.25, 
            maxHeight: 100,
            ease: "expo", 
            overwrite: "auto"
        });
    }
    
    function hide(elem) {
        gsap.fromTo(elem, {maxHeight: 100}, {
            duration: 1.25, 
            maxHeight: 0,
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

        // gsap.utils.toArray(".each-project-hidden-info").forEach(function(elem) {
        //     hide(elem); // assure that the element is hidden when scrolled into view
            
        //     ScrollTrigger.create({
        //         trigger: elem,
        //         start: 'top 70%',
        //         end: 'bottom 30%',
        //         markers: true,
        //         onEnter: function() { animateFrom(elem) }, 
        //         onEnterBack: function() { animateFrom(elem) },
        //         onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        //     });
        //     });
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
                    {/* <h1>My <mark class='gold'>projects</mark></h1> */}
                    <SectionHeader 
                    section='Work'
                    title='My recent projects'
                    description='I have been highly passionate about programming and these are the projects to showcase my skills'/>
                    {/* <p>below are my projects</p> */}
                </div>
                <div className='project__content px-3'>
                    <div className='all-projects__container row'>
                        {projectsData.map((eachProjectData, i) => (
                            <div className=' col-md-6 col-12 px-3'>
                                <div className='each-project__container'>
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
                                    <div className='each-project-hidden-info px-3'>
                                        <div className='row py-4'>
                                            <div className='col-12 col-sm-4 col-md-12 col-lg-4 text-start'>
                                                <h5>Framework</h5>
                                                <p>{eachProjectData.framework}</p>
                                                <h5>Language</h5>
                                                <p>{eachProjectData.language}</p>
                                                <h5>Live Site</h5>
                                                <p>{eachProjectData.url}</p>
                                            </div>
                                            <div className='col-12 col-sm-8 col-md-12 col-lg-8 text-start'>
                                                <h3>{eachProjectData.title}</h3>
                                                <p>{eachProjectData.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className='each-project__header py-2'>
                                        <h5 className='ms-3 mb-1'>{i+1+'.  '+eachProjectData.title}</h5>
                                        <a className='ms-3 mb-1' href={eachProjectData.url}>{eachProjectData.url}</a>
                                    </div>
                                    <img className='each-project__image'
                                    src={eachProjectData.image} alt="Website Thumbnail"></img>
                                    
                                    <div className='each-project__description mt-2'>
                                        <p>{eachProjectData.description}</p>
                                    </div>
                                    <div className='each-project__language'>
                                        <p>Language: {eachProjectData.language}</p>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}