import React, { useState, useEffect, useRef } from 'react';

import ikeaCloneImg from '../../assets/images/3-projects/screenshot-ikea-clone.png';
import personalWebsiteImg from '../../assets/images/3-projects/screenshot-personal-website.png';
import vscodeBg from '../../assets/images/3-projects/vscode.jpg';
import vscodeLineRight from '../../assets/images/3-projects/vscode1.png';
import vscodeLineLeft from '../../assets/images/3-projects/vscode2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faLock, faXmark } from "@fortawesome/free-solid-svg-icons";

import './Projects.css';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from '../../components/section-header/sectionHeader';
import { EachProject } from './EachProject';
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
    const [projectHiddenDetail, setProjectHiddenDetail] = useState(null);
    const [showHiddenDetail, setShowHiddenDetail] = useState(false);

    useEffect(() => {
        gsap.timeline({scrollTrigger:{
            trigger:'#projectsSection',
            start: 'top 40%',
            end: 'bottom 40%',
            scrub: 1
        }})
            .fromTo('.vscodeLeft', {y: -100}, {y: -300}, 0)
            .fromTo('.vscodeRight', {y: -300}, {y: -100}, 0)
        
        gsap.timeline({scrollTrigger: {
            trigger: '#projectsSection',
            start: 'top 75%',
            end: 'top 50%',
            ease: 'power2',
            scrub: 1
        }})
            .fromTo('#AboutMe', {opacity: 1}, {opacity: 0}, 0)
            .fromTo('.App', {backgroundColor: 'rgb(226, 226, 226)'}, {backgroundColor: 'black'}, 0)
            .fromTo('#projectsSection', {opacity: 0, top: '-40vh'}, {opacity: 1, top: '-60vh'}, 0)
            .fromTo('.project_bg', {opacity: 0}, {opacity: 1}, 0)
        
        gsap.fromTo("#AboutMe", {
            zIndex: 99,
            },
            {
            zIndex: 0,
            ease: "power2",
            scrollTrigger: {
                trigger: "#projectsSection",
                start: "top 55%", // the default values
                end: "top 55%",
                scrub: true,
                // markers: true
            }, 
            });
    },[])

    const hideProjectContentHiddenDetail = () => {
        setShowHiddenDetail(false)
    }

    const showProjectContentHiddenDetail = (component) => {
        console.log(component)
        setProjectHiddenDetail(component)
        setShowHiddenDetail(true)
    }

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
                            <EachProject eachProjectData={eachProjectData} showProjectContentHiddenDetail={showProjectContentHiddenDetail} index={i} />
                        ))}
                    </div>
                </div>

            </div>
            <div className={
            (showHiddenDetail)? 'project__content__hidden-detail-container project__content__hidden-detail-container--show': 
            'project__content__hidden-detail-container'}>
                <div className='project__content__hidden-detail-wrapper'>
                    <button className='project__content__hidden-detail-close-btn'
                    onClick={hideProjectContentHiddenDetail}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    {projectHiddenDetail}
                </div>
            </div>
        </div>
    )
}