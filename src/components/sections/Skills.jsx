import React, { useState, useEffect, useRef } from 'react';
import propic from '../images/ProPic.jpg';

// import { f } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Skills.css';

function spliceIntoChunks(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

export function Skills() {

    return (
        <>
            <div class="row container-fluid skills out no-gutters mt-3">
                <h4 class="px-4 pt-4" >“You can't connect the dots looking forward; you can only connect them looking backwards"</h4>
                <h4 class="text-end pt-2 px-4 pb-4" >Steve Jobs</h4>
            </div>
            <div class="row container-fluid skills in no-gutters">
                <h1>Skills</h1>
            </div>
        </>
    )
}