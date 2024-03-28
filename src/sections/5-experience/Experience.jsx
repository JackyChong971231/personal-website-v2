import React, { useState, useEffect, useRef } from 'react';

import './Experience.css';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from '../../components/section-header/sectionHeader';
import { MultiPosition } from './components/multiPosition';
import { OnePosition } from './components/onePosition';

import { ExperienceContent } from "../../assets/content.js";

gsap.registerPlugin(ScrollTrigger);
export const Experience = () => {
    const [componentForJobs, setComponentForJobs] = useState();

    const generateCompanyHistory = (companyName) => {
        if (ExperienceContent[companyName].positions.length>1) {
            return <MultiPosition companyName={companyName} thisCompany={ExperienceContent[companyName]}/>
        } else {
            return <OnePosition companyName={companyName} thisCompany={ExperienceContent[companyName]}/>
        }
    }

    useEffect(() => {
        let tempComponentForJobs = [];
        Object.keys(ExperienceContent).map((companyName, index) => {
            tempComponentForJobs.push(generateCompanyHistory(companyName))
        })
        setComponentForJobs(tempComponentForJobs)

        gsap.timeline({scrollTrigger: {
            trigger: '#experienceSection',
            start: 'top 70%',
            end: 'top 30%',
            ease: 'power2',
            scrub: 1,
            // markers: true
        }})
            .fromTo('#Skills', {zIndex: 97, opacity: 1}, {zIndex: 0, opacity: 0}, 0)
            // .fromTo('.App', {backgroundColor: 'black'}, {backgroundColor: 'rgb(226, 226, 226)'}, 0)
            .fromTo('#experienceSection', {opacity: 0, top: '-40vh'}, {opacity: 1, top: '-60vh' }, 0)

    },[])

    return(
        <>
            <div id='experienceSection' className='experience-outer-container py-5 mt-5 w-100 '>
                <div className='experience-section-bg'></div>
                <div className='experience-inner-container col-12 col-lg-10 row px-2 m-0'>
                    <div className='col-12'>
                        <SectionHeader
                        section='experience'
                        title='Job History'
                        description='My working experience and role description'
                        />
                    </div>
                    <div className='px-4 col-12'>
                        {componentForJobs}
                        {/* {Object.keys(workingExperience).map((companyName, index) => (
                            generateCompanyHistory(companyName)
                            // <div className='experience-each-company-container'>
                            //     <div className='experience-each-company-wrapper px-3 py-2 my-4'>
                            //         <div className='experience-each-company-row-1'>
                            //             <div className='experience-each-company-logo'>
                            //                 <img className='experience-each-company-logo mx-3' src={workingExperience[companyName].logo}></img>
                            //             </div>
                            //             <div className='experience-each-company-short-detail'>
                            //                 {generateCompanyShortDetail(companyName)}
                            //             </div>
                            //         </div>
                            //         <div className='experience-each-company-row-2'>
                            //             {generateRoleDetail(companyName)}
                            //         </div>
                            //     </div>
                            //     <div className='ps-4'>
                            //         <ul class="timeline-with-icons">
                            //             {generatePositions(companyName)}
                            //         </ul>
                            //     </div>
                            // </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </>
    )
}