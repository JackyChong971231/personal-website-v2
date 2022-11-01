import React, { useState, useEffect } from 'react';
import propic from '../images/ProPic.jpg';

import './AboutMe.css';

export function AboutMe() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <h1 class="col-sm-6 border border-bottom-5">About Me</h1>
                    <div class="w-100"></div>
                    <p class="col-sm-6">A Software Engineer based in Hong Kong</p>
                </div>
                <div class="row">
                    <img class="col-sm-5" src={propic}></img>
                    <div class="col-sm-7">I'M Jacky Chong</div>
                </div>
            </div>
        </>
    )
}