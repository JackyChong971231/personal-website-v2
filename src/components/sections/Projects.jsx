import React, { useState, useEffect, useRef } from 'react';

import ikeaCloneImg from '../../assets/images/screenshot-ikea-clone.png';
import personalWebsiteImg from '../../assets/images/screenshot-personal-website.png';

import './Projects.css';

const projectsData = [
    {
        title: 'Personal Website',
        image: personalWebsiteImg,
        description: 'A website to list my skills, achievements and work.',
        language: 'React'
    },
    {
        title: 'IKEA Clone',
        image: ikeaCloneImg,
        description: 'A website to list my skills, achievements and work.',
        language: 'React, Spring Boot, MySQL'
    }
]

export function Projects () {
    return (
        <div id='projectsSection' className='py-4 pb-5'>
            <div className='project__header px-4 py-1'>
                <h2><b>Projects</b></h2>
                <p>below are my projects</p>
            </div>
            <div className='project__content'>
                <div className='all-projects__container py-4'>
                    {projectsData.map((eachProjectData, i) => (
                        <div className='each-project__container mx-2 mx-sm-4 px-3 py-2'>
                            <div className='each-project__header py-2'>
                                <h5 className='mx-3'>{i+1+'.'}</h5>
                                <h5>{eachProjectData.title}</h5>
                            </div>
                            <img className='each-project__image'
                            src={eachProjectData.image} alt="Website Thumbnail"></img>
                            <div className='each-project__description'>
                                <p className='mb-0'>Description</p>
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