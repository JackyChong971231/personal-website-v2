import React, { useState, useEffect, useRef } from 'react';

import bestbuyLogo from '../images/Skills/best_buy_canada_logo.jpg';
import pclLogo from '../images/Skills/pcl_logo.jpg';
import clLogo from '../images/Skills/cl_logo.jpeg';
import hkElectricLogo from '../images/Skills/hk_electric_logo.jpeg';

import './Experience.css';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from '../common/sectionHeader';

const workingExperience = {
    'Best Buy Canada': {
        logo: bestbuyLogo,
        'CompanyDetail': 'Retail | Toronto, Canada | 53K employees',
        location: 'Toronto, Canada',
        totalDuration: 'Sep 2023 - Present',
        positions: [
            {
                title: 'Computing Solutions Advisor',
                jobType: 'Part-Time',
                duration: 'Sep 2023 - Present',
                durationCount: '6 mos',
                description: [
                // <li>Provided personalized computing advice and driving sales with proven customer satisfaction</li>,
                <li>Offered <mark class='gold'>personalized guidance</mark>, explaining features, specifications, and benefits to customers, empowering them to maximize the potential of their computing devices</li>,
                <li>Demonstrated in-depth product knowledge for effective <mark class='gold'>upselling and cross-selling</mark> of computing devices and accessories</li>,
                ]
            }
        ]
    },
    'PrimeCredit Limited': {
        logo: pclLogo,
        'CompanyDetail': 'Financial Services | Hong Kong | 501-1K employees',
        location: 'Hong Kong',
        totalDuration: 'Jun 2022 - Apr 2023',
        positions: [
            {
                title: 'Software Engineer – FinTech Innovation',
                jobType: 'Full-Time',
                duration: 'Jun 2022 - Apr 2023',
                durationCount: '11 mos',
                description: [
                <li>Developed and presented a <mark class='gold'>Proof-of-Concept program</mark> to demonstrate the <mark class='gold'>blockchain</mark>'s potential in optimizing the Loan Application Process across 3 famous financial institution</li>,
                <li>Managed the <mark class='gold'>WhatsApp Business API (WABA)</mark> and its <mark class='gold'>Django-based Backend Server</mark>, ensuring its consistent and optimal performance by adding user-requested functions, diagnosing cross-server technical issues, and resolving bugs from WABA version incompatibility and Meta errors</li>,
                <li>Led <mark class='gold'>On-Premises to Cloud API migration</mark> for <mark class='gold'>WhatsApp Business API</mark> and its <mark class='gold'>backend server</mark>, guiding vendors and users in project scope, requirements, contracts, and risk assessments for compliance</li>,
                <li>Enhanced functionalities within a <mark class='gold'>Java-based Customer Data Platform</mark> using <mark class='gold'>Spring Boot</mark>, contributing to system refinement</li>]
            }
        ]
    },
    'Cloud Light Technology Limited': {
        logo: clLogo,
        'CompanyDetail': 'Appliances, Electrical, and Electronics Manufacturing | Hong Kong | 530 employees',
        location: 'Hong Kong',
        duration: 'June 2020 - June 2022',
        durationCount: '2 yrs 1 mo',
        positions: [
            {
                title: 'Firmware Design Engineer',
                jobType: 'Full-Time',
                duration: 'Jul 2021 - June 2022',
                durationCount: '11 mos',
                description: [
                <li>Designed, developed and tested <mark class='gold'>C/C++ software, embedded firmware and bootloaders</mark> for cutting-edge <mark class='gold'>400G & 800G optical transceivers</mark></li>,
                <li style={{paddingLeft: '10%'}}>PMIC, design and develop drivers for I2C, SRAM, SDRAM, ADCs, Flash, GPIOs, ISR and peripheral ICs like TIA, CDRs</li>,
                <li>Developed and upheld the proprietary <mark class='gold'>Firmware Upload Software - PyQt5 GUI</mark></li>,
                <li>Collaborated with cross-functional teams, including testing, hardware, and chip vendors, to validate hardware and support technical leads in architecture discussions and design tradeoffs</li>]
            },
            {
                title: 'Optical Product Engineer',
                jobType: 'Full-Time',
                duration: 'June 2020 - Jul 2021',
                durationCount: '1 yr 3 mos',
                description: [
                <li>Developed a Python based <mark class='gold'>Hardware Diagnostic GUI (PyQt5)</mark> and testing software for automated firmware verification, products evaluation and demo</li>,
                <li style={{paddingLeft: '10%'}}><mark class='gold'>GUI (mainly PyQt5 and Tkinter)</mark> for different types of projects and automation programmes for firmware verification</li>,
                <li>Conducted diverse <mark class='gold'>PCB Flying Probe tests</mark> and failure and data analysis for design and yield improvement</li>,
                <li>Collaborated with PCB and Firmware Design Engineers to optimize designs for production and ensure compatibility with chips & components</li>]
            }
        ]
    },
    'The Hongkong Electric Co., Ltd.': {
        logo: hkElectricLogo,
        'CompanyDetail': 'Utilities | Hong Kong | 1K-5K employees',
        location: 'Hong Kong',
        totalDuration: 'Jul 2019 - Aug 2019',
        positions: [
            {
                title: 'Vacation Trainee (Projects Division)',
                jobType: 'Summer Intern',
                duration: 'Jul 2019 - Aug 2019',
                durationCount: '2 mos',
                description: [
                <li>Participated in studying the concepts behind some design schematics and operation theories</li>,
                <li>Control System, Generation Plant Power Supply Distribution, Transmission Substations Design and Network etc</li>,
                <li>Studied and verified the cybersecurity measures done on the newly built HKE Lamma Unit 10</li>,
                <li style={{paddingLeft: '10%'}}>NERC-CIP Standard Comparison</li>]
            }
        ]
    }
}

