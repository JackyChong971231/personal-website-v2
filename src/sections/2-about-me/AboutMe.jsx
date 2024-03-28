import React, { useState, useEffect, useRef } from 'react';
import propic from '../../assets/images/2-about-me/ProPic.jpg';

// import { f } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import reactLogo from '../../assets/images/2-about-me/logos/react.png'
import springBootLogo from '../../assets/images/2-about-me/logos/springBoot.png'
import djangoLogo from '../../assets/images/2-about-me/logos/django.png'
import mysqlLogo from '../../assets/images/2-about-me/logos/mysql.png'
import dockerLogo from '../../assets/images/2-about-me/logos/docker.png'
import jenkinsLogo from '../../assets/images/2-about-me/logos/jenkins.png'

import './AboutMe.css';
import axios from "axios";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from '../../components/section-header/sectionHeader';
import { recordInitialVisitAWS } from '../../service/aws/visitRecordService';
import { recordInitialVisitVM, updateVisitRecordVM } from '../../service/vm/visitRecordService';

import { AboutMeContent } from "../../assets/content.js";

gsap.registerPlugin(ScrollTrigger);

const POST      = 'POST';
const GET       = "GET";

// const serverUrl = process.env.REACT_APP_SERVER_IP || 'http://137.184.166.60:8080';
// const serverUrl = process.env.REACT_APP_SERVER_IP || 'http://localhost:8080';
// const serverUrl = 'http://localhost:8080'; // testing
// const serverUrl = 'http://137.184.166.60:8080';
// const endPoint = "/api/v1/personal-website/http-request"



export function AboutMe() {
    useEffect(() => {  
        if (process.env.REACT_APP_LOCATION === 'amplify') {
            recordInitialVisitAWS()
        } else if (process.env.REACT_APP_LOCATION === 'vm') {
            recordInitialVisitVM()
        }  

        gsap.timeline({scrollTrigger:{
            trigger:'.about-me__container',
            start: 'top 70%',
            end: 'bottom 30%',
            // onEnter: updateVisitRecord,
            onEnter: updateVisitRecordVM,
            scrub: 1,
        }})
            .fromTo('.AboutMeBg', {y: -100, ease: 'none'}, {y: 0}, 0)

        gsap.to('.about-me-img-container', {scrollTrigger: ".about-me-img-container", left: 0, opacity: 1, duration: 2});
        gsap.to('.about-me-text-container', {scrollTrigger: ".about-me-text-container", left: 0, opacity: 1, duration: 2});

    },[])

    return (
        <>
            <div className='about-me-outer-container w-100'>
                <div className='about-me-section-bg'></div>
                <div class="about-me__container col-12 col-lg-10 row px-3 m-0">
                    <div className='about-me-scroll-container col-12'>
                        <p>My expertise</p>
                        <div className='about-me-scroll' style={{"--time":'50s'}}>
                            <div className='about-me-scroll-set-1'>
                                <span className='about-me-scroll-item'><img src={reactLogo}/></span>
                                <span className='about-me-scroll-item'><img src={springBootLogo}/></span>
                                <span className='about-me-scroll-item'><img src={djangoLogo}/></span>
                                <span className='about-me-scroll-item'><img src={mysqlLogo}/></span>
                                <span className='about-me-scroll-item'><img src={jenkinsLogo}/></span>
                                <span className='about-me-scroll-item'><img src={dockerLogo}/></span>
                            </div>
                            <div className='about-me-scroll-set-2'>
                                <span className='about-me-scroll-item'><img src={reactLogo}/></span>
                                <span className='about-me-scroll-item'><img src={springBootLogo}/></span>
                                <span className='about-me-scroll-item'><img src={djangoLogo}/></span>
                                <span className='about-me-scroll-item'><img src={mysqlLogo}/></span>
                                <span className='about-me-scroll-item'><img src={jenkinsLogo}/></span>
                                <span className='about-me-scroll-item'><img src={dockerLogo}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='about-me__inner-container col-12'>
                        <div class="row align-items-center">
                            <div className='about-me-text-container col-12 col-md-7'>
                                <SectionHeader 
                                section='About'
                                title='A software engineer based in Canada'
                                description={AboutMeContent.Bio}/>
                                <button className='about-me-contact-me-btn-container ms-4 my-3'
                                    onClick={() => {window.location.href='#contactSection'}}>
                                    <div className='about-me-contact-me-btn-bg'>
                                        
                                    </div>
                                    <p className='about-me-contact-me-btn-text m-0 py-2 px-4'>Contact me</p>
                                    <FontAwesomeIcon className='about-me-contact-me-btn-arrow' icon={faArrowRight} />
                                </button>
                            </div>
                            <div className='about-me-img-container col-12 col-sm-10 col-md-5'>
                                <img class="about-me-img" src={propic}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}