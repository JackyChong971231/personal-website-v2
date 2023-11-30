import React, { useState, useEffect, useRef } from 'react';

// import { f } from "@fortawesome/free-solid-svg-icons";

import projectManagement from '../images/Skills/projectManagement.png'
import firmware from '../images/Skills/cpu.png'
import solutionDesign from '../images/Skills/innovation.png'
import systemDeveloper from '../images/Skills/systemDeveloper.png'
import graduation from '../images/Skills/graduation.png'

import './Skills.css';

const expertise = {
    'Software Project Management': {
        logo: projectManagement,
        achievements: [
            'Defined project scope, objectives, and approach for a blockchain project in close collaboration with business users and vendors',
            'Led cloud migration for WhatsApp Business API, conducting security risk assessments and managing contract follow-up with compliance teams and suppliers',
            'Introduced OCR technology to enhance the customer journey, following a successful tender evaluation process'
        ]
    },
    'Embedded System Design': {
        logo: firmware,
        achievements: [
            'Developed embedded firmware, and bootloaders for high-speed optical transceivers (400 Gbps/800 Gbps) using C/C++',
            'Designed and maintained a Python PyQt 5 GUI-based proprietary Firmware Upload Software'
        ]
    },
    'System Analysis & Solution Design': {
        logo: solutionDesign,
        achievements: [
            'Communicated with vendors, developed a Proof of Concept program, and presented to the business users and finance team how Hyperledger Fabric Blockchain can be used to streamline the Loan Application Process while maintaining the beauty of the existing workflow'
        ]
    },
    'Developer': {
        logo: systemDeveloper,
        achievements: [
            'Designed and developed a Python PyQt 5 GUI-based Hardware Diagnostic UI to facilitate efficient collaboration among PCB Design Engineer, Firmware Design Engineer, and Test Engineer in optical transceiver manufacturing',
            'Maintained Django Backend Server to handle thousands of messages from 40 WhatsApp Numbers on a daily basis'
        ]
    }
}

const workingExperience = {
    'PrimeCredit Limited': {
        'Total Duration': 'Jun 2022 - Apr 2023',
        'Positions': [
            {
                'Title': 'Software Engineer – FinTech Innovation',
                'Duration': 'Jun 2022 - Apr 2023',
                'Description': [
                <li>Developed Proof of Concept program presented to business users the potential of <mark class='gold'>Hyperledger Fabric Blockchain</mark> in streamlining Loan Application Process</li>,
                <li>Diagnosed and resolved technical issues, added new features, and performed upgrades and deployments for the <mark class='gold'>backend server - Django</mark> for <mark class='gold'>WhatsApp Business API</mark></li>,
                <li>Kickstarted the migration from On Premises to Cloud API for <mark class='gold'>WhatsApp Business API</mark></li>,
                <li style={{paddingLeft: '10%'}}>Guided vendors and business users to define the project scope and outline project requirements</li>,
                <li style={{paddingLeft: '10%'}}>Conducted contract and risk assessments with project stakeholders in compliance with the company’s regulation</li>,
                <li>Revamped functions within a <mark class='gold'>Java-based Customer Data Platform - Spring Boot</mark></li>]
            }
        ]
    },
    'Cloud Light Technology Limited': {
        'Total Duration': 'June 2020 - June 2022',
        'Positions': [
            {
                'Title': 'Firmware Design Engineer',
                'Duration': 'Jul 2021 - June 2022',
                'Description': [
                <li>Designed, developed and tested <mark class='gold'>software, embedded firmware and bootloaders</mark> for <mark class='gold'>400G & 800G optical transceivers in C/C++</mark></li>,
                <li style={{paddingLeft: '10%'}}>PMIC, design and develop drivers for I2C, SRAM, SDRAM, ADCs, Flash, GPIOs, ISR and peripheral ICs like TIA, CDRs</li>,
                <li>Developed and maintained the proprietary <mark class='gold'>Firmware Upload Software - PyQt5 GUI</mark></li>,
                <li>Managed and developed flexible firmware architecture to best facilitate firmware modularization</li>,
                <li>Worked closely with testing team, hardware team and chip vendors to validate hardware assisting technical leads and fellows with architecture discussions and investigating design tradeoffs</li>]
            },
            {
                'Title': 'Optical Product Engineer',
                'Duration': 'June 2020 - Jul 2021',
                'Description': [
                <li>Developed <mark class='gold'>Python based Hardware Diagnostic UI and testing software</mark> for products/components evaluation and demo</li>,
                <li style={{paddingLeft: '10%'}}><mark class='gold'>GUI (mainly PyQt5 and Tkinter)</mark> for different types of projects and automation programmes for firmware verification</li>,
                <li>Performed different types of <mark class='gold'>PCB Flying Probe tests and failure and data analysis</mark> for design and yield improvement</li>,
                <li>Worked with PCB and Firmware Design Engineers to ensure designs are optimized for production and are compatible with other elements of the design</li>]
            }
        ]
    },
    'The Hongkong Electric Co., Ltd.': {
        'Total Duration': 'Jul 2019 - Aug 2019',
        'Positions': [
            {
                'Title': 'Vacation Trainee (Projects Division)',
                'Duration': 'Jul 2019 - Aug 2019',
                'Description': [
                <li>Participated in studying the concepts behind some design schematics and operation theories</li>,
                <li>Control System, Generation Plant Power Supply Distribution, Transmission Substations Design and Network etc</li>,
                <li>Studied and verified the cybersecurity measures done on the newly built HKE Lamma Unit 10</li>,
                <li style={{paddingLeft: '10%'}}>NERC-CIP Standard Comparison</li>]
            }
        ]
    }
}