export const Experience = () => {
    const [componentForJobs, setComponentForJobs] = useState();

    const shortDetail = () => {

    }

    const generateCompanyShortDetail = (companyName) => {
        const jobsInCompany = workingExperience[companyName].positions
        const thisCompany = workingExperience[companyName]
        if (jobsInCompany.length > 1) {
            // short detail for multiple jobs in the company
            return (
                <div className='each-company-short-detail text-start'>
                    <p className='each-company-short-detail__title'>{companyName}</p>
                    <p className='each-company-short-detail__normal'>{thisCompany.location}</p>
                    <p className='each-company-short-detail__normal'>
                        <span>{thisCompany.duration}</span>
                        <span> • </span>
                        <span>{thisCompany.durationCount}</span>
                    </p>
                </div>
            )
        } else {
            // short detail for 1 job in the company
            const thisJob = jobsInCompany[0];
            return (
                <div className='each-company-short-detail text-start'>
                    <p className='each-company-short-detail__title'>{thisJob.title}</p>
                    <p className='each-company-short-detail__normal'>
                        <span>{companyName}</span>
                        <span> • </span>
                        <span>{thisCompany.location}</span>
                    </p>
                    <p className='each-company-short-detail__normal'>
                        <span>{thisJob.duration}</span>
                        <span> • </span>
                        <span>{thisJob.durationCount}</span>
                    </p>
                    <p className='each-company-short-detail__role pt-3'>
                        {thisJob.description}
                    </p>
                </div>
            )
        }
    }

    const generatePositions = (companyName) => {
        const jobsInCompany = workingExperience[companyName].positions
        if (jobsInCompany.length > 1) {
            const thisCompany = workingExperience[companyName]
            const dotStyle = (jobsInCompany.length < 2)? {width: "31px", height: "31px", left: "-48px"}: {width: "15px", height: "15px", left: "-40px"}
            let tempWorkingExperienceComponent = [];
            jobsInCompany.forEach(position => {
                tempWorkingExperienceComponent.push(
                    <li class="timeline-item mb-5 text-start">
                        <span class="timeline-icon" style={dotStyle}>
                            {/* <img className='company-logo' src={bestbuyLogo}/> */}
                            <i class="fas fa-rocket text-primary fa-sm fa-fw w-25"></i>
                        </span>
                        
                        <p class=" mb-2 fw-bold" style={{color: 'var(--gold)'}}>{position.title}</p>
                        <p class=" mb-2 fw-bold">{position.duration}</p>
                        {/* <img className='company-logo' src={bestbuyLogo}></img> */}
                        <ul class="each-position-description" style={{color: 'lightgray', listStylePosition: 'inside'}}>
                            {position.description}
                        </ul>
                    </li>
                )
            })
            return tempWorkingExperienceComponent;
        }
        else {return null}
    }

    useEffect(() => {
        // let = tempComponentForJobs = [];
        // for (const companyName in workingExperience) {
        //     const jobsInCompany = workingExperience[companyName]['Positions']
        //     if (jobsInCompany.length > 1) {
                
        //     } else {

        //     }
        // }
    },[])

    return(
        <>
            <div className='experience-outer-container py-4'>
                <SectionHeader
                section='experience'
                title='Job History'
                description='My working experience and role description'
                />
                <div className='px-4'>
                    {Object.keys(workingExperience).map((companyName, index) => (
                        <div className='experience-each-company-container'>
                            <div className='experience-each-company-wrapper px-3 py-2 my-4'>
                                <div className='experience-each-company-logo'>
                                    <img className='experience-each-company-logo mx-3' src={workingExperience[companyName].logo}></img>
                                </div>
                                <div className='experience-each-company-short-detail'>
                                    {generateCompanyShortDetail(companyName)}
                                </div>
                            </div>
                            <div className='ps-4'>
                                <ul class="timeline-with-icons">
                                    {generatePositions(companyName)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}