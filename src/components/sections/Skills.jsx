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
import graduation from '../images/Skills/graduation.png'

import './Skills.css';


export function Skills() {
    const [expertiseComponent, setExpertiseComponent] = useState([]);
    const [workingExperienceComponent, setWorkingExperienceComponent] = useState([]);
    const [languagesComponent, setLanguagesComponent] = useState([]);
    const [professionalsComponent, setProfessionalsComponent] = useState([]);

    const expertise = {
        'Project Management': projectManagement,
        'Embedded System Design': firmware,
        'System Analysis & Solution Design': solutionDesign,
        'System Developer': systemDeveloper
    }

    const workingExperience = {
        'PrimeCredit Limited': {
            'Total Duration': 'Jun 2022 - Present',
            'Positions': [
                {
                    'Title': 'Software Engineer – FinTech Innovation',
                    'Duration': 'Jun 2022 - Present',
                    'Description': '\
                    • Participating in complete software development life cycle from analysis, design, building, testing, deployment, production support and continuous enhancement of FinTech solutions and relevant documentation\n\
                    • Conducting research and implementing Proof-of-Concept for FinTech solutions\n\
                    • Working closely with development team and business partners to build secure, scalable and efficient financial applications\n\
                    • Troubleshooting technical issues with offsite team/vendor and performing program tuning for performance enhancement/assurance'
                }
            ]
        },
        'Cloud Light Technology Limited': {
            'Total Duration': 'June 2020 - June 2022',
            'Positions': [
                {
                    'Title': 'Firmware Design Engineer',
                    'Duration': 'Jul 2021 - June 2022',
                    'Description': '\
                    • Designed, developed and tested software, embedded firmware and bootloaders for 400G/ 800G optical transceivers in C/C++\n\
                    \to PMIC, design and develop drivers for I2C, SRAM, SDRAM, ADCs, Flash, GPIOs, ISR and peripheral ICs like TIA, CDRs\n\
                    • Responsible for developing and maintaining the proprietary Firmware Upload Software (PyQt5 GUI)\n\
                    • Managed and developed flexible firmware architecture to best facilitate firmware modularization\n\
                    • Worked closely with testing team, hardware team and chip vendors to validate hardware assisting technical leads and fellows with architecture discussions and investigating design tradeoffs'
                },
                {
                    'Title': 'Optical Product Engineer',
                    'Duration': 'June 2020 - Jul 2021',
                    'Description': '\
                    • Developed Python based testing programs and software for products/components evaluation and demo\n\
                    \to GUI (mainly Tkinter and Kivy) for different types of projects and automation programmes for firmware verification\n\
                    • Performed different types of tests and failure and data analysis for design and yield improvement\n\
                    • Worked with hardware and firmware team to verify new design and characterize new products in Alpha/ Beta stage\n\
                    • Modified and probed the circuit boards to perform different studies and tests regarding the optical transceivers\n\
                    • Offered debugging sessions and application supports for different suppliers and customers'
                }
            ]
        },
        'The Hongkong Electric Co., Ltd.': {
            'Total Duration': 'Jul 2019 - Aug 2019',
            'Positions': [
                {
                    'Title': 'Vacation Trainee (Projects Division)',
                    'Duration': 'Jul 2019 - Aug 2019',
                    'Description': '• Participated in studying the concepts behind some design schematics and operation theories\n\
                    \to Control System, Generation Plant Power Supply Distribution, Transmission Substations Design and Network etc\n\
                    • Assisted in a project - Studying and verifying the cybersecurity measures done on the newly built HKE Lamma Unit 10\n\
                    \to NERC-CIP Standard Comparison'
                }
            ]
        }
    }

    useEffect(() => {
        let tempExpertiseComponent = [];
        for (var key in expertise) {
            tempExpertiseComponent.push(
                <div class="col-6 col-md-3 col-xl-2 p-3">
                        <div class="border rounded p-2 pb-0 h-100" style={{borderColor: "rgb(217, 194, 137)"}}>
                            <img class="expertiseIcon p-3" src={expertise[key]}></img>
                            <p class="">{key}</p>
                        </div>
                </div>
            )
        }
        setExpertiseComponent(tempExpertiseComponent);

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
                    <p class="" style={{color: 'lightgray'}}>
                        {position['Description']}
                    </p>
                </li>
                )
            })
        }
        setWorkingExperienceComponent(tempWorkingExperienceComponent);

        let tempLanguage = [];
        ['Python','C','Java','HTML + CSS','JavaScript','SQL'].forEach(Language => {
            tempLanguage.push(
                <p class="text-start ps-3 mb-1">- {Language}</p>
            )
        })
        setLanguagesComponent(tempLanguage)

        let tempProfessionals = [];
        ['Blockchain','WhatsApp','Deep Learning'].forEach(Language => {
            tempProfessionals.push(
                <p class="text-start ps-3 mb-1">- {Language}</p>
            )
        })
        setProfessionalsComponent(tempProfessionals)
    },[])

    return (
        <>
            <div class="container-fluid">
                <div class="row skills out no-gutters mt-3">
                    <h4 class="px-4 pt-4" >“You can't connect the dots looking forward; you can only connect them looking backwards"</h4>
                    <h4 class="text-end pt-2 px-4 pb-4" >Steve Jobs</h4>
                </div>
                <div class="row skills in no-gutters">
                    <div>
                        <div class="container px-4">
                            <div class="row">
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
                                            {professionalsComponent}
                                        </div>
                                        <div class="col-6">
                                            <h4>Languages</h4>
                                            {languagesComponent}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container px-4">
                            <div class="row justify-content-center">
                                <h1 class="text-start col-12 py-4" style={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>Expertise</h1>
                                {expertiseComponent}
                                <div class="ExpertiseDescription col-12 col-lg-8 mt-4">
                                    <p><small>Project Management</small></p>
                                    <h2>Description</h2>
                                    <p>While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row skills out working no-gutters">
                    <div>
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