import React, { useState, useEffect, useRef } from 'react';

import ikeaCloneImg from '../../assets/images/screenshot-ikea-clone.png';
import personalWebsiteImg from '../../assets/images/screenshot-personal-website.png';
import vscodeBg from '../../assets/images/vscode.jpg';
import vscodeLineRight from '../../assets/images/vscode1.png';
import vscodeLineLeft from '../../assets/images/vscode2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faLock } from "@fortawesome/free-solid-svg-icons";

import './EachProject.css';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from '../common/sectionHeader';

export const EachProject = ({eachProjectData, index}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    // function expandOrCollapseProject(id) {
    //     if (isExpanded) {
    //         gsap.fromTo('#project'+id, {maxHeight: 0}, {
    //             duration: 1.25, 
    //             maxHeight: 1000,
    //             ease: "expo", 
    //             overwrite: "auto"
    //         });
    //         setIsExpanded(false)
    //     } else {
    //         gsap.fromTo('#project'+id, {maxHeight: 0}, {
    //             duration: 1.25, 
    //             maxHeight: 1000,
    //             ease: "expo", 
    //             overwrite: "auto"
    //         });
    //         setIsExpanded(true)
    //     }
    // }

    return (
        <div className=' col-md-6 col-12 px-3'>
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
                onClick={() => {setIsExpanded(prevState => !prevState)}}>
                    <button className='each-project-expand-btn'>
                    </button>
                    <FontAwesomeIcon className='each-project-expand-arrow' icon={(isExpanded)?faArrowUp:faArrowDown} />
                </div>
            </div>
        </div>
    )
}