export function Skills() {
    const [workingExperienceComponent, setWorkingExperienceComponent] = useState([]);
    const [languagesComponent, setLanguagesComponent] = useState([]);
    const [professionalsComponent, setProfessionalsComponent] = useState([]);
    const [selectedExpertise, setSelectedExpertise] = useState('Software Project Management');
    const [minimumHeight, setMinimumHeight] = useState('0px')
    const ref = useRef(null)

    useEffect(() => {
        function handleResize() {
            setMinimumHeight(ref.current.clientHeight.toString()+'px');
        }

        let tempWorkingExperienceComponent = [];
        for (var company in workingExperience) {
            const jobsInCompany = workingExperience[company]['Positions']
            if (jobsInCompany.length > 1) {tempWorkingExperienceComponent.push(
                <li class="timeline-item mb-2 text-start">
                <span class="timeline-icon" style={{width: "31px", height: "31px", left: "-48px"}}>
                    <i class="fas fa-rocket text-primary fa-sm fa-fw"></i>
                </span>
                <h5 class="fw-bold">{company}</h5>
                <p class="fw-bold" style={{fontWeight: 'bold'}}>{workingExperience[company]['Total Duration']}</p>
            </li>
            )}

            workingExperience[company]['Positions'].forEach(position => {
                const dotStyle = (jobsInCompany.length < 2)? {width: "31px", height: "31px", left: "-48px"}: {width: "15px", height: "15px", left: "-40px"}
                tempWorkingExperienceComponent.push(
                    <li class="timeline-item mb-5 text-start">
                    <span class="timeline-icon" style={dotStyle}>
                        <i class="fas fa-rocket text-primary fa-sm fa-fw w-25"></i>
                    </span>
                    {(jobsInCompany.length < 2)? <h5 class="fw-bold" style={{fontWeight: 'bold'}}>{company}</h5>: null}
                    <p class=" mb-2 fw-bold" style={{color: 'var(--gold)'}}>{position['Title']}</p>
                    <p class=" mb-2 fw-bold">{position['Duration']}</p>
                    <ul class="" style={{color: 'lightgray', listStylePosition: 'inside'}}>
                        {position['Description']}
                    </ul>
                </li>
                )
            })
        }
        setWorkingExperienceComponent(tempWorkingExperienceComponent);

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
    },[])

    return (
        <>
            <div class="container-fluid">
                <div class="row skills out no-gutters pt-3">
                    <h4 class="px-4 pt-4" >“You can't connect the dots looking forward; you can only connect them looking backwards"</h4>
                    <h4 class="text-end pt-2 px-4 pb-4" >Steve Jobs</h4>
                </div>
                <div class="row skills in no-gutters">
                    <div>
                        <div class="container px-4">
                            <div id="skillsSection" class="row">
                                <div class="graduationImage px-3 col-12 col-md-6">
                                    <p class="text-start pt-4 mb-0" style={{color: 'var(--gold)'}}>Qualitifaction</p>
                                    <h1 class="text-start pb-4" style={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>Education</h1>
                                    <img src={graduation}></img>
                                    <h4 class="py-2">Bachelor of Engineering in Electronic Engineering</h4>
                                    <p>The Hong Kong University of Science and Technology</p>
                                    <p>Sep 2016 - Nov 2020</p>
                                </div>
                                <div class="mySkills px-3 text-start col-12 col-md-6">
                                <p class="text-start pt-4 mb-0" style={{color: 'var(--gold)'}}>Computing</p>
                                    <h1 class="text-start pb-4" style={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>My Skill</h1>
                                    <div class="row">
                                        <div class="col-6">
                                            <h4>Professionals</h4>
                                            <ul class="" style={{listStylePosition: 'outside'}}>{professionalsComponent}</ul>
                                        </div>
                                        <div class="col-6">
                                            <h4>Languages</h4>
                                            <ul class="" style={{listStylePosition: 'outside'}}>{languagesComponent}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container px-4">
                            <div class="row justify-content-center">
                                {/* <h1 class="text-start col-12 py-4" style={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>Projects</h1> */}
                            </div>
                        </div>
                        <div class="container px-4">
                            <div class="row justify-content-center">
                                <h1 class="text-start col-12 py-4" style={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>Expertise</h1>
                                {Object.keys(expertise).map((eachExpertise, index) => (
                                    <div class="col-6 col-md-3 col-xl-2 p-3">
                                        <div key={index} class={(eachExpertise===selectedExpertise) ? 
                                            "border border-warning rounded p-2 pb-0 h-100" :
                                            "border rounded p-2 pb-0 h-100"
                                            } style={{transition: '0.5s'}} onMouseOver={() => setSelectedExpertise(eachExpertise)} onClick={() => setSelectedExpertise(eachExpertise)}>
                                            <img class="expertiseIcon p-3" src={expertise[eachExpertise]['logo']}></img>
                                            <p class="">{eachExpertise}</p>
                                        </div>
                                    </div>
                                ))}
                                <div class="ExpertiseDescription col-12 col-lg-8 mt-4 ">
                                    <p><large>{selectedExpertise}</large></p>
                                    <h2>Achievements</h2>
                                    <div class="expertiseDescriptionContainer pb-1" ref={ref} style={{ minHeight: minimumHeight }}>
                                        {expertise[selectedExpertise]['achievements'].map((eachAchievement, index) => (
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
                <div id="workingExperience" class="row working out working no-gutters justify-content-center">
                    <div class="col-xl-8 col-md-10 col-12">
                        <p class="text-start px-4 pt-4 mb-0" style={{color: 'var(--gold)'}}>All Companies</p>
                        <h1 class="text-start px-4 pb-4" style={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>Working Experience</h1>
                        {/* <!-- Section: Timeline --> */}
                        <section class="px-4">
                            <ul class="timeline-with-icons">
                                {workingExperienceComponent}
                            </ul>
                        </section>
                        {/* <!-- Section: Timeline --> */}
                    </div>

                </div>
            </div>
        </>
    )
}