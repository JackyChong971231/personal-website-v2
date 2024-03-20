import React, { useState, useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faLock } from "@fortawesome/free-solid-svg-icons";

import './EachProject.css';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from '../../components/section-header/sectionHeader';

export const EachProject = ({eachProjectData, index, showProjectContentHiddenDetail}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hiddenDetailComponent, setHiddenDetailComponent] = useState(
        <div className='each-project-hidden-detail-container'>
            <div className='each-project-hidden-detail-safari-wrapper'>
                <div className='each-project-safari-header'>
                    <div className='each-project-top-wrap'>
                        <div className='each-project-url-wrap'>
                            <FontAwesomeIcon icon={faLock} />
                            <p>{eachProjectData.url}</p>
                        </div>
                    </div>
                </div>
                <div className='each-project-content'>
                    <img className='each-project-website-hidden-info' src={eachProjectData.image}/>
                </div>
            </div>
        
            <div className={
            (isExpanded)?'each-project-hidden-info each-project-hidden-info--expanded px-3':
            'each-project-hidden-info px-3'
            }>
                <div className='row py-4 px-md-5'>
                    <div className='
                    col-12 order-2 
                    col-sm-4 order-sm-1 
                    col-md-12 order-md-2 
                    col-lg-4 order-lg-1 
                    text-start'>
                        {Object.keys(eachProjectData.skillInvolved).map((skillTitle, i) => (
                            <div>
                                <h5>{skillTitle}</h5>
                                <p>{eachProjectData.skillInvolved[skillTitle]}</p>
                            </div>
                        ))}
                        <h5>Live Site</h5>
                        <p>{eachProjectData.url}</p>
                    </div>
                    <div className='
                    col-12 order-1 
                    col-sm-8 order-sm-2 
                    col-md-12 order-md-1 
                    col-lg-8 order-lg-2 
                    text-start'>
                        <h3>
                            <span>{eachProjectData.title}</span>
                            <p><mark className='gold'><small>{eachProjectData.special}</small></mark></p>
                        </h3>
                        <p>{eachProjectData.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    useEffect(() => {
    },[])

    return (
        <div className='each-project-outermost-container col-md-6 col-12 px-3'
        onClick={() => {showProjectContentHiddenDetail(hiddenDetailComponent, eachProjectData)}}>
            <div className='each-project__container h-md-100'>
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
            
                <div className={
                (isExpanded)?'each-project-hidden-info each-project-hidden-info--expanded px-3':
                'each-project-hidden-info px-3'
                }>
                    <div className='row py-4'>
                        <div className='
                        col-12 order-2 
                        col-sm-4 order-sm-1 
                        col-md-12 order-md-2 
                        col-lg-4 order-lg-1 
                        text-start'>
                            <h5>Framework</h5>
                            <p>{eachProjectData.framework}</p>
                            <h5>Language</h5>
                            <p>{eachProjectData.language}</p>
                            <h5>Live Site</h5>
                            <p>{eachProjectData.url}</p>
                        </div>
                        <div className='
                        col-12 order-1 
                        col-sm-8 order-sm-2 
                        col-md-12 order-md-1 
                        col-lg-8 order-lg-2 
                        text-start'>
                            <h3>
                                <span>{eachProjectData.title}</span>
                                <p><mark className='gold'><small>{eachProjectData.special}</small></mark></p>
                            </h3>
                            <p>{eachProjectData.description}</p>
                        </div>
                    </div>
                </div>
                <div className='each-project-expand-btn-wrapper'
                onClick={() => {showProjectContentHiddenDetail(hiddenDetailComponent)}}>

                    <button className='each-project-expand-btn'>
                    </button>
                    <FontAwesomeIcon className='each-project-expand-arrow' icon={(isExpanded)?faArrowUp:faArrowDown} />
                </div>
            </div>
        </div>
    )
}