import React, { useState, useEffect, useRef } from 'react';

import ikeaCloneImg from '../../assets/images/screenshot-ikea-clone.png';
import personalWebsiteImg from '../../assets/images/screenshot-personal-website.png';

import './Projects.css';

const projectsData = [
    {
        title: 'Personal Website',
        url: 'This site',
        image: personalWebsiteImg,
        description: 'This website serves to provide a concise overview of my skills, achievements, and work experience.',
        language: 'React'
    },
    {
        title: 'IKEA Clone',
        url: 'http://ckyjacky.ca:5001',
        image: ikeaCloneImg,
        description: 'My IKEA clone project demonstrates my full-stack development skills by seamlessly integrating frontend aesthetics with backend functionality.',
        language: 'React, Spring Boot, MySQL'
    }
]

export function Projects () {
    return (
        <div id='projectsSection' className='py-4'>
            <div className='project__header px-4 py-1'>
                <h2><b>Projects</b></h2>
                <p>below are my projects</p>
            </div>
            <div className='project__content'>
                <div className='all-projects__container py-4'>
                    {projectsData.map((eachProjectData, i) => (
                        <div className='each-project__container mx-3 mx-sm-4 px-3 py-2'>
                            <div className='each-project__header py-2'>
                                <h5 className='ms-3 mb-1'>{i+1+'.  '+eachProjectData.title}</h5>
                                {/* <h5>{eachProjectData.title}</h5> */}
                                <a className='ms-3 mb-1' href={eachProjectData.url}>{eachProjectData.url}</a>
                            </div>
                            <img className='each-project__image'
                            src={eachProjectData.image} alt="Website Thumbnail"></img>
                            
                            <div className='each-project__description mt-2'>
                                {/* <p className='mb-0'>Description</p> */}
                                <p>{eachProjectData.description}</p>
                            </div>
                            <div className='each-project__language'>
                                <p>Language: {eachProjectData.language}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}