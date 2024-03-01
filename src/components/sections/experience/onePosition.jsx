import React, { useState, useEffect, useRef } from 'react';

// import './onePosition.css';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SectionHeader } from '../common/sectionHeader';

export const OnePosition = ({companyName, thisCompany}) => {
    const [isExpand, setIsExpand] = useState(false);

    const generateCompanyShortDetail = () => {
        const jobsInCompany = thisCompany.positions

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
                <p className={
                    (isExpand)?'each-company-short-detail__role each-company-short-detail__role--expand pt-3'
                    :'each-company-short-detail__role pt-3'}>
                    {thisJob.description}
                </p>
            </div>
        )
        
    }

    // const generateRoleDetail = () => {
    //     const thisJob = thisCompany.positions[0]
    //     return (
    //         <ol className={
    //             (isExpand)?'each-company-single-job-role-description each-company-single-job-role-description--expand'
    //             :'each-company-single-job-role-description'}>
    //             {thisJob.description}
    //         </ol>
    //     )
    // }

    useEffect(() => {
        console.log(thisCompany)
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
                            <button className='each-position-see-more-btn'
                            onClick={() => {setIsExpand(prevState => !prevState)}}>{isExpand?'See less': 'See more'}</button>
                        </div>
                    </div>
                    {/* <div className='experience-each-company-row-2'>
                        {generateRoleDetail()}
                        <button className='each-position-see-more-btn'
                        onClick={() => {setIsExpand(prevState => !prevState)}}>{isExpand?'See less': 'See more'}</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}