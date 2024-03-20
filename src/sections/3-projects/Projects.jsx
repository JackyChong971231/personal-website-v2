import React, { useState, useEffect, useRef } from 'react';

import ikeaCloneImg from '../../assets/images/3-projects/screenshot-ikea-clone.png';
import personalWebsiteImg from '../../assets/images/3-projects/screenshot-personal-website.png';
import fypImg from '../../assets/images/3-projects/screenshot-fyp.jpg';
import elec3300Img from '../../assets/images/3-projects/sEMG-based-gesture-recognition.JPG';
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
        title: 'IKEA Clone',
        special: 'Full-Stack, Responsive, CI/CD',
        url: 'http://ckyjacky.ca:5001',
        toWebsiteBtnText: 'Go to live site',
        skillInvolved: {
            framework: 'ReactJS, Bootstrap, Spring Boot, MySQL, Jenkins',
            language: 'JavaScript, Java, SQL'
        },
        image: ikeaCloneImg,
        description: 'My IKEA clone project demonstrates my full-stack development skills by seamlessly integrating frontend aesthetics with backend functionality.',
    },
    {
        title: 'Portfolio Website',
        special: 'Scroll Animation, Responsive, CI/CD',
        url: 'This site',
        toWebsiteBtnText: 'Go to live site',
        skillInvolved: {
            framework: 'ReactJS, GSAP, Bootstrap, Jenkins',
            language: 'JavaScript, HTML and CSS'
        },
        image: personalWebsiteImg,
        description: 'This website serves to provide a concise overview of my skills, achievements, and work experience.',
    },
    {
        title: 'sEMG Based Gesture Recognition',
        special: 'Final Year Project Grade: A+, Deep Learning, GUI',
        url: 'https://youtu.be/BvVN7xhin_0',
        toWebsiteBtnText: 'Go to demo video',
        skillInvolved: {
            'Deep Learning': 'PyTorch LSTM, PyQT5',
            'GUI': 'PyQT5, to feed the sEMG signal collected by the microcontroller to the deep learning model and control the virtual character in Unity',
            language: 'Python'
        },
        image: fypImg,
        description: 'In this project, our objective is to craft a prototype of a singular instrumental device with dual functionality: recording sEMG signals for data collection and neural network training, as well as interfacing seamlessly with computers on an individual basis. Our aim is to achieve this within an economically feasible package while upholding performance standards akin to existing solutions. By project completion, we envision translating sEMG input signal patterns into the movement of a virtual character. Ultimately, our goal is to democratize access to motion capture devices and prosthetic implants, thus reducing barriers to entry in these domains.',
    },
    {
        title: 'Auto-following Car',
        special: 'PCB Design + Firmware Design',
        url: 'https://youtu.be/iAUTrvcoG1g',
        toWebsiteBtnText: 'Go to demo site',
        skillInvolved: {
            hardware: 'STM32F103VET6 microcontroller, ultrasonic sensor, motor, infrared transmitter and receiver',
            language: 'C'
        },
        image: elec3300Img,
        description: 'The project involves two key aspects: enabling the cart to autonomously follow us using ultrasonic sensors and implementing obstacle detection and avoidance mechanisms. Ultrasonic sensors placed strategically ensure the cart maintains a constant distance from us, while infrared sensors detect obstacles, prompting the cart to maneuver accordingly. Additionally, a bottom-mounted ultrasonic sensor detects potential emergencies, triggering alerts if necessary. Challenges include motor force limitations and managing interference among multiple sensors.'
    }
]

export function Projects () {
    const [projectHiddenDetail, setProjectHiddenDetail] = useState(null);
    const [showHiddenDetail, setShowHiddenDetail] = useState(false);
    const [viewProjectGoToUrlBtn, setViewProjectGoToUrlBtn] = useState({
        btnText: null,
        url: null
    })

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

    const showProjectContentHiddenDetail = (component, eachProjectData) => {
        setProjectHiddenDetail(component)
        setViewProjectGoToUrlBtn({
            btnText: eachProjectData.toWebsiteBtnText,
            url: eachProjectData.url
        })
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
            (showHiddenDetail)? 'project__content__hidden-detail-outermost-container project__content__hidden-detail-outermost-container--show': 
            'project__content__hidden-detail-outermost-container'}>
                <div className='project__content__hidden-detail-wrapper'>
                    <div className='project__content__hidden-detail-close-btn-wrapper'>
                        <button className='project__content__hidden-detail-close-btn'
                        onClick={hideProjectContentHiddenDetail}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <a href={viewProjectGoToUrlBtn.url} target="_blank">
                            <span>{viewProjectGoToUrlBtn.btnText}</span>
                        </a>
                    </div>
                    {projectHiddenDetail}
                </div>
            </div>
        </div>
    )
}