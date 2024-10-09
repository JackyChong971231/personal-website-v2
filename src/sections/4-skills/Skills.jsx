import React, { useState, useEffect, useRef } from 'react';

// import { f } from "@fortawesome/free-solid-svg-icons";

import projectManagement from '../../assets/images/4-skills/projectManagement.png'
import firmware from '../../assets/images/4-skills/cpu.png'
import solutionDesign from '../../assets/images/4-skills/innovation.png'
import systemDeveloper from '../../assets/images/4-skills/systemDeveloper.png'
import graduation from '../../assets/images/4-skills/graduation.png'
import ustLogo from '../../assets/images/4-skills/ustFull_1.png';
import skillsBgImg from '../../assets/images/4-skills/skillBackground.jpg';

import dotsMp4 from '../../assets/images/4-skills/dots.mp4';
import './Skills.css';

import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from '../../components/section-header/sectionHeader';

import { SkillsContent, CertificateContent, technicalSkillsContent } from "../../assets/content.js";

import { EachCert } from './eachCert.jsx';
gsap.registerPlugin(ScrollTrigger);



export function Skills() {
    const [languagesComponent, setLanguagesComponent] = useState([]);
    const [professionalsComponent, setProfessionalsComponent] = useState([]);
    const [selectedExpertise, setSelectedExpertise] = useState('Developer');
    const [minimumHeight, setMinimumHeight] = useState('0px');
    const ref = useRef(null);
    const [expertiseOrder, setExpertiseOrder] = useState([
        'Software Project Management',
        'Embedded System Design',
        'System Analysis & Solution Design',
        'Developer'
    ]);
    const [intervalID, setIntervalID] = useState(0)
    const [isExpertiseLoop, setIsExpertiseLoop] = useState(true);
    const [isExpertiseLoopManual, setIsExpertiseLoopManual] = useState(true);

    useEffect(() => {
        // clearInterval(intervalID);
        function handleResize() {
            setMinimumHeight(ref.current.clientHeight.toString()+'px');
        }

        let tempLanguage = [];
        ['Python','React Native','HTML + CSS','JavaScript','SQL','Java','C'].forEach(Language => {
            tempLanguage.push(
                <li class="text-start ps-1 mb-1">{Language}</li>
            )
        })
        setLanguagesComponent(tempLanguage)

        let tempProfessionals = [];
        ['Blockchain','WhatsApp Business API','Backend Server','Deep Learning'].forEach(Professional => {
            tempProfessionals.push(
                <li class="text-start ps-1 mb-1">{Professional}</li>
            )
        })
        setProfessionalsComponent(tempProfessionals);

        setMinimumHeight(ref.current.clientHeight.toString()+'px');
        window.addEventListener('resize', handleResize)
        
        gsap.timeline({scrollTrigger:{
            trigger:'#skillsSection',
            start: "top 50%"
        }})
            .fromTo('.uniLogo__gradHat', {width: '100%', duration: 4}, {width: '0%'}, 0)
            .fromTo('.uniLogo__hkustLogo', {width: '0%', duration: 4}, {width: '100%'}, 0)

        gsap.timeline({scrollTrigger: {
            trigger: '#Skills',
            start: 'top 75%',
            end: 'top 40%',
            ease: 'power2',
            scrub: 1
        }})
            .fromTo('#projectsSection', {opacity: 1}, {opacity: 0}, 0)
            // .fromTo('.App', {backgroundColor: 'black'}, {backgroundColor: 'rgb(226, 226, 226)'}, 0)
            .fromTo('#Skills', {opacity: 0, top: '-40vh'}, {opacity: 1, top: '-60vh' }, 0)
        
        gsap.timeline({scrollTrigger: {
            trigger: '#Skills',
            start: 'top 50%',
            end: 'top 40%',
            ease: 'power2',
            scrub: 1
        }})
            .fromTo('#projectsSection', {zIndex: 98}, {zIndex: 0}, 0)    
        },[])
    
    useEffect(() => {
        if (isExpertiseLoopManual) {startExpertiseLoop()} else {pauseExpertiseLoop()};
    },[isExpertiseLoopManual])

    const startExpertiseLoop = () => {
        if (isExpertiseLoopManual) {
            clearInterval(intervalID);
            setIntervalID(setInterval(() => {
                // setCurrentIndex((prevIndex) => (prevIndex + (isMobile? 1: 3)) % Object.keys(dummy).length);
    
                setExpertiseOrder(prevExpertiseOrder => [
                    ...prevExpertiseOrder.slice(1),
                    ...prevExpertiseOrder.slice(0,1)
                ]);
    
            }, 3000));
            setIsExpertiseLoop(true)
        }
    }

    const pauseExpertiseLoop = () => {
        clearInterval(intervalID);
        setIsExpertiseLoop(false)
    }

    const viewExpertise = (selectedExpertise) => {
        let defaultOrder = ['Developer',
        'Software Project Management',
        'Embedded System Design',
        'System Analysis & Solution Design']
        while (defaultOrder[0] !== selectedExpertise) {
            defaultOrder.push(defaultOrder.shift())
        }
        setExpertiseOrder(defaultOrder);
        setIsExpertiseLoop(false);
        
    }

    const loopManualToggle = () => {
        setIsExpertiseLoopManual(prevState => !prevState)
    }

    return (
        <>
            <div className='skills__bg'>
                <img className='skills__bg__img' src={skillsBgImg}></img>
            </div>
            <div class="skills-outer-container mt-4">
                <div class="row skills in no-gutters">
                    <div>
                        <div class="container px-4">
                            <div id="skillsSection" class="row">
                                <div class="graduationImage px-3 col-12 col-md-6">
                                    <p class="text-start pt-4 mb-0" style={{color: 'var(--gold)'}}>Qualifaction</p>
                                    <h1 class="text-start pb-4" style={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>Education</h1>
                                    <div className='graduation__content__card'>
                                        <div className='grad__cert grad__cert__outermost'>
                                            <div className='grad__cert grad__cert__middle'>
                                                <div className='grad__cert grad__cert__innermost'>
                                            
                                                    <div className='uniLogo__container'>
                                                        <img className='uniLogo uniLogo__gradHat' src={graduation}></img>
                                                        <img className='uniLogo uniLogo__hkustLogo' src={ustLogo}></img>
                                                    </div>
                                                    <a className='qs_ranking' href='https://www.topuniversities.com/university-subject-rankings/electrical-electronic-engineering/2020?page=1'><mark class='gold'>Ranked #22</mark> in QS World University Rankings for Electronic Engineering in 2020</a>
                                                    <p className="degree__name pt-2">Bachelor of Engineering in Electronic Engineering</p>
                                                    <p><small>Sep 2016 - Nov 2020</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 class="text-start py-4" style={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>Licenses & certifications</h1>
                                    <div className='certificates__container'>
                                        {Object.keys(CertificateContent).map((eachCertificate, idx) => (
                                            <EachCert eachCertTitle={eachCertificate} eachCertContent={CertificateContent[eachCertificate]} />
                                        ))}
                                    </div>
                                </div>
                                <div class="mySkills px-3 text-start col-12 col-md-6 mt-5 mt-md-0">
                                <p class="text-start pt-4 mb-0" style={{color: 'var(--gold)'}}>Computing</p>
                                    <h1 class="text-start pb-4" style={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>My Skill</h1>
                                    <div class="row">
                                        {Object.keys(technicalSkillsContent).map((eachSkillCategory, index) => (    
                                            <div class="col-6 py-3">
                                                <h4>{eachSkillCategory}</h4>
                                                <ul className='m-0' style={{listStylePosition: 'outside', listStyleType: 'circle'}}>
                                                    {Object.keys(technicalSkillsContent[eachSkillCategory].content).map((eachContent, idx) => (
                                                        <li>{eachContent}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container mt-5 py-3">
                            <SectionHeader 
                            section='Expertise'
                            title='Achievements'
                            // description={expertiseOrder.map(expertiseName => (
                            //     <span className='px-3'>{expertiseName}</span>
                            // ))}
                            description='Developer  |  Software Project Management  |  Embeeded System Design  |  System Analysis & Solution Design'
                            />
                            <div className='expertise-loop-indicator'
                            onClick={loopManualToggle}>
                                <div className={
                                (isExpertiseLoop)?'circular-animation circular-animation--play':
                                'circular-animation circular-animation--pause'}>
                                    <div className='circular-animation-circle'>
                                    </div>
                                </div>    
                                <FontAwesomeIcon className='expertise-loop-icon' icon={(isExpertiseLoop)?faPause:faPlay} />
                            </div>
                            <div class="row justify-content-center"
                            onMouseEnter={pauseExpertiseLoop}
                            onMouseLeave={startExpertiseLoop}>
                                {Object.keys(SkillsContent).map((eachExpertise, index) => (
                                    <div class="col-6 col-md-3 col-xl-2 p-3">
                                        <div key={index} class={(eachExpertise===expertiseOrder[0]) ? 
                                            "each-expertise each-expertise--hover p-2 pb-0 h-100" :
                                            "each-expertise p-2 pb-0 h-100"
                                            }
                                            onMouseOver={() => viewExpertise(eachExpertise)} 
                                            onClick={() => viewExpertise(eachExpertise)}>
                                            <img class="expertiseIcon p-3" src={SkillsContent[eachExpertise]['logo']}></img>
                                            <p class="">{eachExpertise}</p>
                                        </div>
                                    </div>
                                ))}
                                <div class="ExpertiseDescription col-12 col-lg-8 mt-4 ">
                                    <p><large>{expertiseOrder[0]}</large></p>
                                    <h2>Achievements</h2>
                                    <div class="expertiseDescriptionContainer pb-1" ref={ref} style={{ minHeight: minimumHeight }}>
                                        {SkillsContent[expertiseOrder[0]]['achievements'].map((eachAchievement, index) => (
                                            <div className='row'>
                                                <p className='col-1'>&#10070;</p>
                                                <p className='col-11' align="justify" key={index}><small>{eachAchievement}</small></p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}