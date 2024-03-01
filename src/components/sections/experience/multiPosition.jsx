import React, { useState, useEffect, useRef } from 'react';

// import './multiPosition.css';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SectionHeader } from '../common/sectionHeader';

export const MultiPosition = ({companyName, thisCompany}) => {
    const [isExpand, setIsExpand] = useState(false);

    const generateCompanyShortDetail = () => {
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
    }

    const generatePositions = () => {
        const jobsInCompany = thisCompany.positions

        let tempWorkingExperienceComponent = [];
        jobsInCompany.forEach(position => {
            tempWorkingExperienceComponent.push(
                <li class="timeline-item mb-5 text-start">
                    <span class="timeline-icon">
                        <i class="fas fa-rocket text-primary fa-sm fa-fw w-25"></i>
                    </span>
                    
                    <p class=" mb-0 fw-bold ps-4">{position.title}</p>
                    <p class="each-company-multi-job__duration mb-2 ps-4">{position.duration}</p>
                    <ol class={
                        (isExpand)?"each-position-description each-position-description--expand"
                        :"each-position-description"}
                    >
                        {position.description}
                    </ol>
                    <button className='each-position-see-more-btn'
                    onClick={() => {setIsExpand(prevState => !prevState)}}>{isExpand?'See less': 'See more'}</button>
                </li>
            )
        })
        return tempWorkingExperienceComponent;
    }

    useEffect(() => {
        // console.log(thisCompany)
    }, [])

    return (
        <>
            <div className='experience-each-company-container'>
                <div className='experience-each-company-wrapper px-3 py-2 my-4'>
                    <div className='experience-each-company-row-1'>
                        <div className='experience-each-company-logo'>
                            <img className='experience-each-company-logo mx-3' src={thisCompany.logo}></img>
                        </div>
                        <div className='experience-each-company-short-detail'>
                            {generateCompanyShortDetail()}
                        </div>
                    </div>
                </div>
                <div className='ps-4'>
                    <ul class="timeline-with-icons">
                        {generatePositions()}
                    </ul>
                </div>
            </div>
        </>
    )
}