import React, { useState, useEffect, useRef } from 'react';

import './sectionHeader.css';

export const SectionHeader = ({section, title, description}) => {
    return (
        <>
            <div className='section-header row px-4'>
                <div className='section-header-section col-12 col-md-6'>
                    <h2>{title}</h2>
                    <p>{section}</p>
                </div>
                <div className='section-header-description'>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}